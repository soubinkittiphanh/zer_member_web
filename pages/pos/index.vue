<template>
    <div class="pa-6">
        <v-card class="pa-4">
            <v-row v-if="filterProduct.length > 0">
                <v-col :cols="12">
                    <div class="row">
                        <div v-for="(item, index) in filterProduct" :key="index"
                            class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                            <product-card-pos :product="item" :productName="item.pro_name"
                                :imagePath="item.img_name"></product-card-pos>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row v-else>
                <div class="error">
                    ບໍ່ພົບຂໍ້ມູນ
                </div>
            </v-row>
        </v-card>
    </div>
</template>
  
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    layout: "pos",
    middleware: 'auths',
    data() {
        return {
            tab: null,
            searh: '',
            productSelectedList: [],
            isloading: false,
            productList: [],
            categoryList: [],
            pageLine: 30,
            search: '',
            paymentList: []
        }
    },
    async mounted() {
        await this.fetchData()
        await this.loadCategory()
        await this.loadPayment()

    },
    computed: {

        ...mapGetters({
            searchKeyword: 'searchKeyword',
            currenctSelectedCategoryId: 'currenctSelectedCategoryId',
        }),
        // ...mapGetters(['cartOfProduct','currenctSelectedCategoryId']),
        filterProduct() {
            console.log('+++caegory ', this.currenctSelectedCategoryId);
            if (!this.searchKeyword) {
                console.log("Return all");
                if (this.currenctSelectedCategoryId != 9999) {
                    console.log("Filter by category only");
                    return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId);
                }
                console.log("All no filter case");
                return this.productList;
            }
            // element.age > 25 || element.name.includes("a")
            if (this.currenctSelectedCategoryId == 9999) {
                return this.productList.filter(item => item.pro_name.includes(this.searchKeyword));
            }
            return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.includes(this.searchKeyword));

        },
        setSearchKeyWorkdZ() {
            return this.setSearchKeyWorkd
        }
    },
    methods: {


        async fetchData() {
            this.isloading = true
            this.productList = []
            await this.$axios
                .get('product_f')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.productList.push(iterator)
                    }
                })
                .catch((er) => {
                    this.message = er
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false
        }, async loadCategory() {
            this.isloading = true;
            this.categoryList = []
            await this.$axios
                .get('/category_f')
                .then((res) => {
                    console.log('Data: ' + res.data)
                    for (const iterator of res.data) {
                        console.log("CATEGOR", iterator);
                        this.categoryList.push(iterator);
                    }
                })
                .catch((er) => {
                    // console.log('Data: ' + er)
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadPayment() {
            this.isloading = true;
            this.paymentList = []
            await this.$axios
                .get('/api/paymentMethod/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        console.log("Payment", iterator);
                        this.paymentList.push(iterator);
                    }
                })
                .catch((er) => {
                    // console.log('Data: ' + er)
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
    }
}
</script>
  
<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}

/* .product-border {
    border: 1px solid #01532b !important;
} */
</style>