<!-- <template>
  <div>
    <h1>HOME PAGE1</h1>
    <product-card></product-card >
   </div>
</template>

<script>
export default {
//   middleware: 'auths',
  data: () => {
    return {
      notCodData: [],
      codData:[],
      peeAirOutlet : "PEEAIR4",
      greewoodOutlet : "Green",
      deletedCardData: [],
    }
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
    
    getData(){

    },
 
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style> -->
