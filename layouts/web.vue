<template>
    <v-app dark>
      <v-app-bar app color="primary-gradient" dark height="80">
        <v-toolbar-title class="ml-12">APP NAME & LOGO</v-toolbar-title>
        <v-spacer />
        <v-text-field
          dark
          v-model="search"
          clearable
          clear-icon="mdi-close"
          class="mt-6"
          prepend-inner-icon="mdi-magnify"
          dense
          outlined
          label="ຄົ້ນຫາ"
          placeholder="ຄົ້ນຫາ"
          solo-inverted
        />
        <v-spacer />
        <v-btn
          large
          class="flexcol mr-12"
          icon
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon> {{ item.icon }} </v-icon>
          <span class="mt-2">{{ item.title }}</span>
        </v-btn>
      </v-app-bar>
  
      <v-main style="background-color: rgb(235, 235, 235)">
        <Nuxt class="py-2 px-3" />
      </v-main>
      <Footer />
    </v-app>
  </template>
  
  <script>
  import MyFooter from '@/components/footer'
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        search: '',
        title: 'App name & Logo',
        menuItems: [
          {
            title: 'ເຂົ້າສູ່ລະບົບ',
            path: '',
            icon: 'mdi-account-outline',
          },
  
          {
            title: 'ກະຕ່າຂອງທ່ານ',
            path: '',
            icon: 'mdi-cart-outline',
          },
        ],
      }
    },
    components: {
      MyFooter,
    },
  }
  </script>
  
  <style>
  .flexcol .v-btn__content {
    display: flex;
    flex-direction: column;
  }
  span {
    text-transform: capitalize;
  }
  </style>
  