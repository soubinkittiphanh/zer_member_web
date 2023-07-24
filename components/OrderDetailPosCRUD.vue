<template>
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="customerDialog" max-width="1024">
            <customer-list @close-dialog="customerDialog = false"></customer-list>
        </v-dialog>
        <v-card>

            <v-card-subtitle>
                <v-row>
                    <v-col cols="6">
                        {{ isQuotation ? `Quotation #` : `Invoice #` }}
                        {{ header.id }}
                    </v-col>
                    <v-col v-if="isQuotation" cols="6" style="text-align: right;">
                        <v-btn size="large" variant="outlined" @click="post" class="primary">
                            Post to invoice<span class="mdi mdi-transfer-right"></span>
                        </v-btn>
                        <v-btn size="large" variant="outlined" @click="post" class="primary">
                            Print<span class="mdi mdi-printer-outline"></span>
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-card>

                    <v-card-text>

                        <div>
                            <v-row>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field type="date" label="ວັນທີ*" v-model="txn.header.bookingDate"
                                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-autocomplete item-text="code" item-value="id" :items="customerList"
                                                label="ລູກຄ້າ*" v-model="txn.header.customerId"></v-autocomplete>
                                            <!-- <v-btn block size="x-large" variant="outlined" @click="openCustomerDialog"
                                                class="primary">
                                                ເລືອກລູກຄ້າ<span class="mdi mdi-account-box"></span>
                                            </v-btn> -->
                                        </v-col>
                                        <!-- <v-col cols="12">ເບີໂທ: {{ txn.header.client.telephone || '' }}
                                        </v-col>
                                        <v-col cols="12">ບໍລິສັດ: {{ txn.header.client.company || '' }}</v-col> -->
                                        <v-col cols="12">
                                            <v-autocomplete item-text="payment_code" item-value="id" :items="paymentList"
                                                label="ການຊຳລະ*" v-model="txn.header.paymentId"></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="txn.header.discount" label="ສ່ວນຫລຸດ*" required
                                                v-comma-thousand></v-text-field></v-col>
                                        <v-col cols="12">
                                            <v-autocomplete item-text="code" item-value="id" :items="currencyList"
                                                label="ສະກຸນເງິນ*" v-model="txn.header.currencyId"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12">ອັດຕາແລກປ່ຽນ: {{ txn.header.exchangeRate }}</v-col>
                                        <v-col cols="12">ຍອດລວມທັງໝົດ: {{ getFormatNum(header.total) }}</v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4" style="text-align: end;">
                                    <v-row>
                                        <v-col cols="12"><v-textarea label="Notes"
                                                v-model="txn.header.remark"></v-textarea></v-col>
                                        <v-col cols="12">ຜູ້ລົງ: {{ header.user.cus_id }} </v-col>
                                        <v-col cols="12">ຊື່: {{ header.user.cus_name }}</v-col>
                                        <!-- <v-col cols="12">ສ່ວນຫລຸດ: {{ header.discount }}</v-col>
                                <v-col cols="12">ຍອດລວມທັງໝົດ: {{ header.total }}</v-col> -->
                                    </v-row>
                                </v-col>

                            </v-row>

                        </div>

                    </v-card-text>
                </v-card>
                <v-divider></v-divider>
                <v-data-table v-if="txn.lines" :headers="headers" :search="search" :items="txn.lines">
                    <template v-slot:item="{ item }">
                        <tr>
                            <!-- <v-form ref="campaignEntry"> -->
                            <td>
                                <!-- <v-text-field  label="ສິນຄ້າ" v-model="item.product.pro_name"
                                        hint="example of helper text only on focus"></v-text-field> -->
                                <v-autocomplete item-text="pro_name" item-value="id" :items="productList" label="ສິນຄ້າ*"
                                    v-model="item.productId"></v-autocomplete>
                            </td>
                            <td> <v-text-field v-model.number="item.quantity" label="ຈຳນວນ"
                                    :rules="numberRule"></v-text-field>
                            </td>
                            <td>
                                <!-- <v-text-field v-model.number="item.quantity" label="ຫົວຫນ່ວຍ"
                                    :rules="numberRule"></v-text-field> -->
                                <v-autocomplete item-text="name" item-value="id" :items="unitList" label="ຫົວຫນ່ວຍ*"
                                    v-model="item.unitId"></v-autocomplete>
                            </td>
                            <td> <v-text-field v-model.number="item.unitRate" label="ຈນ ຕໍ່ ຫົວຫນ່ວຍ"
                                    :rules="numberRule"></v-text-field>
                            </td>
                            <td><v-text-field :rules="numberRule" v-comma-thousand v-model="item.price"
                                    label="ລາຄາຕໍ່ຫນ່ວຍ"></v-text-field></td>
                            <td> <v-text-field v-model="item.discount" label="ສ່ວນຫລຸດ" v-comma-thousand
                                    :rules="numberRule"></v-text-field>
                            </td>
                            <td>
                                <v-text-field v-comma-thousand v-model="item.total" label="ລວມ"
                                    :rules="numberRule"></v-text-field>
                            </td>

                        </tr>

                    </template>

                    <!-- <template v-slot:[`item.function`]="{ item }">

                        <v-btn color="blue darken-1" text @click="editItem(item)
                        wallet = true
                            ">

                            <i class="fas fa-wallet"></i>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.price`]="{ item }">
                        {{ getFormatNum(item.price) }}
                    </template>
                    <template v-slot:[`item.discount`]="{ item }">
                        {{ getFormatNum(item.discount) }}
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        {{ getFormatNum(item.total) }}
                    </template> -->
                </v-data-table>
                <tr>
                    <td>

                        <v-btn size="large" variant="outlined" @click="newRow" class="primary">
                            ເພີ່ມລາຍການ<span class="mdi mdi-plus"></span>
                        </v-btn>
                    </td>
                </tr>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="toggleDialog">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate } from '~/common'
export default {
    props: {
        header: {
            type: Object,
            default: null
        },
        isQuotation: {
            type: Boolean,
            default: false
        }
    },
    directives: {
        commaThousand
    },
    async created() {
        await this.loadPayment()
        await this.loadCurrency()
        await this.loadCustomer()
        await this.loadProduct()
        await this.loadUnit()
        console.log("Header ==> ", this.header);
        if (this.header) {
            this.txn.header = this.header;
            this.txn.lines = this.header.lines;

        }
    },
    methods: {
        async loadCurrency() {
            this.isLoading = true
            this.currencyList = [];
            await this.$axios
                .get('api/currency/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.currencyList.push(iterator)
                    }
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        newRow() {
            const defaultLine = {
                "id": 13,
                "quantity": 2,
                "unitRate": 1,
                "price": 169000,
                "discount": 0,
                "total": 338000,
                "isActive": true,
                "productId": 13,
                "unitId": 1
            }
            this.txn.lines.push(defaultLine)
        },
        async loadProduct() {
            this.isLoading = true
            this.productList = [];
            await this.$axios
                .get('product_f')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.productList.push(iterator)
                    }
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        async loadUnit() {
            this.isLoading = true
            this.unitList = [];
            await this.$axios
                .get('api/unit/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.unitList.push(iterator)
                    }
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        async loadCustomer() {
            this.isLoading = true
            this.customerList = [];
            await this.$axios
                .get('api/client/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.customerList.push(iterator['name'] + ' ' + iterator['company'])
                    }
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        async loadPayment() {
            this.isLoading = true
            this.paymentList = [];
            await this.$axios
                .get('api/paymentMethod/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        console.log("Payment ", iterator['id']);
                        this.paymentList.push(iterator)
                    }
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        openCustomerDialog() {
            this.customerDialog = true;
        },
        post() {
            //  ********** Enable below line to confirm before clear ***********//
            confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
            // this.clearCart()
        },
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        toggleDialog() {
            this.$emit('close-dialog')
        },
        async postToInvoice() {
            if (this.isloading) return;
            this.isloading = true
            // TODO: How to split data between cod order[not yet paid] and all order
            const date = {
                startDate: this.date,
                endDate: this.date2
            }
            await this.$axios
                .put(`api/sale/postToInvoice/${this.header.id}`)
                .then((res) => {
                    this.$emit('reload')
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                    console.log('Error ===>: ' + er)
                })
            this.isloading = false
        }
    },
    watch: {
        'txn.header.currencyId': {
            handler(txnCurrent, txnOld) {
                console.log("TXN HEADER CHANGE: ", this.currencyList.length);
                const currency = this.currencyList.find(el => el['id'] == txnCurrent);
                if (!currency) return
                this.txn.header.exchangeRate = currency['rate'];
            },
            deep: true
        },
        'txn.lines': {
            handler(newValue, oldValue) {
                console.log('TXN LINE CHANGE', oldValue.length)
                // console.log(("Old value ===> ",oldValue));
                // if(oldValue.length==0) return
                if (oldValue.length > 0) {
                    const changedItem = newValue.find((item, index) => item.unitId !== oldValue[index].unitId)
                    console.log('-----------------------');
                    for (const iterator of newValue) {
                        console.log("New value unit ",iterator['unitId']);
                    }
                    console.log('-----------------------');
                    for (const iterator of oldValue) {
                        console.error("Old value unit ",iterator['unitId']);
                    }
                    if (changedItem) {
                        console.log(`Item ${changedItem.id} changed from ${oldValue[changedItem.id - 1].unitId} to ${changedItem.unitId}`)
                    }
                }

            },
            deep: true
        }

    },
    computed: {
        numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
    },
    data() {
        return {
            search: '',
            customerDialog: false,
            customerList: [],
            paymentList: [],
            currencyList: [],
            productList: [],
            unitList: [],
            isloading: false,
            txn: {
                header: {
                    currency: null,
                    currencyId: 2,
                    userId: null,
                    client: null,
                    payment: null,
                    paymentId: 3,
                    exchangeRate: 1,
                    clientId: 1,
                    bookingDate: '',
                    remark: '',
                    total: 0,
                    isActive: true,
                },
                lines: [],
            },
            headers: [
                { text: 'ສິນຄ້າ', align: 'start', value: 'product.pro_name' },
                { text: 'ຈຳນວນ', align: 'end', value: 'quantity' },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'price',
                    sortable: true,
                },
                {
                    text: 'ສ່ວນຫລຸດ',
                    align: 'end',
                    value: 'discount',
                    sortable: true,
                },

                {
                    text: 'ລວມ',
                    align: 'end',
                    value: 'total',
                    sortable: false,
                },

            ],
        }
    },

}
</script>

<style></style>