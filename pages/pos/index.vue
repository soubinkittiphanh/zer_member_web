<template>
    <div class="pa-6">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-row v-if="filterProduct.length > 0">
                <v-col :cols="12">
                    <div class="row">
                        <div v-for="(item, index) in filterProduct" :key="index"
                            class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                            <product-card-pos :product="item" :productName="item.pro_name" :imagePath="item.img_name"
                                :stock="item.card_count"></product-card-pos>
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
            barcode: '',
            timer: null,
            tab: null,
            searh: '',
            productSelectedList: [],
            isloading: false,
            productList: [],
            categoryList: [],
            pageLine: 30,
            search: '',
            paymentList: [],
            productSelectedFromBarcode:null
        }
    },
    async mounted() {
        await this.loadProduct()
        await this.loadCategory()
        await this.loadPayment()

        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    computed: {
        ...mapGetters({
            searchKeyword: 'searchKeyword',
            currenctSelectedCategoryId: 'currenctSelectedCategoryId',
            currentSelectedLocation: 'currentSelectedLocation'
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
                return this.productList.filter(item => item.pro_name.toLowerCase().includes(this.searchKeyword));
            }
            return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.toLowerCase().includes(this.searchKeyword));

        },
        // setSearchKeyWorkdZ() {
        //     return this.setSearchKeyWorkd
        // }
    },
    methods: {
        ...mapActions(['addProduct']),
        findProductFromBarcode(barcode){
            this.productSelectedFromBarcode = this.productList.find(el => el.barCode==barcode)
            if(this.productSelectedFromBarcode){
                this.addProduct(this.productSelectedFromBarcode)
                this.productSelectedFromBarcode = null;
            }
        },
        handleKeyDown(event) {
            if (this.timer) {
                clearInterval(this.timer)
            }
            if (event.key == 'Enter') {
                if (this.barcode) {
                    // ************ Find product from this barcode and add to cart ************ //
                    console.log("Do something we got barcode");
                    this.findProductFromBarcode(this.barcode)
                }
                this.barcode = '';
                return
            }
            if (event.key != 'Shift') {
                this.barcode += event.key;
            }
            this.timer = setInterval(() => this.barcode = '', 20);

            console.log(`Key is pressing ${event.key}`);
        },
        async loadProduct() {
            this.isloading = true
            this.productList = []
            await this.$axios
                .get(`product_f/${this.currentSelectedLocation['id']}`)
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
        },
        async loadCategory() {
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