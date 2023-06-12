<template>
  <div class="text-center">
    <h1>PRODUCT LIST</h1>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isstock" max-width="600px">
      <card-form :product-id="selectedProductId" :product-name="selectedProductName" @close-dialog="isstock = false"
        @reload="fetchData"></card-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" sm="6" md="6">
            <v-btn class="mr-0" @click="rebuildStock()">
              <i class="fas fa-sync"></i>
              Rebuild stock
            </v-btn>
          </v-col>
        </v-row>


      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <NuxtLink to="/admin/product">ສ້າງສິນຄ້າໃຫມ່</NuxtLink>

          </v-toolbar>
        </template>
        <template v-slot:[`item.function`]="{ item }">
          <v-icon small class="mr-2" @click="
            editItem(item)
          isedit = true
            ">
            mdi-pencil
          </v-icon>
          <v-btn @click="triggerCardForm(item)">
            <i class="fas fa-cart-plus"></i>
            ເພີ່ມສະຕັອກ
          </v-btn>
          <v-btn @click="editStock(item)">
            <i class="fas fa-dolly"></i>
            ເບິ່ງສະຕັອກ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
  middleware: 'auths',
  data() {
    return {
      isstock: false,
      selectedProductId: '',
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
      headers: [
        {
          text: 'ໄອດີ',
          align: 'center',
          value: 'pro_id',
        },
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
        { text: 'Stock', align: 'center', value: 'pro_card_count' },
        { text: 'cost', align: 'center', value: 'pro_cost_price' },
        {
          text: 'ຟັງຊັ່ນ',
          align: 'center',
          value: 'function',
          sortable: false,
        },
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
    await this.fetchData()
    await this.loadCardCategory()
  },

  methods: {
    triggerCardForm(payload) {
      this.selectedProductId = payload.pro_id;
      this.selectedProductName = payload.pro_name;
      this.isstock = true;
    },
    async fetchData() {
      this.isloading = true
      await this.$axios
        .get('product_f')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.pro_id)
            return {
              pro_id: el.pro_id,
              pro_name: el.pro_name,
              pro_price: el.pro_price,
              pro_desc: el.pro_desc,
              pro_status: el.pro_status,
              pro_category: el.pro_category,
              pro_category_desc: el.pro_category + ' - ' + el.categ_name,
              pro_card_count: el.card_count,
              pro_cost_price: el.cost_price,
              pro_outlet: el.outlet,
              pro_outlet_name: el.outlet_name,
              function: el.pro_id,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    editItem(idx) {
      console.log('ID ' + idx.pro_id)
      console.log('NAME ' + idx.pro_name)
      console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/product/${idx.pro_id}`)
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id)
      console.log('NAME ' + idx.pro_name)
      console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`)
    },

    attachFile(payload) {
      this.carddata.length = 0
      const file = payload // in case vuetify file input
      // this.files = payload
      const reader = new FileReader()
      if (file) {
        console.log('FILE LEN: ' + file)
        reader.onload = (res) => {
          this.content = res.target.result
          console.log('Data content => : ' + this.content)
          const arr = this.content.replace(/\r\n/g, '\n').split('\n') // filter text line by line
          const tempCardData = arr.filter((el) => el !== '' && el.length >= 10) // filter only useable value and trim out null line
          let i = 0
          tempCardData.forEach((element) => {
            // loop and push to real datacart
            i++
            console.log(`Data loop ${i} ${element}`)
            this.carddata.push(
              element.replace('	', '|').replace('	', '|').split("'").pop()
            ) // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop())
          })
          console.log('CARD DATA: ' + this.carddata)
        }
        reader.onerror = (err) => console.log(err)
        reader.readAsText(file)
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
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
        await this.$axios.post("/api/card/rebuildStock").then(response => {
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