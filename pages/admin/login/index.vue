<template>
  <v-app>
    <div class="container">
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-card>
        <div class="pa-16">
          <v-row>
            <v-col cols="12">
              <p class="text-center"
                style="color: #01532B; font-weight:900;font-family: Arial, Helvetica, sans-serif; font-size: xx-large;">
                DCOMMERCE </p>
              <h2 class="text-center" style="color: #01532B;">ຍິນດີຕ້ອນຮັບ ເຂົ້າສູ່ລະບົບການຂາຍ </h2>
            </v-col>
          </v-row>
          <v-card-text>
            <notification v-if="errorMessage" :message="errorMessage" />
            <v-card-title class="my-text-center">
              ເຂົ້າສູ່ລະບົບ
            </v-card-title>
            <v-form>
              <v-text-field v-model="login.mem_id" label="ກະລຸນາ ໃສ່ໄອດີ" name="email"
                prepend-inner-icon="mdi-account-tie-hat" class="rounded-10 my-text-center" outlined>
              </v-text-field>
              <v-text-field v-model="login.mem_pwd" label="ລະຫັດຜ່ານ" type="password" name="password"
                prepend-inner-icon="mdi-lock" class="rounded-10 my-text-center" outlined></v-text-field>
              <v-btn class="rounded-0 my-text-center" color="#01532B" x-large block dark @click.prevent="userLogin"
                type="submit">
                ເຂົ້າສູ່ລະບົບ
                <v-icon> mdi mdi-login</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import Notification from '../../../components/Notification.vue'
import { mapActions } from 'vuex'
export default {
  layout: "login",
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isLoading: false,
      barcode: '',
      timer: null,
      login: {
        mem_id: '',
        mem_pwd: ''
      }
    }
  },

  components: {
    Notification,
  },
  methods: {
    ...mapActions(['initProduct', 'initPayment', 'initCurrency', 'initClient', 'initUnit','initTerminal','initLocation']),
   
    async userLogin() {
      try {
        this.isLoading = true
        this.errorMessage = ''
        const response = await this.$auth.loginWith('local', { data: this.login })

        if (response.status !== 200) {
          this.isLoading = false
          this.errorMessage = 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          return
        }
        if (response.data.accessToken) {
          await this.loadProduct()
          await this.loadPayment()
          await this.loadCustomer()
          await this.loadUnit()
          await this.loadCurrency()
          await this.loadTerminal()
          await this.loadLocation()
          this.$router.push('/admin')
        } else {
          console.log('No token')
          this.errorMessage = 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
        }


        console.log(response)
      } catch (err) {
        console.log(err)
      }
      this.isLoading = false
    },

    async loadProduct() {
      this.isLoading = true
      this.productList = [];
      await this.$axios
        .get('product_f')
        .then((res) => {
          this.initProduct(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
    async loadLocation() {
      this.isloading = true
      await this.$axios
        .get(`api/location/find`)
        .then((res) => {
          this.initLocation(res.data)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    async loadUnit() {
      this.isLoading = true
      this.unitList = [];
      await this.$axios
        .get('api/unit/find')
        .then((res) => {
          this.initUnit(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
    async loadCustomer() {
      this.isLoading = true
      this.customerList = [];
      await this.$axios
        .get('api/client/find')
        .then((res) => {
          this.initClient(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
    async loadTerminal() {
      this.isLoading = true
      await this.$axios
        .get('api/terminal/find')
        .then((res) => {
          this.initTerminal(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
    async loadPayment() {
      this.isLoading = true
      this.paymentList = [];
      await this.$axios
        .get('api/paymentMethod/find')
        .then((res) => {
          this.initPayment(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
    async loadCurrency() {
      this.isLoading = true
      this.currencyList = [];
      await this.$axios
        .get('api/currency/find')
        .then((res) => {
          this.initCurrency(res.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isLoading = false
    },
  },
}
</script>
<style scoped>
h2 {
  font-family: 'noto sans lao';
  text-align: center;
}

.my-text-center {
  font-family: 'noto sans lao';
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  /* background: #EFF2F9; */
  background: #CCDDD5;
  /* color: red; */

}

/* *:not(h1) { */
/* CSS styles here */
/* font-family: 'noto sans lao'; */
/* } */
</style>