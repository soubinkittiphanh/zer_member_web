<template>
  <v-app dark>
    <Nuxt />
    <v-dialog v-model="topupForm" hide-overlay width="300">
      <user-topup :key="txnKey" :txnType="txnType" @close="topupForm = false">
      </user-topup>
    </v-dialog>
    <v-bottom-nav
      v-model="activeTab"
      color="primary"
      app
      style="position: fixed; bottom: 40px; width: 100%; z-index: 1000"
    >
      <!-- <v-row justify="center" class="gradient-background pa-2">
        <v-btn icon @click="home">
          <v-icon large color="primary">mdi-home</v-icon>
        </v-btn>
      </v-row> -->

      <v-bottom-navigation v-model="modelValue" color="primary" active>
        <v-btn @click="menuTap('CR')">
          <img :src="topup" height="50" style="text-align: center" />
        </v-btn>
        <v-btn @click="playMenu">
          <img :src="play" height="70" style="text-align: center" />
        </v-btn>
        <v-btn @click="menuTap('DR')">
          <img :src="withdraw" height="50" style="text-align: center" />
        </v-btn>
      </v-bottom-navigation>
    </v-bottom-nav>
  </v-app>
</template>
  
<script>
import UserTopup from '~/components/userComponent/UserTopup.vue'
export default {
  components: { UserTopup },
  data() {
    return {
      modelValue: '',
      topupForm: false,
      txnKey: 1,
      txnType: 'CR',
      topup: require('~/assets/icons/17.svg'),
      withdraw: require('~/assets/icons/18.svg'),
      play: require('~/assets/icons/play_circle.svg'),
      activeTab: null,
    }
  },
  methods: {
    menuTap(menu) {
      // if (menu == 'CR') {
      this.txnType = menu
      this.txnKey += 1
      this.topupForm = true
      // }
      console.log(`TEST TAP`)
    },
    async home() {
      this.$router.push('/member/home')
    },
    async topupMenu() {
      this.$router.push('/member/home')
    },
    async playMenu() {
      window.location.href = 'https://www.royal558.com/'
    },
    async withdrawMenu() {
      this.$router.push('/member/home')
    },
  },
}
</script>

<style scoped>
</style>