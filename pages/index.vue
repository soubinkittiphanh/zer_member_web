<template>
  <div>
    <!-- <h1>HOME PAGE1</h1> -->
    <v-row>
      <v-col>
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-chat </v-icon>
            <span class="text-h6 font-weight-light">ຮ້ານ PEEAIR4</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            COD ຈຳນວນ {{ this.getFormatNum(countCODByOutlet1.totalAmount) }} 
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{countCODByOutlet1.total}}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" color="#ff66ff" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-chat </v-icon>
            <span class="text-h6 font-weight-light">ຮ້ານ GREENDWOOD</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            COD ຈຳນວນ {{ this.getFormatNum(countCODByOutlet2.totalAmount) }} 
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ countCODByOutlet2.total }} </v-list-item-title>
              </v-list-item-content>

       
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" color="#aa80ff" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-note-plus </v-icon>
            <span class="text-h6 font-weight-light">ລາຍການສັ່ງຊື້ 1</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            ຈຳນວນ {{ this.getFormatNum(countByOutlet1.totalAmount) }} 
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ countByOutlet1.total }}</v-list-item-title>
              </v-list-item-content>


            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" color="#FF9303" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-note-plus </v-icon>
            <span class="text-h6 font-weight-light">ລາຍການສັ່ງຊື້ 2</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            ຈຳນວນ {{ this.getFormatNum(countByOutlet2.totalAmount) }} 
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="red darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title> {{ countByOutlet2.total }} </v-list-item-title>
              </v-list-item-content>

  
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  data: () => {
    return {
      notCodData: [],
      codData:[],
      peeAirOutlet : 2,
      greewoodOutlet : 1,
      deletedCardData: [],
    }
  },
  mounted() {
    this.codApi()
    this.notCODApi()
  },
  computed: {
    countCODByOutlet1() {
      let total = 0
      let totalAmount = 0
      if (this.codData) {
            console.log('Len countCODByOutlet1: ' + this.codData.length)
        let filterData = this.codData.filter(
          (el) => el.outlet.includes(this.peeAirOutlet)
        )
        filterData = [...filterData]
        total =filterData.length
        filterData.forEach(element => {
          totalAmount+=element.order_price_total;
        });

      }
      const finalData = {
        total,
        totalAmount,
      }
      return finalData
    },
    countCODByOutlet2() {
      let total = 0
      let totalAmount = 0 
      if (this.codData) {
            console.log('Len countCODByOutlet2: ' + this.codData.length)
        let filterData = this.codData.filter(
          (el) => el.outlet.includes(this.greewoodOutlet)
        )
         filterData = [...filterData]
        total =filterData.length
        filterData.forEach(element => {
          totalAmount+=element.order_price_total;
        });

      }
      const finalData = {
        total,
        totalAmount,
      }
      return finalData
    },
    countByOutlet1() {
      let total = 0
      let totalAmount = 0
      if (this.notCodData) {
        console.log('Len countByOutlet1: ' + this.notCodData.length)
        let filterData = this.notCodData.filter(
          (el) => el.outlet.includes(this.peeAirOutlet)
        )
         filterData = [...filterData]
        total =filterData.length
        filterData.forEach(element => {
          totalAmount+=element.order_price_total;
        });

      }
      const finalData = {
        total,
        totalAmount,
      }
      return finalData
      },
    countByOutlet2() {
      let total = 0
      let totalAmount = 0
      if (this.notCodData) {
        console.log('Len countByOutlet2: ' + this.notCodData.length)
        let filterData = this.notCodData.filter(
          (el) => el.outlet.includes(this.greewoodOutlet)
        )
         filterData = [...filterData]
        total =filterData.length
          console.log('Len countByOutlet2 later: ' + total)
        filterData.forEach(element => {
          totalAmount+=element.order_price_total;
        });

      }
      const finalData = {
        total,
        totalAmount,
      }
      return finalData
    },
    dateNow(){
        const sqlDatetimeNow = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
        const fdate=sqlDatetimeNow.substring(0,11);
        // const tdate=sqlDatetimeNow.substring(0,11);
        return fdate;
    }


  },
  methods: {

    async codApi() {
      this.isloading = true
      await this.$axios
         .get('order_by_payment/?fromDate=' + this.dateNow+'&toDate='+this.dateNow+'&paymentCode=COD')
        .then((res) => {
          this.codData = res.data.map((el) => {
            return {
              order_id: el.order_id +' - '+el.locking_session_id,
              user_id: el.user_id,
              product_id: el.product_id + ' - ' + el.pro_name,
              cus_name: el.name,
              cus_tel: el.tel,
              shipping: el.shipping,
              payment: el.payment_code,
              product_amount: el.product_amount,
              outlet: el.shop_name,
              shipping_fee: el.shipping_fee_by,
              product_price: this.getFormatNum(el.product_price),
              order_price_total: (el.product_price * el.product_amount)-el.product_discount,
              product_discount: this.getFormatNum(el.product_discount),
              txn_date: el.txn_date.replaceAll('T', ' '),
              function: el.order_id,
            }
    
          })
          console.log("all data1: ",this.codData.length);
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },
    async notCODApi() {
      this.isloading = true
      await this.$axios
           .get('order_by_payment/?fromDate=' + this.dateNow+'&toDate='+this.dateNow+'&paymentCode=ALL')
        .then((res) => {
          this.notCodData = res.data.map((el) => {
            return {
              order_id: el.order_id +' - '+el.locking_session_id,
              user_id: el.user_id,
              product_id: el.product_id + ' - ' + el.pro_name,
              cus_name: el.name,
              cus_tel: el.tel,
              shipping: el.shipping,
              payment: el.payment_code,
              product_amount: el.product_amount,
              outlet: el.shop_name,
              shipping_fee: el.shipping_fee_by,
              product_price: this.getFormatNum(el.product_price),
              order_price_total: (el.product_price * el.product_amount)-el.product_discount,
              product_discount: this.getFormatNum(el.product_discount),
              txn_date: el.txn_date.replaceAll('T', ' '),
              function: el.order_id,
            }
    
          })
            console.log("all data2: ",this.notCodData.length);
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style>
