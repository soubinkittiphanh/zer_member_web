<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
          <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card class="elevation-1">
              <notification v-if="errorMessage" :message="errorMessage" />
              <p>{{ this.$store.getters.loggedInUser.name }}</p>
              <v-card-text>
                <v-form >
                  <v-text-field
                    v-model="email"
                    label="ກະລຸນາ ໃສ່ໄອດີ"
                    name="email"
                    prepend-inner-icon="mdi-account-tie-hat"
                    class="rounded-10"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="password"
                    label="ລະຫັດຜ່ານ"
                    type="password"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    class="rounded-10"
                    outlined
                  ></v-text-field>
                  <v-btn
                    class="rounded-0"
                    color="primary"
                    x-large
                    block
                    dark
                    @click.prevent="login"
                    type="submit"
                  >
                    login
                    <v-icon> mdi mdi-login</v-icon>
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Notification from '../../components/Notification.vue'
export default {
  layout: 'empty',

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isLoading: false,
    }
  },
  components: {
    Notification,
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
   async login() {
      this.isLoading = true
      this.errorMessage = ''
      console.log('Hello login')
      const payload = {
        mem_id: this.email,
        mem_pwd: this.password,
      }
      console.log("This .isloaing: "+this.isLoading);
      await this.$axios
        .post('mem_auth', payload)
        .then((res) => {
          console.log('RES: ' + res.data)
          const resData = res.data
          console.log('Status: ' + res.status)
          if (res.status !== 200) {
            this.isLoading = false
            this.errorMessage = 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
            return
          }

          console.log('Token: ' + resData.accessToken)
          if (resData.accessToken) {
            console.log('Get token')
            const payload = {
              name: resData.userName,
              id: resData.userId,
              phone: resData.userPhone,
              token: resData.accessToken,
            }
            this.$store.dispatch('login', payload)
            console.log(this.$store.getters.oggedInUser)
            this.$router.push('/')
          } else {
            console.log('No token')
            this.errorMessage = 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
          }
        })
        .catch((er) => {
          console.log('ERROR: ' + er)
          this.errorMessage = er.data
        })
      this.isLoading = false
      console.log('payload: ' + payload)
    },
  },
}
</script>