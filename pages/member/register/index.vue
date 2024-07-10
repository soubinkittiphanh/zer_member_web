
<template>
  <div class="gradient-background">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-row align="center">
      <v-col cols="12">
        <!-- <v-card-title> ປ່ຽນລະຫັດຜ່ານໃໝ່ </v-card-title> -->
        <v-card-text>
          <v-form ref="form" v-model="formValid">
            <h2 style="color: #b48811">ຊື່</h2>
            <v-text-field
              v-model="member.name"
              required
              outlined
            ></v-text-field>
            <h2 style="color: #b48811">ເບີໂທ*</h2>
            <v-text-field
              v-model="member.tel"
              required
              outlined
              :rules="masterRules.phoneRule"
            ></v-text-field>
            <h2 style="color: #b48811">ທະນາຄານ*</h2>
            <v-autocomplete
              item-text="name"
              item-value="id"
              :items="bankList"
              v-model="account.bankId"
            >
              <!-- Slot for customizing the selected value -->
              <template v-slot:selection="data">
                <v-chip
                  :input-value="data.selected"
                  :close="data.select"
                  @click="data.select"
                  class="my-chip"
                  color="#b48811"
                >
                  <span :style="{ color: getColor(data.item) }">
                    {{ data.item.name }}
                  </span>
                </v-chip>
              </template>

              <!-- Slot for customizing items in the dropdown -->
              <template v-slot:item="data">
                <template v-if="data.item && data.item.name">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ data.item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
            <h2 style="color: #b48811">
              ເລກບັນຊີ*
            </h2>

            <v-text-field
              v-model="account.accountNumber"
              required
              outlined
            ></v-text-field>
            <h2 style="color: #b48811">ຊື່ບັນຊີ*</h2>
            <v-text-field
              v-model="account.accountName"
              required
              outlined
            ></v-text-field>
            <h2 style="color: #b48811">ລະຫັດຜ່ານ*</h2>
            <v-text-field
              v-model="member.password"
              required
              outlined
            ></v-text-field>
            <h3 style="color: red;">(ຫມາຍເຫດບັນຊີທີ່ສະຫມັກຕ້ອງຕົງກັບບັນຊີທີ່ໂອນເງິນ-ຖອນເງິນ)</h3>
            <v-btn
              block
              variant="outlined"
              @click="submitForm"
              class="custom-button"
              rounded
            >
              ລົງທະບຽນ
            </v-btn>
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>
  
  <script>
import {
  swalSuccess,
  swalError2,
  confirmSwal,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
} from '~/common'
export default {
  layout: 'regist',
  data() {
    return {
      formValid: false,
      update: false,
      passwordSvg: require('~/assets/icons/usergradient/password.svg'),
      isLoading: false,
      bankList: [],
      member: {
        id: null,
        name: '',
        tel: '',
        password: '',
        isActive: true,
      },
      account: {
        accountNumber: '',
        accountName: '',
        id: null,
        bankId: 1,
        memberId: null,
      },
      accountList: null,
      message: null,
    }
  },
  computed: {
    masterRules() {
      const rules = {
        phoneRule: [
          (v) => (v && v.length === 11) || 'ເບິໂທຕ້ອງມີ 12 ໂຕ ຂື້ນຕົ້ນດ້ວຍ 020',
          (v) =>
            (v && v.startsWith('020')) ||
            'ເບີໂທ ຕ້ອງຂື້ນຕົ້ນດ້ວຍ 020 ເທົ່ານັ້ນ',
        ],
      }
      return rules
    },
  },
  async created() {
    await this.loadBank()
  },
  methods: {
    getColor(item) {
      return item.color || 'white' // Default color if not specified
    },
    async loadBank() {
      // Simulate API call
      if (this.isLoading) return
      const api = `api/noauth/bank`
      this.isLoading = true
      try {
        const response = await this.$axios.get(api)
        this.bankList = response.data
        this.account.bankId = this.bankList[0]['id']
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ໃນການດຶງຂໍ້ມູນບັນຊີ')
      }
      this.isLoading = false
    },
    touchAccount(account) {
      this.update = true
      this.accountInfo.id = account.id
      this.accountInfo.accountName = account.accountName
      this.accountInfo.accountNumber = account.accountNumber
    },
    formatBankAccountNumber(account) {
      // Ensure the input is a string
      const accountStr = account.toString()
      // Use a regular expression to match groups of four digits
      return accountStr.replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    validateEntry() {
      if (this.member.tel.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນເບີໂທ')
        return false
      }
      if (this.member.password.length < 4) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນລະຫັດຜ່ານ ຂັ້ນຕ່ຳ 4 ໂຕ')
        return false
      }

      return true
    },

    async submitForm() {
      // Simulate API call to send reset link
      // Trigger form validation
      if (!this.$refs.form.validate()) {
        // Form is valid, proceed with submission
        swalError2(this.$swal, 'Error', 'ກະລຸນາກວດຂໍ້ມູນ ໃຫ້ຖືກຕ້ອງ')
        // Add your form submission logic here
      } else {
        await this.createEntry()
      }
    },
    async createEntry() {
      // Simulate API call
      if (!this.validateEntry()) return
      if (this.isLoading) return

      const api = `api/register/member`
      this.isLoading = true
      try {
        const response = await this.$axios.post(api, {
          member: this.member,
          account: this.account,
        })
        this.$router.push('/member')
        swalSuccess(
          this.$swal,
          'Succeed',
          'ການລົງທະບຽນສຳເລັດ ກະລຸນາລັອກອິນ ດ້ວຍເບີໂທ ແລະ ລະຫັດ ທີ່ໄດ້ລົງທະບຽນ'
        )
      } catch (error) {
        console.log('Error: ', error)
        swalError2(
          this.$swal,
          'Error',
          `ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ \n ຢູ່ເຊີລົງທະບຽນແລ້ວ`
        )
      }
      this.isLoading = false
    },
  },
}
</script>
  
  <style scoped>
.message {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e9e9e9;
  text-align: center;
}
.gradient-background {
  /* height: 50px; */
  background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
  /* position: relative; */
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
}
.v-text-field--outlined >>> fieldset {
  /* border-color: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%); */
  /* border-color: rgba(192, 0, 250, 0.986); */
  border: 1px solid transparent; /* Set initial border to transparent */
  border-image: linear-gradient(
    to right,
    #b48811,
    #ebd197
  ); /* Gradient border */
  border-radius: 20px;
  border-image-slice: 1; /* Ensure the entire border is covered by the gradient */
}
.custom-button {
  margin-bottom: 20px; /* Add spacing above the button */
  background: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%);
}
.my-chip {
  background-color: transparent;
  border: none;
}
</style>
  