<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      color="#1E90FF"
      
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
          <v-list-item-content  >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
  
    </v-app-bar>
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
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
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
          icon: 'mdi-basket',
          title: 'ລາຍການສັ່ງຊື້',
          to: '/admin/orders',
        },
        {
          icon: 'mdi-account-key',
          title: 'ຈັດການຜູ້ໃຊ້ງານ',
          to: '/admin/member',
        },
        {
          icon: 'mdi-account',
          title: 'ຈັດການສະມາຊິກ',
          to: '/admin/customer',
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Transaction type',
          to: '/admin/txn_type',
        },
        {
          icon: 'mdi-chart-line',
          title: 'Transaction',
          to: '/admin/txn',
        },
        {
          icon: 'mdi-cash',
          title: 'ລາຍງານສະເຕດເມັ້ນ',
          to: '/admin/report',
        },
        {
          icon: 'mdi-cash',
          title: 'ລາຍງານບັດທີ່ຍົກເລີກ',
          to: '/admin/report_card',
        },
         {
          icon: 'mdi-alarm-light',
          title: 'ຈັດການໂຄສະນາ',
          to: '/admin/advertise',
        },
         {
          icon: 'mdi-bank',
          title: 'ຈັດການທະນາຄານ',
          to: '/admin/bank',
        },
         {
          icon: 'mdi-qqchat',
          title: 'ປະເພດຂໍ້ຄວາມຈາກລູກຄ້າ',
          to: '/admin/customer_request',
        },
         {
          icon: 'mdi-message-plus',
          title: 'ລາຍການແຈ້ງເຕີມ',
          to: '/admin/customer_request/topup',
        },
         {
          icon: 'mdi-message-alert',
          title: 'ລາຍການແຈ້ງຖອນ',
          to: '/admin/customer_request/withdraw',
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
}
</script>
<style scoped>
* {
  font-family: 'Noto Sans Lao';
}
</style>
