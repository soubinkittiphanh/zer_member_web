<template>
  <div class="text-center">
    <!-- Token{{ this.$store.getters.loggedInUser.token }} -->
    <!-- TODO: MAE A PROPER FORM -->
    <!-- <v-dialog v-model="dialogMessage" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        ຊຳລະບິນ {{ this.orderId +'-'+ this.lockingSessionId || 'null' }} ຍອດ:
        {{ formatNum(this.amount) }} </v-card-title>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="userName" :counter="10" :rules="rule.idRules" label="ໄອດີ ຜູ້ລົງ" required
            disabled></v-text-field>
          <v-select v-model="form_data.txn_type" :items="loaddata" :item-value="(item) => item.txn_id"
            :item-text="(item) => item.txn_id + ' - ' + item.txn_name" @change="selectChange" append-outer-icon="mdi-cash-check"
            menu-props="auto" hide-details label="ປະເພດການຊຳລະ" single-line :rules="rule.txnRule"></v-select>
          <v-text-field v-model="paymentAmount" :counter="10" :rules="rule.amountRules"
            :label="`ຈຳນວນເງິນ: ` + formatNum(paymentAmount)" required></v-text-field>
          <v-text-field v-model.number="codFee" :counter="10" :rules="numberRule"
            :label="`ຄ່າທຳນຽມ COD: ` + formatNum(codFee)" required></v-text-field>
        </v-form>
        <!-- {{ userId }} -->
        <slot> </slot>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn> -->
        <v-btn color="blue darken-1" text @click="$emit('close-dialog')">
          ປິດ
        </v-btn>
        <v-btn color="blue darken-1" text @click="submitDatas"> ບັນທຶກ </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {swalSuccess,swalError2} from '~/util/myUtil'
export default {
//   There are several types available for Vue.js props:

// 1. `String`: Expects a string value.
// 2. `Number`: Expects a numeric value.
// 3. `Boolean`: Expects a boolean value.
// 4. `Array`: Expects an array value.
// 5. `Object`: Expects an object value.
// 6. `Function`: Expects a function value.
// 7. `Symbol`: Expects a symbol value.
// 8. `Date`: Expects a date value.
// 9. `RegExp`: Expects a regular expression value.

// You can also create custom types by passing a validator function to the `validator` property of the prop object.
  props: {
    amount: {
      type: Number,
      require: true,
      default: 0,
    },
    orderId: {
      type: Number,
      require: true,
    },
    lockingSessionId:{
      type:String,
      require:true,
    }
  },
  computed:{
    userId(){
      return this.$auth.user.id;
    },
    userName(){
      return this.$auth.user.name;
    },
    numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
  },

  data() {
    return {
      loaddata: [],
      isloading: false,
      valid: true,
      message: null,
      dialogMessage: false,
      paymentAmount: this.amount,
      codFee: 0,
      form_data: {
        txn_his_id: 1000,
        txn_id: 1000,
        txn_type: "TRANSFER",
        txn_his_amount: 10000,
        user_id: this.userId,
        user_balance: this.cusBalance,
        txn_his_inputter: this.$store.getters.loggedInUser.id,
        txn_his_date: '2021-09-25 00:00:00',
      },
      rule: {
        idRules: [(v) => !!v || 'ໄອດີ is required'],
        amountRules: [(v) => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        amountCODRules: [(v) => !!v || 'ກລນ ໃສ່ຈຳນວນ is required'],
        txnRule: [(v) => !!v || 'ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required'],
      },

    }
  },
  async created() {
    await this.fetchData()
    this.codFee = +0;
    console.log("Assign amount: ",this.paymentAmount);
  },

  watch: {
    userId(v) {
      this.form_data.user_id = v
    },
    amount(newAmount){
      console.log("New amount: ",newAmount);
      this.paymentAmount= newAmount;
    }
  },
  methods: {
    selectChange(v) {
      console.log('SELECT: ' + v)
      this.form_data.txn_id = v
    },
    async submitDatas() {
      this.isloading = true
      console.log("AMOUNT: ", this.amount);
      if (!this.$refs.form.validate()) {
        console.log("From validate is verified");
        this.isloading = false
        return
      }
      //  if (1===1) return ;
      const paymentPayload = {
        lockingSessionId: this.lockingSessionId,
        paymentCode: this.form_data.txn_type,
        codFee: this.codFee,
        orderId: this.orderId,
        userId: this.userId,
        amount: this.paymentAmount,
      }

      const urlpath = '/order_cod_settle'

      await this.$axios
        .post(urlpath, { ...paymentPayload })
        .then((res) => {
          this.message = res.data
          console.log("this.message", this.message);
          if (this.message.includes("completed")) {
            // ******* reload data if transaction completed ********
            console.log("RELOAD DATA TRIGGER");
            this.refreshData(true);
            return swalSuccess(this.$swal,'Succeed','Your transaction completed');
      //  
      
          }
          return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
        })
        .catch((er) => {
          this.message = 'Error: ' + er
        })
      this.isloading = false

      // this.fetchData()
    },
    async fetchData() {
      await this.$axios
        .get('payment')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            console.log(el.txn_id)
            return {
              txn_id: el.payment_code,
              txn_type: el.payment_code,
              txn_name: el.payment_name,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    formatNum(v) {
      return new Intl.NumberFormat().format(v)
    },
    refreshData(v) {
      this.$emit('reload', v)
    }
  },
}
</script>