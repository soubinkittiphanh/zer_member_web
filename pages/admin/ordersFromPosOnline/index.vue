<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການບິນຂາຍ Online</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <!-- <v-dialog v-model="dialogOrderDetail" max-width="1024" >
      <OrderDetailPos :key="componentKey" :header="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPos>
    </v-dialog> -->
    <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <OrderDetailPosCRUD @reload="loadData()
    dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>


    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>

          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
            <v-autocomplete item-text="name" item-value="id" :items="customTerminalList" label="ເລືອກຕາມ ຮ້ານ*"
              v-model="terminalId"></v-autocomplete>
            <!-- current LocationId :{{ customTerminalList }} -->
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Generate excel file
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap>
          <v-row>
            <v-col cols="6" lg="6">
              <order-sumary-card-pos :showTotal="true"
                :gross="getFormatNum(totalSaleRaw - (+this.unpaidCodOrder.saleRawNumber))" :orderDetail="{
      'title': 'ຍອດບິນ',
      'amount': getFormatNum(activeOrderHeaderList.length),
      // 'sale': getFormatNum(totalSale - totalDiscount),// Old version 
      'sale': getFormatNum(totalSale), // The total field is already exclude discount
      // 'discount': getFormatNum(totalDiscount),
      // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
      // 'gross': getFormatNum(totalSale - totalDiscount)

    }">

              </order-sumary-card-pos>
            </v-col>
            <!-- <v-col cols="6" lg="6">
              <order-sumary-card i :orderDetail="this.unpaidCodOrder">

              </order-sumary-card>
            </v-col> -->
          </v-row>
        </v-layout>
      </v-card-text>

      <!-- <v-divider></v-divider> -->



      <v-data-table v-if="activeOrderHeaderList" :headers="headers" :search="search" :items="activeOrderHeaderList">
        <template v-slot:[`item.bookingDate`]="{ item }">
          {{ item.bookingDate.split('T')[0] }}
          <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
          <h6 :style="{ 'color': countDay(item.bookingDate.split('T')[0]) > item.client.credit ? 'red' : 'green' }">
            {{ countDay(item.bookingDate.split('T')[0]) }}
          </h6>
          <!-- </v-chip> -->
        </template>
        <template v-slot:[`item.client.credit`]="{ item }">
          <v-chip
            v-if="new Date(dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()"
            class="ma-2" color="red" text-color="white">
            {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
          </v-chip>
          <v-chip v-else class="ma-2" color="green" text-color="white">
            {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
          </v-chip>
        </template>
        <template v-slot:[`item.dynamic_customer`]="{ item }">
          <v-avatar :color="item.dynamic_customer ? 'green' : 'red'" size="10">
          </v-avatar>
        </template>
        <template v-slot:[`item.discount`]="{ item }">
          {{ numberWithCommas(item.discount) }}
        </template>
        <template v-slot:[`item.total`]="{ item }">
          {{ numberWithCommas(item.total + item.discount) }}
        </template>
        <template v-slot:[`item.grandTotal`]="{ item }">
          {{ numberWithCommas((item.total + item.dynamic_customer.rider_fee) - item.dynamic_customer.cod_fee) }}
        </template>
        <template v-slot:[`item.dynamic_customer.cod_fee`]="{ item }">
          {{ numberWithCommas(item.dynamic_customer.cod_fee) }}
        </template>
        <template v-slot:[`item.dynamic_customer.rider_fee`]="{ item }">
          {{ numberWithCommas(item.dynamic_customer.rider_fee) }}
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>
        <!-- Bae request to remove edit button  -->
        <!-- <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewItem(item)
          wallet = true
            ">
<i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template> -->
        <template v-slot:[`item.print`]="{ item }">
          <!-- TODO: TICKET PRINT -->
          <v-btn @click="generatePrintViewDeliveryCustomer(item)" text color="primary">
            <span class="mdi mdi-printer"></span>
          </v-btn>

        </template>
        <!-- <template v-slot:[`item.cancel`]="{ item }">
          <v-btn  color="warning" text @click="cancelItem(item)
          wallet = true
            ">
            <i class="fas fa-sync"></i>
          </v-btn>
          
        </template> -->
        <template v-slot:[`item.view`]="{ item }">
          <v-btn text @click="viewItem(item)" color="primary">
            <i class="fas fa-eye"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.dynamic_customer.tel`]="{ item }">
          <v-row>
            <v-col cols="12">
              <v-btn color="blue darken-1" text @click="whatsappLink(item.dynamic_customer.tel)">
                <a :href="whatsappContactLink" target="_blank">
                  <span class="mdi mdi-whatsapp"></span>
                </a>
              </v-btn>
              {{ item.dynamic_customer.tel }}
            </v-col>
          </v-row>


        </template>
      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { ticketHtml, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999, //LocationId to filter sale base on current location selected 
      shippingList: [],
      currencyList: [],
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        // {
        //   text: 'ID ລູກຄ້າ',
        //   align: 'center',
        //   value: 'client.id',
        //   sortable: true,
        // },
        {
          text: 'Offline/Online',
          align: 'center',
          value: 'dynamic_customer',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'dynamic_customer.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'dynamic_customer.tel',
          sortable: true,
        },
        {
          text: 'ບ່ອນສົ່ງ',
          align: 'center',
          value: 'dynamic_customer.address',
          sortable: true,
        },
        {
          text: 'ລາຄາເຕັມ',
          align: 'end',
          value: 'total',
          sortable: false,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },

        {
          text: 'ຄ່າຂົນສົ່ງ',
          align: 'end',
          value: 'dynamic_customer.rider_fee',
          sortable: false,
        },
        {
          text: 'COD/Rider Fee',
          align: 'end',
          value: 'dynamic_customer.cod_fee',
          sortable: false,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'grandTotal',
          sortable: false,
        },
        {
          text: 'ຂົນສົ່ງ',
          align: 'center',
          value: 'dynamic_customer.shipping.name',
          sortable: true,
        },
        {
          text: 'ການຊຳລະ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        {
          text: 'ຮ້ານ',
          align: 'center',
          value: 'location.name',
          sortable: true,
        },
        {
          text: 'ໄຣເດີ້',
          align: 'center',
          value: 'dynamic_customer.rider.name',
          sortable: true,
        },
        {
          text: 'ເຂດ',
          align: 'center',
          value: 'dynamic_customer.geography.description',
          sortable: true,
        },
        {
          text: 'ຜູ້ລົງທຸລະກຳ',
          align: 'end',
          value: 'user.cus_name',
          sortable: false,
        },
        {
          text: 'ເວລາລົງ',
          align: 'end',
          value: 'createdAt',
          sortable: false,
        },
        {
          text: 'ພິມບິນ',
          align: 'end',
          value: 'print',
          sortable: false,
        },
        {
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'view',
          sortable: true,
        },
        // {
        //   text: 'ຍົກເລີກບິນ',
        //   align: 'end',
        //   value: 'cancel',
        //   sortable: true,
        // },
      ],
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },
  async created() {
    this.terminalId = this.findSelectedTerminal
    await this.loadData()
    await this.loadShipping()
    await this.loadCurrency()
  },
  watch: {
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },
  computed: {
    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal)
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        "id": 999, "code": 1999, "name": "ທັງໝົດ", "description": "", "locationId": 1,
      }
      originalTerminalList.push(extraTerminal)
      console.log(`Terminal customer all len: ${originalTerminalList.length}`);
      return originalTerminalList;
    },
    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      const terminalInfo = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
      console.log(`************ ${this.findAllTerminal.length} SELECTED ${terminalInfo['name']} ************ `);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },
    ticketCommon() {
      return ticketHtml();
    },
    ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    activeOrderHeaderList() {
      console.log(`TerminalSelcted ${this.terminalId}`);
      const terminal = this.findAllTerminal.find(el => el['id'] == this.terminalId)
      if (!terminal) {
        return this.orderHeaderList.filter(el => el['isActive'] == true && el['paymentId'] != 2)
      }
      console.log(`Current location ${JSON.stringify(terminal)}`);
      // return this.orderHeaderList.filter(el => el['isActive'] == true && el['paymentId'] != 2)
      return this.orderHeaderList.filter(el => el['isActive'] == true && el['paymentId'] != 2 && el['locationId'] == terminal['locationId'])
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += el.total + el.dynamic_customer.rider_fee - el.dynamic_customer.cod_fee
      })
      return total
      // return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
    },

    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
      // return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          console.log("Concept applied");
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.activeOrderHeaderList);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },
    currentShipping(shippingId) {
      const shipping = this.shippingList.find(el => el.id == shippingId)
      if (shipping == undefined) return ''
      return shipping['name']
    },
    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
      this.dialogOrderDetail = true;
    },
    countDay(startDate) {
      return dayCount(startDate)
    },
    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day);
      return getNextDate(startDate, day)
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    whatsappLink(item) {
      console.log(`******** customer tel ${item} *******`);
      const tel = item.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
    },
    cancelItem(payload) {
      console.log("Order id", payload.orderId);
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.orderId
      // this.orderLockingSessionId = payload.lockingSessionId;
      this.cancelForm = true;
    },
    handleEvent() {
      this.dialogOrderDetail = false;
    },
    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        userId: this.userId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId) {
        apiLine = 'api/sale/findByDateAndUser'
      }
      await this.$axios
        .get(apiLine, { params: { date } })
        .then((res) => {
          // ****** Clear Old Data
          this.orderHeaderList = []
          for (const iterator of res.data) {
            if (iterator['dynamic_customer']) {
              iterator['print'] = iterator['id']
              this.orderHeaderList.push(iterator)
            }
          }
          console.log("====> " + this.orderHeaderList.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async loadShipping() {
      this.$axios
        .get('/api/shipping/find')
        .then((res) => {
          this.shippingList = res.data
        })
        .catch((er) => {
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },
    async loadCurrency() {
      this.isloading = true;
      this.currencyList = []
      console.log("Loading currency ===>");
      await this.$axios
        .get('/api/currency/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.currencyList.push(iterator);
          }
        })
        .catch((er) => {
          // console.log('Data: ' + er)
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },
    formatNumber(val) {
      return getFormatNum(val)
    },

    generatePrintViewDeliveryCustomer(saleHeader) {
      console.log(`ITEM SALE HEADER : ${saleHeader.id}`);
      console.log(`ITEM SALE HEADER : ${this.currentTerminal.id}`);
      let txnListHtml = ``
      for (const iterator of saleHeader.lines) {
        const product = this.findAllProduct.find(el => el.id == iterator.productId)
        console.log(`=======${JSON.stringify(product)}======`);
        const quantity = iterator.quantity
        const total = iterator.quantity * iterator.price
        txnListHtml +=
          `<div class="ticket">
                    <div class="product-name">${product.pro_name} </div>
                    <div class="price"> ${quantity} ${saleHeader.payment.payment_code == 'COD' ? ' X ' + this.formatNumber(total) : ''}</div>
                </div>`
      }
      const discountHtml = `<div class="ticket">
                    <div class="product-name">ສ່ວນຫລຸດ </div>
                    <div class="price"> - ${this.formatNumber(saleHeader.discount)}</div>
                </div>`
      const riderFeeHtml = `<div class="ticket">
                    <div class="product-name">ຄ່າສົ່ງ </div>
                    <div class="price">${this.formatNumber(saleHeader.dynamic_customer.rider_fee)}</div>
                </div>`
      //*********Payment info tag********/
      let totalHtml = '';
      for (const iterator of this.currencyList) {
        if (iterator.code == 'LAK' && (saleHeader.payment.payment_code == 'COD' || this.currentShipping(saleHeader.dynamic_customer.shippingId) == 'RIDER')) {
          totalHtml += `
                                    <div class="ticket">
                                        <div class="product-name"></div>
                                    <div class="price-total"> <h5>ຍອດລວມ(${saleHeader.payment.payment_code}): ${this.formatNumber(((saleHeader.total + (+saleHeader.dynamic_customer.rider_fee))))}  </h5> </div>
                                </div>
                                    `
        }

      }


      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <h5> ວັນທີ: ${saleHeader.bookingDate}</h5>
                 <h5> ຮ້ານ: ${this.currentTerminal['location']['company']['name']} </h5>
       <h5> ເບີໂທ: ${this.currentTerminal['location']['company']['tel']} </h5>
                <hr> </hr>
                <h5> ຜູ້ຮັບ: ${saleHeader.dynamic_customer.name}</h5>
                <h5> ໂທ: ${saleHeader.dynamic_customer.tel} </h5>
                <h5> ຂົນສົ່ງ: ${this.currentShipping(saleHeader.dynamic_customer.shippingId)} </h5>
                <h5> ບ່ອນສົ່ງ: ${saleHeader.dynamic_customer.address} - ${saleHeader.dynamic_customer.geography.description}</h5>
              ${this.currentShipping(saleHeader.dynamic_customer.shippingId) == 'RIDER' ? `` : `<h5> ຄ່າຝາກ: ${saleHeader.dynamic_customer.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' : 'ຕົ້ນທາງ'}</h5>`}  
                <hr> </hr>
                ${txnListHtml}
                ${saleHeader.dynamic_customer.rider_fee > 0 ? riderFeeHtml : ''}
                ${saleHeader.discount > 0 && saleHeader.payment.payment_code == 'COD' ? discountHtml : ''}
                <hr> </hr>
                ${totalHtml}
            </body>
            </html>
        `
      const printWin = window.open(
        '',
        '',
        'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
      )
      printWin.document.open()
      printWin.document.write(windowContent)

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
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
</style>
