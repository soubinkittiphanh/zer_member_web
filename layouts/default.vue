<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      color="#01532B"
      
      app
    >
      <v-list >
        
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
       
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title v-text="item.title" :style="{ color: 'white' }"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
  
    </v-app-bar> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; WHAT THE DEV {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // layout:"empty",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'ຫນ້າຫລັກ',
          to: '/admin',
        },
        {
          icon: 'mdi-view-list',
          title: 'ຈັດການປະເພດສິນຄ້າ',
          to: '/admin/category',
        },
        {
          icon: 'mdi-barcode-scan',
          title: 'ຈັດການສິນຄ້າ',
          to: '/admin/product',
        },
        {
          icon: 'mdi-barcode',
          title: 'ລາຍການສິນຄ້າ',
          to: '/admin/product/productlist',
        },
   
        {
          icon: 'mdi-cart-check',
          title: 'ລາຍການບິນຂາຍ',
          to: '/admin/orders',
        },
        {
          icon: 'mdi-golf-cart',
          title: 'ຕິດຕາມ COD',
          to: '/admin/cod_order',
        },
        {
          icon: 'mdi-cart-remove',
          title: 'ລາຍການໃບບິນຍົກເລີກ ',
          to: '/admin/cancel_order',
        },
        {
          icon: 'mdi-account-key',
          title: 'ຈັດການຜູ້ໃຊ້ງານ',
          to: '/admin/member',
        },
        {
          icon: 'mdi-bike-fast',
          title: 'ຈັດການRider',
          to: '/admin/rider',
        },
        {
          icon: 'mdi-bike-fast',
          title: 'Campaign manager',
          to: '/admin/campaign',
        },
        {
          icon: 'mdi-account',
          title: 'ຈັດການລູກຄ້າ',
          to: '/admin/customer',
        },
        {
          icon: 'mdi-account',
          title: 'ບັນຊີ ລາຍຈ່າຍ',
          to: '/admin/ap',
        },
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
}
</script>
<style scoped>
* {
  font-family: 'noto sans lao';
}
</style>
