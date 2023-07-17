<template>
    <v-app dark>
        <v-dialog v-model="customerDialog" max-width="1024">
            <customer-list @close-dialog="customerDialog = false"></customer-list>
        </v-dialog>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="quotation" hide-overlay width="1024">
            <Quotation> </Quotation>
        </v-dialog>
        <v-app-bar app color="primary" dark clipped-left clipped-right>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer />
            <v-text-field dark v-model="serachModel" clearable clear-icon="mdi-close" class="mt-6"
                prepend-inner-icon="mdi-magnify" dense outlined label="ຄົ້ນຫາ" solo-inverted />
            <v-spacer />
            <v-btn class="flexcol ml-2 mr-2" icon v-for="item in menuItems" :key="item.title" :to="item.path" @click="item.method">
                <v-icon> {{ item.icon }} </v-icon>
                <span class="mt-2">{{ item.title }}</span>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" clipped width="180">
            <v-list dense>
                <v-subheader>Catagories {{ selectedCategoryId }}</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in categoryList" :key="i">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.categ_name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>


        <v-main style="background-color: rgb(235, 235, 235)">
            <Nuxt class="py-2 px-3" />
        </v-main>

        <v-navigation-drawer app right clipped width="450" fixed>
            <div style=" height: 100%; position: relative;">
                <!-- <v-card> -->
                <div>
                    <v-row align="center">
                        <v-col cols="4">
                            <v-btn block size="x-large" variant="outlined" @click="openCustomerDialog" class="primary">
                                ເລືອກລູກຄ້າ<span class="mdi mdi-account-box"></span>
                            </v-btn>
                        </v-col>
                        <v-col cols="4">
                            <v-chip class="ma-2" color="success" variant="outlined">
                                {{ currenctCustomer == null ? '' : currenctCustomer.name }}
                            </v-chip>

                        </v-col>
                        <v-col cols="4">
                            <v-btn block size="x-large" variant="outlined" @click="newOrder" class="primary">
                                ອອກບິນໃໝ່<span class="mdi mdi-receipt-text-check"></span>
                            </v-btn>
                        </v-col>

                    </v-row>
                </div>
                <!-- amount list -->
                <v-simple-table class="pa-0 ma-0">
                    <template v-slot:default>

                        <thead>
                            <tr>
                                <th class="text-left primary--text secondary"></th>
                                <th class="text-left primary--text secondary">ສິນຄ້າ</th>
                                <th class="text-left primary--text secondary">-</th>
                                <th class="text-left primary--text secondary">ຈຳນວນ</th>
                                <th class="text-left primary--text secondary">+</th>
                                <th class="text-left primary--text secondary">ລາຄາ</th>
                            </tr>
                        </thead>
                    </template>
                </v-simple-table>

                <v-card flat height="350" class="overflow-auto">
                    <v-simple-table>
                        <template v-slot:default>

                            <tbody>

                                <tr v-for="item in productCart" :key="item.id">
                                    <td>
                                        <v-btn color="red" icon @click="deleteProductFromCart(item)">
                                            <v-icon>fa-light fa-trash</v-icon>
                                            <!-- <i class="fa-sharp fa-light fa-trash"></i> -->
                                        </v-btn>
                                    </td>
                                    <td class="font-weight-medium">{{ item.pro_name }}</td>
                                    <td>
                                        <v-btn icon @click="deleteProduct(item)">
                                            <v-icon>fa-solid fa-minus</v-icon>
                                        </v-btn>
                                    </td>
                                    <td class="font-weight-medium">{{ item.qty }}</td>
                                    <td>
                                        <v-btn icon @click="addProduct(item)">
                                            <v-icon>fa-solid fa-plus</v-icon>
                                        </v-btn>
                                    </td>
                                    <td class="font-weight-medium">{{ formatNumber(item.pro_price * item.qty) }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
                <div style="position: absolute; bottom: 0px;">
                    <v-divider></v-divider>
                    <div>
                        <v-list-item>
                            <h5>ລວມລາຄາ:</h5>
                            <v-spacer></v-spacer>
                            <v-chip v-for="item in currencyList" :key="item.id" class="ma-2" color="green"
                                text-color="white">
                                {{ item.code }}{{ formatNumber((grandTotal - discount) / item.rate) }}
                            </v-chip>
                            <!-- <h6 v-for="item in currencyList" :key="item.id">{{item.code}} - {{ formatNumber((grandTotal-discount)/item.rate )}} | </h6> -->
                        </v-list-item>
                    </div>
                    <v-divider></v-divider>
                    <!-- <div>
                        <v-row align="center" no-gutters>
                            <v-col cols="12" class="de-flext">
                                <span v-for="item in currencyList" :key="item.id">{{item.code}} - {{ formatNumber((grandTotal-discount)/item.rate )}} | </span>
                            </v-col>
                        </v-row>
                    </div> -->
                    <div class="d-flex  align-center pa-4">
                        <span class="pr-4">ສ່ວນຫລຸດ:</span>
                        <v-text-field :rules="priceRule" type="number" v-model="discount" clearable clear-icon="mdi-close"
                            prepend-inner-icon="mdi-sale-outline" dense outlined label="ສ່ວນຫລຸດ"
                            :placeholder="discount.toString()" solo-inverted hide-details />
                    </div>
                    <v-row class="ml-2" no-gutters>
                        <v-col v-for="(item, index) in paymentList" :key="index" cols="auto" class="pa-1">
                            <v-btn v-if="item.id == currentPayment" depressed color="primary"
                                @click="selectePaymentMethod(item.id)">
                                {{ item.payment_code }}
                            </v-btn>
                            <v-btn v-else outlined depressed @click="selectePaymentMethod(item.id)">
                                {{ item.payment_code }}
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-btn rounded color="primary" block large @click="postTransaction">
                            <v-icon size="25" left> mdi-cash-100 </v-icon> POST
                        </v-btn>
                    </v-card-actions>
                </div>
            </div>

        </v-navigation-drawer>
    </v-app>
</template>
  
<script>
import CustomerList from '~/components/customer/CustomerList.vue'
import Quotation from '~/components/quotation'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { getFormatNum, jsDateToMysqlDate } from '~/common'
// import { jsPDF } from 'jspdf-invoice-template'
import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/common/index'
// import jsPDFInvoiceTemplate, { OutputType, jsPDF } from 'jspdf-invoice-template'
// import { jsPDF } from '~/plugins/jspdf-invoice';
export default {
    components: { CustomerList, Quotation },
    name: 'DefaultLayout',
    data() {
        return {
            search: '',
            lastTransactionSaleHeaderId: 0,
            drawer: true,
            isloading: false,
            drawer_right: true,
            fixed: true,
            title: 'App name & Logo',
            customerDialog: false,
            discount: 0,
            priceRule: [
                // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
                //   (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
                (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
            ],
            categoryList: [
            ],
            quotation: false,
            paymentList: [],
            selectedItem: 0,
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
            menuItems: [
                {
                    title: 'Home',
                    path: '/admin',
                    icon: 'mdi-home-circle-outline',
                    method:()=>{},
                },

                {
                    title: 'Orders',
                    path: '/admin/ordersFromPos',
                    // $router.push('/admin/ordersFromPos')
                    icon: 'mdi-reorder-horizontal',
                    method:()=>{},
                },
                {
                    title: 'Quotation',
                    path: '',
                    icon: 'mdi-receipt-text-clock-outline',
                    method:this.setQuotation
                },
                {
                    title: 'history',
                    path: '',
                    icon: 'mdi-history',
                    method:()=>{},
                },
                {
                    title: 'Help',
                    path: '',
                    icon: 'mdi-help-circle-outline',
                    method:()=>{},
                },

                {
                    title: 'Logout',
                    path: '/admin/logout',
                    icon: 'mdi-logout',
                    method:()=>{},
                },
            ],
            currencyList: [],
            saleHeader: {
                bookingDate: '',
                remark: '',
                total: 0,
                exchangeRate: 1,
                isActive: true,
            }

        }
    },
    computed: {
        ...mapState(['productSearchKeyboard',]),
        ...mapGetters(['cartOfProduct', 'currenctSelectedCategoryId', 'currentSelectedCustomer', 'currentSelectedPayment']),
        serachModel: {
            get() {
                return this.stateValue;
            },
            set(value) {
                this.SetSearchKeyword(value);
            }
        },

        currenctCustomer() {
            return this.currentSelectedCustomer
        },

        productCart() {
            return this.cartOfProduct
        },
        generateSaleLine() {
            let lines = []
            for (const iterator of this.productCart) {
                lines.push(
                    {
                        quantity: iterator.qty,
                        unitRate: 1,
                        price: iterator.pro_price,
                        discount: 0,
                        productId: iterator.id,
                        unitId: 1,
                        total: iterator.qty * iterator.pro_price,
                        isActive: true
                    }
                )
            }
            return lines
        },
        selectedCategoryId() {
            return this.currenctSelectedCategoryId
        },
        currentPayment() {
            return this.currentSelectedPayment
        },

        grandTotal() {
            const totalPrice = this.cartOfProduct.reduce((total, item) => {
                return total + item.qty * item.pro_price;
            }, 0);
            return totalPrice
        },
        user() {
            return this.$auth.user || ''
        }
    },
    mounted() {
        this.fetchCategory()
        this.loadPayment()
        this.loadCustomer()
        this.loadCurrency()
    },
    watch: {
        selectedItem(val) {
            if (val != undefined) {
                this.updateSelectedCategoryId(this.categoryList[val]['categ_id'])
            }
        }
    },
    methods: {
        async setQuotation() {


            if (this.isloading) return;
            const today = new Date();
            this.isloading = true;
            this.saleHeader.discount = this.discount
            this.saleHeader.remark = "Quotation"
            this.saleHeader.total = this.grandTotal
            this.saleHeader.clientId = this.currenctCustomer.id
            this.saleHeader.paymentId = this.currentPayment
            this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
            this.saleHeader.line = this.generateSaleLine
            this.saleHeader.userId = this.user.id
            this.saleHeader.bookingDate = jsDateToMysqlDate(today)
            this.saleHeader.isActive = false
            await this.$axios
                .post('/api/sale/create', this.saleHeader)
                .then((res) => {
                    this.lastTransactionSaleHeaderId = res.data.split('-')[1]
                    localStorage.setItem('customer', JSON.stringify(this.currenctCustomer));
                    localStorage.setItem('product', JSON.stringify(this.productCart));
                    localStorage.setItem('quotationId', this.lastTransactionSaleHeaderId);
                    window.open('/admin/quotation', '_blank');
                    // swalSuccess(this.$swal, "Succeed", res.data)
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;



        },
        openCustomerDialog() {
            this.customerDialog = true;
        },
        ...mapMutations({
            SetSearchKeyword: 'SetSearchKeyword',
        }),
        async postTransaction() {
            if (this.isloading) return;
            const today = new Date();
            this.isloading = true;
            this.saleHeader.isActive = false
            this.saleHeader.discount = this.discount
            this.saleHeader.total = this.grandTotal
            this.saleHeader.clientId = this.currenctCustomer.id
            this.saleHeader.paymentId = this.currentPayment
            this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
            this.saleHeader.line = this.generateSaleLine
            this.saleHeader.userId = this.user.id
            this.saleHeader.bookingDate = jsDateToMysqlDate(today)
            console.log(this.saleHeader);
            await this.$axios
                .post('/api/sale/create', this.saleHeader)
                .then((res) => {
                    this.lastTransactionSaleHeaderId = res.data.split('-')[1]
                    swalSuccess(this.$swal, "Succeed", res.data)
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        ...mapActions(['deleteProduct', 'addProduct', 'clearCart', 'updateSelectedCategoryId', 'deleteProductFromCart', 'addSelectedPayment', 'addCustomer']),
        formatNumber(val) {
            return getFormatNum(val)
        },
        selectePaymentMethod(id) {
            console.log("selected payment ", id);
            this.addSelectedPayment(id)
            console.log("SAATE ", this.currentPayment);
        },
        async fetchCategory() {
            this.isLoading = true
            await this.$axios
                .get('category_f')
                .then((res) => {
                    console.log('=>category' + res.data)
                    //**** all category ******/ 
                    this.categoryList = res.data.map((el) => {
                        return {
                            categ_id: el.categ_id,
                            categ_name: el.categ_name,
                            categ_desc: el.categ_desc,
                        }
                    })
                    //**** all category ******/ 
                    this.categoryList.push({
                        categ_id: '9999',
                        categ_name: 'ທັງໝົດ',
                        categ_desc: 'ລາຍການສິນຄ້າ ທັງໝົດ',
                    })
                    this.selectedItem = this.categoryList.length - 1

                })
                .catch((er) => {
                    console.log('error: ' + er.response.data)
                })
            this.isLoading = false
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
        async loadCurrency() {
            this.isloading = true;
            this.currencyList = []
            console.log("Loading currency ===>");
            await this.$axios
                .get('/api/currency/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        console.log("Currency", iterator);
                        this.currencyList.push(iterator);
                    }
                })
                .catch((er) => {
                    // console.log('Data: ' + er)
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },


        // ******** Set select default customer as WALK-IN ********//
        async loadCustomer() {
            this.isloading = true
            await this.$axios
                .get('api/client/find')
                .then((res) => {
                    this.addCustomer(res.data[0])
                })
                .catch((er) => {
                    console.log('Error: ' + er)
                    swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", er.response.data)
                })
            this.isloading = false
        },
        newOrder() {
            confirmSwal(this.$swal, 'ທ່ານ ກຳລັງຈະຂື້ນບິນໃໝ່', this.clearCart)

        }
    }
}
</script>

<style>
.flexcol .v-btn__content {
    display: flex;
    flex-direction: column;
}

span {
    text-transform: capitalize;
}

.myfooter {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    /* Adjust this to the height of the footer */
    background-color: #f0f0f0;
    padding: 20px;
}

.btn-box {
    display: flex;
}

.btn-box :first-child {
    width: 150px;
}

.btn-box>* {
    flex: 0 0 auto;
}
</style>