<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed color="#01532B" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" :style="{ color: 'white' }" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ************** => Header Appbar ************** -->
    <v-app-bar app light clipped-left clipped-right>
      <v-row no-gutters align="center">
        <v-col cols="2">

        </v-col>
        <v-col cols="4">
        </v-col>
        <v-col cols="6">
          <v-chip class="ml-10" color="primary" variant="outlined">
            Dcommerce
          </v-chip>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- ************** Header Appbar <= ************** -->
    <v-main :key="mainComponentKey">
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio v-for="terminal in findAllTerminal" :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description" :value="terminal.id"></v-radio>
              <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue-darken-1" variant="text" @click="switchTerminal">
              ເລືອກ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy;{{ new Date().getFullYear() }} Dcommerce: V.R23.0.5 user: {{ user.cus_name }} id: {{ user.id }} </span>
      <v-spacer></v-spacer>
      <v-chip v-if="findSelectedTerminal" class="ma-2" color="warning" variant="outlined" @click="terminalDialog = true">
        {{ currentTerminal['name'] }}
      </v-chip>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  // layout:"empty",
  data() {
    return {
      intervalId: null,
      terminalDialog: false,
      terminalSelected: 1,
      clipped: false,
      drawer: true,
      fixed: true,
      mainComponentKey: 1,
      items: [
        {
          icon: 'mdi-home',
          title: 'ຫນ້າຫລັກ',
          to: '/admin',
        },
        {
          icon: 'mdi mdi-truck-cargo-container',
          title: 'ຈັດການຂົນສົ່ງ',
          to: '/admin/shipping',
        },
        {
          icon: 'mdi-currency-usd-off',
          title: 'ຈັດການອັດຕາແລກປ່ຽນ',
          to: '/admin/currency',
        },
        {
          icon: 'mdi mdi-cash-multiple',
          title: 'ຈັດການ ປະເພດຊຳລະ',
          to: '/admin/payment',
        },
        {
          icon: 'mdi mdi-warehouse',
          title: 'Warehouse',
          to: '/admin/location',
        },
        // {
        //   icon: 'mdi mdi-network-pos',
        //   title: 'terminal',
        //   to: '/admin/terminal',
        // },
        // ********* 231001 CH By Bae *********
        {
          icon: 'mdi mdi-network-pos',
          title: 'ຈັດການຮ້ານຄ້າ',
          to: '/admin/terminal',
        },
        {
          icon: 'mdi mdi-account-box-multiple-outline',
          title: 'ຈັດການລູກຄ້າ',
          to: '/admin/client',
        },

        {
          icon: 'mdi mdi-transfer',
          title: 'Transfer',
          to: '/admin/transfer',
        },
        {
          icon: 'mdi-view-list',
          title: 'ຈັດການປະເພດສິນຄ້າ',
          to: '/admin/category',
        },

        {
          icon: 'mdi-barcode',
          title: 'ລາຍການສິນຄ້າ',
          to: '/admin/product/productlist',
        },
        {
          icon: 'mdi mdi-speedometer-slow',
          title: 'ສິນຄ້າໃກ້ໝົດ',
          to: '/admin/minstock',
        },
        {
          icon: 'mdi-receipt-text-check-outline',
          title: 'ລາຍການບິນຂາຍ POS',
          to: '/admin/ordersFromPos',
        },
        {
          icon: 'mdi-receipt-text-check-outline',
          title: 'ລາຍການບິນຂາຍ Online',
          to: '/admin/ordersFromPosOnline',
        },
        {
          icon: 'mdi-receipt-text-clock-outline',
          title: 'ລູກຄ້າຕິດຫນີ້',
          to: '/admin/ordersFromPosCredit',
        },
        {
          icon: 'mdi-receipt-text-arrow-right',
          title: 'ໃບສະເຫນີລາຄາ',
          to: '/admin/quotationList',
        },
        {
          icon: 'mdi-receipt-text-remove-outline',
          title: 'ລາຍງານຍົກເລີກ',
          to: '/admin/ordersFromPosCancel',
        },
        // **************** This menu to check sale from Mobile App and this is Facebook COD sale model *************//
        // {
        //   icon: 'mdi-cart-check',
        //   title: 'ລາຍການບິນຂາຍ - Mobile',
        //   to: '/admin/orders',
        // },
        // {
        //   icon: 'mdi-golf-cart',
        //   title: 'ຕິດຕາມ COD',
        //   to: '/admin/cod_order',
        // },
        // **************** This menu to check sale from Mobile App and this is Facebook COD sale model *************//
        // {
        //   icon: 'mdi-receipt-text-remove-outline',
        //   title: 'ລາຍການໃບບິນຍົກເລີກ ',
        //   to: '/admin/cancel_order',
        // },
        // {
        //   icon: 'mdi-account-key',
        //   title: 'ຈັດການຜູ້ໃຊ້ງານ',
        //   to: '/admin/member',
        // },
        {
          icon: 'mdi-bike-fast',
          title: 'ຈັດການRider',
          to: '/admin/rider',
        },
        // {
        //   icon: 'mdi-seal',
        //   title: 'Campaign manager',
        //   to: '/admin/campaign',
        // },
        {
          icon: 'mdi-account',
          title: 'ຜູ້ໃຊ້ງານ',
          to: '/admin/user',
        },
        {
          // <i class="fas fa-money-check-edit-alt"></i>
          icon: 'mdi-receipt-text-arrow-right-outline',
          title: 'ບັນຊີ ລາຍຈ່າຍ',
          to: '/admin/ap',
        },
        {
          icon: 'mdi-receipt-text-arrow-left-outline',
          title: 'ບັນຊີ ລາຍຮັບ',
          to: '/admin/ar',
        },
        // {
        //   icon: 'mdi-truck-cargo-container',
        //   title: 'ຈັດຊື້',
        //   to: '/admin/po',
        // },
        // {
        //   icon: 'mdi-chart-bar',
        //   title: 'Transaction type',
        //   to: '/admin/txn_type',
        // },
        // {
        //   icon: 'mdi-chart-line',
        //   title: 'Transaction',
        //   to: '/admin/txn',
        // },
        // {
        //   icon: 'mdi-cash',
        //   title: 'ລາຍງານສະເຕດເມັ້ນ',
        //   to: '/admin/report',
        // },
        // {
        //   icon: 'mdi-cash',
        //   title: 'ລາຍງານບັດທີ່ຍົກເລີກ',
        //   to: '/admin/report_card',
        // },
        //  {
        //   icon: 'mdi-alarm-light',
        //   title: 'ຈັດການໂຄສະນາ',
        //   to: '/admin/advertise',
        // },
        //  {
        //   icon: 'mdi-bank',
        //   title: 'ຈັດການທະນາຄານ',
        //   to: '/admin/bank',
        // },
        //  {
        //   icon: 'mdi-qqchat',
        //   title: 'ປະເພດຂໍ້ຄວາມຈາກລູກຄ້າ',
        //   to: '/admin/customer_request',
        // },
        //  {
        //   icon: 'mdi-message-plus',
        //   title: 'ລາຍການແຈ້ງເຕີມ',
        //   to: '/admin/customer_request/topup',
        // },
        //  {
        //   icon: 'mdi-message-alert',
        //   title: 'ລາຍການແຈ້ງຖອນ',
        //   to: '/admin/customer_request/withdraw',
        // },
        {
          icon: 'mdi mdi-file-search-outline',
          title: 'ລາຍງານ ລູກຄ້າຕິດຫນີ້',
          to: '/admin/ordersFromPosSummaryByCustomer',
        },
        {
          icon: 'mdi-logout',
          title: 'ອອກຈາກລະບົບ',
          to: '/admin/logout',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  created() {
    console.log(`TERMINAL SELECTED CREATED= >>>>>>>> ${this.findSelectedTerminal}`);
    this.terminalSelected = this.findSelectedTerminal
    this.checkAllInitData()
  },
  mounted() {
    //******** Check if all common variable is ready ******** */
    // this.intervalId = setInterval(this.checkAllInitData, 1000);
    //******** Listen for browser reload ******** */
    window.addEventListener('beforeunload', this.checkAllInitData);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.clearInterval);
  },
  computed: {
    ...mapGetters(['findSelectedTerminal', 'findAllTerminal', 'findAllLocation', 'currentSelectedLocation']),
    user() {
      return this.$auth.user || ''
    },
    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },
  },
  methods: {

    clearInterval() {
      clearInterval(this.intervalId);
    },
    ...mapActions(['initiateData']),
    checkAllInitData() {
      // setInterval(() => {
      console.info(`...loading ${this.findAllTerminal.length}... ${new Date().toLocaleTimeString()}`);
      if (this.findAllTerminal.length == 0) {
        console.error(`Data missing need to reload`)
        this.initiateData(this.$axios)
      }
      if (!this.currentSelectedLocation) {
        this.terminalDialog = true
      }
      // }, 1000);
    },
    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId'])
      this.setSelectedLocation(location)
      //********** refresh component so the data will be update fresh **********//
      this.mainComponentKey += 1;
      this.terminalDialog = false
    },
    ...mapActions(['setSelectedTerminal', 'setSelectedLocation']),
  }
}
</script>
<style scoped>
* {
  font-family: 'noto sans lao';
}
</style>
