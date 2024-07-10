<template>
  <v-app>
    <div
      class="gradient-background"
      style="position: relative; height: 100%; width: 100vw"
    >
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-dialog v-model="topupForm" hide-overlay width="300">
        <user-topup :key="txnKey" :txnType="txnType" @close="topupForm = false">
        </user-topup>
      </v-dialog>
      <v-row class="ma-1" justify="center" no-gutters>
        ຝາກ-ຖອນອໍໂຕ້ JFill 1688
      </v-row>
      <v-row class="ma-1" justify="center" no-gutters>
        <img
          height="200"
          :src="require('~/assets/image/header.png')"
          alt="headerlogo"
          style="text-align: center"
        />
        <!-- <br />
        <h4 style="color: white">ຝາກ-ຖອນອໍໂຕ້ JFill 1688</h4> -->
      </v-row>

      <v-row class="ma-1" justify="left">
        <v-card class="ma-1 custom-card" @click="statement">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="stmtSvg" height="50" style="text-align: center" />
          <br />
          <h6>ປະຫວັດ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <v-card class="ma-1 custom-card" @click="resetpassword">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="passwordSvg" height="50" style="text-align: center" />
          <br />
          <h6>ລະຫັດຜ່ານ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <v-card class="ma-1 custom-card" @click="playGame">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="playSvg" height="50" style="text-align: center" />
          <br />
          <h6>ເຂົ້າຫລິ້ນເກມ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <!-- </v-row>
      <v-row class="ma-1" justify="left"> -->
        <v-card class="ma-1 custom-card" @click="addAccount">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="cardSvg" height="50" style="text-align: center" />
          <br />
          <h6>ບັນຊີ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <v-card class="ma-1 custom-card" @click="menuTap('CR')">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="wallin" height="50" style="text-align: center" />
          <br />
          <h6>ເຕີມເງິນ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <v-card class="ma-1 custom-card" @click="menuTap('DR')">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img
            :src="wallou"
            height="50"
            style="text-align: center"
            @click="menuTap('DR')"
          />
          <br />
          <h6>ຖອນເງິນ</h6>
          <!-- </v-card-text> -->
        </v-card>
        <v-card class="ma-1 custom-card" @click="logoff">
          <!-- <v-card-text style="color: white; text-align: center"> -->
          <img :src="logoffSvg" height="50" style="text-align: center" />
          <br />
          <h6>ອອກຈາກລະບົບ</h6>
          <!-- </v-card-text> -->
        </v-card>
      </v-row>

      <!-- <v-row class="ma-1" justify="left">

      </v-row> -->
    </div>
    <!-- Bottom navigation bar -->
    
    <!-- Bottom navigation bar -->
  </v-app>
</template>
  
  <script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import UserTopup from '~/components/userComponent/UserTopup.vue'
export default {
  components: { UserTopup },
  layout: 'user',
  middleware: 'auths',
  name: 'home',
  data() {
    return {
      playSvg: require('~/assets/icons/usergradient/play.svg'),
      stmtSvg: require('~/assets/icons/usergradient/statement.svg'),
      wallin: require('~/assets/icons/usergradient/walletin.svg'),
      wallou: require('~/assets/icons/usergradient/walletout.svg'),
      cardSvg: require('~/assets/icons/usergradient/card.svg'),
      passwordSvg: require('~/assets/icons/usergradient/password.svg'),
      logoffSvg: require('~/assets/icons/usergradient/logoff.svg'),
      activeTab: null,
      isLoading: false,
      topupForm: false,
      txnKey: 1,
      txnType: 'CR',
    }
  },
  async created() {},
  async mounted() {},
  computed: {},
  methods: {
    postTransaction() {},
    async logoff() {
      await this.$auth.logout()
      this.$router.push('/member')
    },
    async statement() {
      this.$router.push('/member/statement')
    },
    async resetpassword() {
      this.$router.push('/member/password')
    },
    async addAccount() {
      this.$router.push('/member/account')
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName })
    },
    menuTap(menu) {
      // if (menu == 'CR') {
      this.txnType = menu
      this.txnKey += 1
      this.topupForm = true
      // }
      console.log(`TEST TAP`)
    },
    playGame() {
      window.location.href = 'https://www.royal558.com/'
    },
  },
}
</script>

<style scoped>
.myfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  /* Adjust this to the height of the footer */
  background-color: #f0f0f0;
  padding: 20px;
}
.custom-card-null {
}
.custom-card {
  align-content: center;
  width: 120px;
  height: 80px;
  text-align: center;
  color: white;
  box-shadow: none !important;
  border: none !important;
  /* border: 0.1px solid transparent; */
  /* Set initial border to transparent */
  /* border-image: linear-gradient(to right, #b48811, #ebd197); */
  /* Gradient border */
  /* border-image-slice: 1;  */
  /* Ensure the entire border is covered by the gradient */
  background-color: transparent; /* Set background color to transparent if needed */
  /* color: white; */
  /* margin-right: 2000px; */
}
.gradient-background {
  height: 50px;
  background: -moz-linear-gradient(top, #1b222c 0%, #141414 100%);
}
</style>
  