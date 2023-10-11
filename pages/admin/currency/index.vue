<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ສະກຸນເງິນ</h3>

      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5zESPW16wgY">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="currencyDialogForm" max-width="1024">
      <currency-form @reload-data="loadData()
      currencyDialogForm = false" :isCreate="isCreate" :key="componentKey" :recordId="currencySelected"
        @close-dialog="currencyDialogForm = false">
      </currency-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createRecord" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table v-if="currencyList" :headers="headers" :search="search" :items="currencyList">
        <template v-slot:[`item.rate`]="{ item }">
          {{ getFormatNum(item.rate) }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewRecord(item)
          wallet = true
            ">
            <i class="fa fa-pencil-square-o"></i>
          </v-btn>
        </template>
      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import CurrencyForm from '~/components/CurrencyForm.vue'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD, CurrencyForm },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog:false,
      componentKey: 0,
      currencyDialogForm: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      currencyList: [],
      currencySelected: '',
      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'code',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },

        {
          text: 'ອັດຕາແລກປ່ຽນ',
          align: 'center',
          value: 'rate',
          sortable: true,
        },
        {
          text: 'View/Update',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],
    }
  },
  async created() {
    await this.loadData()
  },
  computed: {
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    viewRecord(item) {
      this.componentKey += 1;
      this.currencySelected = item.id
      this.isCreate = false
      this.currencyDialogForm = true;
    },
    createRecord() {
      this.componentKey += 1;
      this.currencySelected = 0
      this.isCreate = true
      this.currencyDialogForm = true;
    },
    async loadData() {
      if (this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/currency/findAll`)
        .then((res) => {
          // ****** Clear Old Data
          this.currencyList = []
          for (const iterator of res.data) {
            iterator.pk = iterator['id']
            this.currencyList.push(iterator)
          }
          console.log("====> " + this.currencyList.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* .myelevation {
  background-color: '#f0f0f';
  color: red;
} */
</style>
