<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການສິນຄ້າ ພ້ອມມູນຄ່າສຕັອກ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isstock" max-width="600px">
      <card-form :key="stockFormKey" :product-id="selectedProductId" :id="selectedId" :cost="selectedProductCost"
        :product-name="selectedProductName" @close-dialog="isstock = false" @reload="rebuildStock"></card-form>
    </v-dialog>
    <v-dialog v-model="editProductForm" max-width="1200px">
      <product-form :key="productFormKey" @close-dialog="editProductForm = false" :header-id="selectedProductId"
        @refresh="fetchData" :isEdit="editProductForm"></product-form>
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create @close-dialog="productFormCreate = false" @refresh="fetchData">
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form :key="priceListFormKey" @close-dialog="priceListDialog = false" :record-id="pricingRecordId"
        @refresh="fetchData">
      </price-list-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn class="primary" size="large" variant="outlined" @click="rebuildStock" rounded>
              <span class="mdi mdi-update"></span>
              Rebuild stock
            </v-btn>
          </v-col>
        </v-row>


      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="stockList" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title><v-data-table :headers="simpleHeaders" :items="simpleItems"></v-data-table></v-toolbar-title>
            <!-- <v-toolbar-title>ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ: {{ formatNumber(grandTotalStockValue) }}</v-toolbar-title> -->
            <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
            <v-spacer></v-spacer>
            <!-- <v-btn size="large" variant="outlined" @click="productFormCreate = true" class="primary" rounded>
              <span class="mdi mdi-note-plus-outline"></span>
              ສ້າງສິນຄ້າໃຫມ່
            </v-btn> -->


          </v-toolbar>
        </template>
        <!-- <template v-slot:[`item.functionStockView`]="{ item }">
          <v-btn color="primary" text @click="editStock(item)
          wallet = true
            ">
            <i class="fa fa-eye"></i>
          </v-btn>
        </template> -->
        <template v-slot:[`item.product.pro_price`]="{ item }">
          {{ formatNumber(item.product.pro_price) }}
        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}
        </template>
        <template v-slot:[`item.cost`]="{ item }">
          {{ formatNumber(item.totalCardValue / item.cardCount) }}
        </template>
        <template v-slot:[`item.totalCardValue`]="{ item }">
          {{ formatNumber(item.totalCardValue) }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ProductForm, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      simpleHeaders: [
        { text: 'ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ', value: 'age' },
      ],
      simpleItems: [
      ],
      stockList: [],
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      timer: null,
      headers: [
        {
          text: 'recid',
          align: 'center',
          value: 'product_id',
        },
        {
          text: 'ຊື່ສິນຄ້າ',
          align: 'center',
          value: 'product.pro_name',
        },
        { text: 'ລາຄາ', align: 'right', value: 'product.pro_price' },
        { text: 'ຈຳນວນ', align: 'right', value: 'cardCount' },
        { text: 'ຕົ້ນທຶນ', align: 'right', value: 'cost' },
        { text: 'ມູນຄ່າລວມ', align: 'right', value: 'totalCardValue' },
        // {
        //   text: 'ເບິ່ງສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStockView',
        //   sortable: false,
        // },
      ],
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  async mounted() {
    await this.loadCardCategory()
    await this.fetchData()
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
    grandTotalStockValue() {
      const totalStockValue = this.stockList.reduce((total, item) => {
        return total + item.totalCardValue;
      }, 0);
      return totalStockValue;
    }
  },
  methods: {

    formatNumber(value) {
      return getFormatNum(value)
    },

    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios
        .get(`api/card/find/count/group_by_product`)
        .then((res) => {
          this.stockList = res.data;
          console.log(`Stock entry count ${this.stockList.length}`);
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
      const simpleHead = { age: this.formatNumber(this.grandTotalStockValue), };
      this.simpleItems.push(simpleHead)
    },

    editStock(idx) {
      console.log('ID ' + idx.product.pro_id)
      console.log('NAME ' + idx.product.pro_name)
      // console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.product.pro_id}`)
    },
    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = res.data.map((el) => {
            return {
              card_type_code: el.card_type_code,
              card_type_name: el.card_type_name,
            }
          })
          this.selectedCardType = this.cardType[0].card_type_code
          console.log('CARD LEN: ' + this.cardType.length)
          console.log('CARD LEN: ' + this.cardType[0].card_type_code)
          this.isloading = false
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.isloading = false
        })
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        await this.$axios.put("/api/product/stockcount").then(response => {
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.fetchData()
        }).catch(error => {
          swalError2(this.$swal, "Error", error.response.data)
        })
        this.isloading = false
      }
    }
  },
}
</script>