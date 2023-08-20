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
            <v-btn class="flexcol ml-10" icon v-for="item in menuItems" :key="item.title" :to="item.path"
                @click="item.method">
                <v-icon> {{ item.icon }} </v-icon>
                <span class="mt-2">{{ item.title }}</span>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" clipped width="180">
            <v-list dense>
                <v-subheader style="font-size: larger; font-weight: bold;">ຮ້ານຈີ່ທັນ </v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-divider></v-divider>
                    <v-list-item v-for="(item, i) in categoryList" :key="i">
                        <!-- <v-chip class="ma-2" style="background-color: transparent; outline: 1px solid gray;" variant="outlined" > -->
                        <v-list-item-content>
                            <v-list-item-title style="font-size: large;">{{ item.categ_name }}</v-list-item-title>
                            <v-divider></v-divider>
                        </v-list-item-content>
                        <!-- </v-chip> -->
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
                <div style="width: 100%;" ref="myElement">
                    <div>
                        <v-row align="center" class="pa-2">
                            <v-col cols="2">
                                <!-- <v-btn @click="openCustomerDialog" style="background-color: #F5F5F5;">
                                    <v-icon class="mdi mdi-account-plus-outline"></v-icon>
                                </v-btn> -->
                                <v-btn color="primary" text @click="openCustomerDialog">
                                    <v-icon class="mdi mdi-account-plus-outline"></v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="4" style="text-align: left;">
                                <v-chip class="ma-2" color="success" variant="outlined">
                                    {{ currenctCustomer == null ? '' : currenctCustomer.name }}
                                </v-chip>


                            </v-col>
                            <v-col cols="2">
                                <!-- <v-btn @click="() => { }">
                                    <v-icon class="mdi mdi-bike-fast"></v-icon>
                                </v-btn> -->
                                <v-btn color="primary" text @click="() => { }">

                                    <v-icon class="mdi mdi-bike-fast"></v-icon>
                                    <!-- <i class="fa fa-pencil-square-o"></i> -->
                                </v-btn>
                            </v-col>
                            <v-col cols="2" style="text-align: right;">
                                <!-- <v-btn @click="newOrder" style="background-color: #F5F5F5;text-align: right;">
                                    <v-icon color="" class="mdi mdi-file-document-refresh-outline"></v-icon>
                                </v-btn> -->
                                <v-btn color="primary" text @click="newOrder">
                                    <v-icon color="" class="mdi mdi-file-document-refresh-outline"></v-icon>
                                </v-btn>
                            </v-col>

                        </v-row>
                    </div>
                </div>
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
                <div style="position: absolute; bottom: 0px;width: 100%;">

                    <v-divider class="mb-1"></v-divider>
                    <div>
                        <!-- <div class="d-flex  align-center pa-4"> -->
                        <!-- <span class="pr-4">ສ່ວນຫລຸດ:</span> -->
                        <!-- <v-text-field :rules="priceRule" type="number" v-model="discount" clearable clear-icon="mdi-close"
                            prepend-inner-icon="mdi-sale-outline" dense outlined label="ສ່ວນຫລຸດ"
                            :placeholder="discount.toString()" solo-inverted hide-details /> -->
                        <v-text-field :rules="priceRule" v-model.number="discount" label="ສ່ວນຫລຸດ" filled rounded
                            dense></v-text-field>
                        <!-- </div> -->
                        <v-list-item>
                            <h3>ລວມ:</h3>
                            <v-spacer></v-spacer>
                            <v-chip v-for="item in currencyList" :key="item.id" class="ma-2" color="green"
                                text-color="white">
                                {{ item.code }}{{ formatNumber((grandTotal - discount) / item.rate) }}
                            </v-chip>
                            <!-- <h6 v-for="item in currencyList" :key="item.id">{{item.code}} - {{ formatNumber((grandTotal-discount)/item.rate )}} | </h6> -->
                        </v-list-item>
                    </div>
                    <v-divider class="mb-1"></v-divider>
                    <v-row>
                        <v-col :cols="12">
                            <div class="row">
                                <div v-for="(item, index) in paymentList" :key="index"
                                    class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                                    <PaymentCard :id="item.id" :title="item.payment_code" :icon="item.icon"
                                        :path="item.path">
                                        <template v-slot:iconSlot>
                                            <img :src="svgIcon" height="30">
                                        </template>
                                    </PaymentCard>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-btn rounded color="primary" block large @click="postTransaction">
                            <v-icon size="25" left> mdi-cash-100 </v-icon> PAY
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
import html2canvas from 'html2canvas'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { getFormatNum, jsDateToMysqlDate } from '~/common'
import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/common/index'
export default {
    components: { CustomerList, Quotation },
    name: 'DefaultLayout',
    data() {
        return {
            search: '',
            svgIcon: require('~/assets/icons/cash.svg'),
            logoCompany: require('~/assets/image/BWLOGO.jpeg'),
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
                    method: () => { },
                },

                {
                    title: 'Orders',
                    path: '/admin/ordersFromPos',
                    // $router.push('/admin/ordersFromPos')
                    icon: 'mdi-reorder-horizontal',
                    method: () => { },
                },
                {
                    title: 'Quotation',
                    path: '',
                    icon: 'mdi-receipt-text-clock-outline',
                    method: this.setQuotation
                },
                // {
                //     title: 'history',
                //     path: '',
                //     icon: 'mdi-history',
                //     method: () => { },
                // },
                // {
                //     title: 'Help',
                //     path: '',
                //     icon: 'mdi-help-circle-outline',
                //     method: () => { },
                // },

                {
                    title: 'Logout',
                    path: '/admin/logout',
                    icon: 'mdi-logout',
                    method: () => { },
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
        user() {
            return this.$auth.user || ''
        },
        ...mapState(['productSearchKeyboard',]),
        ...mapGetters(['cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment']),
        serachModel: {
            get() {
                return this.stateValue;
            },
            set(value) {
                const lowerCaseSearchValue = value.toLowerCase();
                this.SetSearchKeyword(lowerCaseSearchValue);
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
                        productKey: iterator.id,
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
        generatePrintView() {
            let txnListHtml = ``
            for (const iterator of this.productCart) {
                const product = this.findAllProduct.find(el => el.id == iterator.id)
                const quantity = iterator.qty
                const unitRate = 1
                const price = iterator.pro_price
                const discount = 0
                const productId = iterator.id
                const productKey = iterator.id
                const unitId = 1
                const total = iterator.qty * iterator.pro_price
                // txnListHtml += `<div style="font-size: 14px;">${product.pro_name} x${quantity} - ${this.formatNumber(total)}</div>`
                txnListHtml += `<div class="ticket">
		<div class="product-name">${product.pro_name} </div>
		<div class="price">x${quantity} ${this.formatNumber(total)}</div>
	</div>`
            }
            const today = new Date()
            const bookingDate = jsDateToMysqlDate(today)
            const bookingDateWithTime = today.toISOString
            let totalHtml = ``
            for (const iterator of this.currencyList) {
                totalHtml += `
                <div class="ticket">
                    <div class="product-name"></div>
                <div class="price">${iterator.code} ${this.formatNumber(this.grandTotal / iterator.rate)}</div>
            </div>
                `
            }

            const windowContent = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style type="text/css">
        * {
            font-family: 'noto sans lao';
            padding: 0px;
            margin: 0px;
        }
		.ticket {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0px;
			border-radius: 10px;
			margin: 0px;
	
		}

		.product-name {
			float: left;
			font-size: 12px;
		}

		.price {
			float: right;
			font-size: 12px;
		}
        
	</style>
          </head>
          <body>
            <div style="text-align: center;">
                <img src="${this.logoCompany}" alt="Description of the image" width="200" height="200">
            </div>
            <h3 style="text-align: center;"> ໃບຮັບເງິນ </h1>
            <h5> ວັນທີ ${today.toLocaleString()}</h5>
            <h5> Ticket ${this.lastTransactionSaleHeaderId} </h5>
            <h5> Tel 020 7777 5660 </h5>
            <h5> ຜູ້ຂາຍ: ${this.user.cus_name}  </h5>
            <hr> </hr>
            ${txnListHtml}
            <hr> </hr>
            ${totalHtml}
            <h2 style="text-align: center;"> THANKYOU </h2>
            
          </body>
          </html>

        `
            const printWin = window.open(
                '',
                '',
                'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
            )
            printWin.document.open()
            printWin.document.write(windowContent)

            setTimeout(() => {
                printWin.print()
                printWin.close()
            }, 1000)
        },
        async setQuotation() {
            if (this.isloading || this.generateSaleLine == 0) {
                if (this.generateSaleLine == 0) {
                    swalError2(this.$swal, "Error", 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
                }
                return;
            }

            const today = new Date();
            this.isloading = true;
            this.saleHeader.discount = this.discount
            this.saleHeader.remark = "Quotation"
            this.saleHeader.total = this.grandTotal
            this.saleHeader.clientId = this.currenctCustomer.id
            this.saleHeader.paymentId = this.currentPayment
            this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
            this.saleHeader.lines = this.generateSaleLine
            this.saleHeader.userId = this.user.id
            this.saleHeader.bookingDate = jsDateToMysqlDate(today)
            this.saleHeader.isActive = true
            await this.$axios
                .post('/api/quotation/create', this.saleHeader)
                .then((res) => {
                    this.lastTransactionSaleHeaderId = res.data.split('-')[1].toString().trim()
                    // localStorage.setItem('customer', JSON.stringify(this.currenctCustomer));
                    // localStorage.setItem('product', JSON.stringify(this.productCart));
                    // localStorage.setItem('quotationId', this.lastTransactionSaleHeaderId);
                    window.open(`/admin/PDFQuotation/${this.lastTransactionSaleHeaderId}`, '_blank');
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
            if (this.isloading || this.generateSaleLine == 0) {
                if (this.generateSaleLine == 0) {
                    swalError2(this.$swal, "Error", 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
                }
                return;
            }
            const today = new Date();
            this.isloading = true;
            this.saleHeader.isActive = true
            this.saleHeader.discount = this.discount
            this.saleHeader.total = this.grandTotal
            this.saleHeader.clientId = this.currenctCustomer.id
            this.saleHeader.paymentId = this.currentPayment
            this.saleHeader.currencyId = 1 // DEFAULT CURRENCY I FOR LAK
            this.saleHeader.lines = this.generateSaleLine
            this.saleHeader.userId = this.user.id
            this.saleHeader.bookingDate = jsDateToMysqlDate(today)
            console.log(this.saleHeader);
            await this.$axios
                .post('/api/sale/create', this.saleHeader)
                .then((res) => {
                    this.lastTransactionSaleHeaderId = res.data.split('-')[1].trim()
                    swalSuccess(this.$swal, "Succeed", res.data.split('-')[0])
                    console.log('response post completed===> ' + res.data);
                    // this.previewTicket(this.lastTransactionSaleHeaderId)
                    this.generatePrintView()
                    this.newOrder()
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er.response.data)
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
        previewTicket(saleHeaderId) {
            const path = this.isQuotation ? 'PDFQuotation' : 'PDFInvoice'
            window.open(`/admin/PDFTicket/${saleHeaderId}`, '_blank');
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
            //  ********** Enable below line to confirm before clear ***********//
            // confirmSwal(this.$swal, 'ທ່ານ ກຳລັງຈະຂື້ນບິນໃໝ່', this.clearCart)
            this.clearCart()
        },
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