<template>
  <v-app>
    <!-- <v-main> -->
    <v-container class="fill-height ma-0" fluid>
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center" style="color: #01532B;">DCOMMERCE </h1>
          <h2 class="text-center" style="color: #01532B;">ຍິນດີຕ້ອນຮັບ ເຂົ້າສູ່ລະບົບການຂາຍ </h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card class="elevation-1">
            <notification v-if="errorMessage" :message="errorMessage" />
            <!-- <p>{{ this.$store.getters.loggedInUser.name }}</p> -->
            <v-card-title class="my-text-center">
              ເຂົ້າສູ່ລະບົບ
            </v-card-title>
            <v-card-text>
              <v-form>
                <!-- <font-awesome-icon icon="coffee" /> -->
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-main> -->
  </v-app>
</template>
<script>
import Notification from '../../../components/Notification.vue'
// import { fas } from '@fortawesome/free-solid-svg-icons';
export default {
  layout: "login",

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isLoading: false,
      login: {
        mem_id: '',
        mem_pwd: ''
      }
    }
  },
  components: {
    Notification,
    // FontAwesomeIcon,
  },
  methods: {
    // async loginAuto() {
    //   console.log('auto login')
    //   const payload = {
    //     mem_id: this.email,
    //     mem_pwd: this.password,
    //   }
    //   try {
    //     await this.$auth.loginWith('local', {
    //       data: payload,
    //     })
    //     this.$router.push('/')
    //   } catch (e) {
    //     this.$router.push('/login')
    //   }
    // },
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
          this.$router.push('/pos')
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
    //  async login() {
    //     this.isLoading = true
    //     this.errorMessage = ''
    //     const payload = {
    //       mem_id: this.email,
    //       mem_pwd: this.password,
    //     }
    //     console.log("Loading from server: "+this.isLoading);
    //     await this.$axios
    //       .post('mem_auth', payload)
    //       .then((res) => {
    //         console.log('RES: ' + res.data)
    //         const resData = res.data
    //         console.log('Status: ' + res.status)
    //         if (res.status !== 200) {
    //           this.isLoading = false
    //           this.errorMessage = 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
    //           return
    //         }

    //         console.log('Token: ' + resData.accessToken)
    //         if (resData.accessToken) {
    //           console.log('Get token')
    //           const payload = {
    //             name: resData.userName,
    //             id: resData.userId,
    //             phone: resData.userPhone,
    //             token: resData.accessToken,
    //           }
    //           this.$store.dispatch('login', payload)
    //           console.log(this.$store.getters.oggedInUser)
    //           this.$router.push('/admin')
    //         } else {
    //           console.log('No token')
    //           this.errorMessage = 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
    //         }
    //       })
    //       .catch((er) => {
    //         console.log('Server error: ' + er)
    //         this.errorMessage = er.data
    //       })
    //     this.isLoading = false
    //   },
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

/* *:not(h1) { */
/* CSS styles here */
/* font-family: 'noto sans lao'; */
/* } */
</style>