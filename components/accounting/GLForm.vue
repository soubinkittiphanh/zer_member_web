<template>
    <!-- TODO: RECEIVE MAPPING MODULES -->
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="customerDialog" max-width="1024">
            <customer-list @close-dialog="customerDialog = false"></customer-list>
        </v-dialog>
        <v-dialog v-model="cancelConfirmDialog" max-width="1024">
            <cancel-ticket-form @refresh="$emit('reload')" :id="headerId" :customerId="onlineCustomerId"
                @close-dialog="cancelConfirmDialog = false"></cancel-ticket-form>
        </v-dialog>
        <!-- ************ Bottom sheet show error message ************* -->
        <v-bottom-sheet v-model="sheet" inset>
            <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                    close
                </v-btn>
                <div class="my-3">
                    {{ validateErrorMessage }}
                </div>
            </v-sheet>
        </v-bottom-sheet>

        <v-card>
            <v-card-subtitle>
                <v-row>
                    <v-col cols="6">
                        <v-chip class="pa-5" color="primary" label text-color="white">
                            <v-icon start>mdi-label</v-icon>
                            <h3>General ledger</h3>
                        </v-chip>
                    </v-col>
                    <v-col cols="6" style="text-align: right;">
                        <v-btn size="large" variant="outlined" @click="null" class="primary" rounded>
                            <span class="mdi mdi-printer-outline"></span>Print
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="pa-1">
                <!-- ******* Header Card OPEN *******-->
                <v-card :style="headerError ? `outline:1px solid red` : ``" class="pa-1">
                    RECID: {{ transaction.id }}
                    <v-card-text>

                        <div>
                            <v-row>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field type="date" label="ວັນທີ*" v-model="transaction.bookingDate"
                                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="transaction.poHeaderId" label="PO REFNO." disabled
                                                v-comma-thousand></v-text-field>
                                        </v-col>

                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row>

                                    </v-row>
                                </v-col>
                                <v-col cols="4" style="text-align: end;">
                                    <v-row>
                                        <v-col cols="12" v-if="transaction.user">ຜູ້ລົງ: {{ transaction.user.cus_id }}
                                        </v-col>
                                        <v-col cols="12" v-if="transaction.user">ຊື່: {{ transaction.user.cus_name
                                            }}</v-col>
                                        <v-col cols="12">
                                            <v-text-field disabled>
                                                <template v-slot:label>
                                                    <span style="color: black; font-weight: bold;">{{ `Total Amount LCY:
                                                        ${getFormatNum(grandTotal)}` }}</span>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>

                            </v-row>

                        </div>

                    </v-card-text>
                </v-card>
                <!-- ******* Header Card CLOSE *******-->
                <v-divider></v-divider>
                <!-- ******* Line Card OPEN *******-->

                <v-data-table v-if="transaction.lines" :headers="headers" :search="search" :items="transaction.lines">
                    <template v-slot:item="{ item }">
                        <tr :style="errorLineNumber == transaction.lines.indexOf(item) ? `outline: 1px solid red` : ``">
                            <td :class="errorLineNumber == transaction.lines.indexOf(item) ? `error` : ``">
                                {{ transaction.lines.indexOf(item) + 1 }}
                            </td>
                            <td>
                                <v-autocomplete @input="currencyChange(item)" item-text="code" item-value="id"
                                    :items="currencyList" label="currency*" v-model="item.currencyId"></v-autocomplete>
                            </td>
                            <td> <v-text-field @input="amountChange(item)" v-model="item.amount" label="ຈຳນວນ"
                                    v-comma-thousand :rules="[numberCommaRule]"></v-text-field>
                            </td>
                            <td> <v-text-field @input="rateChange(item)" v-model="item.rate" label="XRate"
                                    v-comma-thousand :rules="[numberCommaRule]"></v-text-field>
                            </td>
                            <td>
                                <v-autocomplete item-text="accountNumber" item-value="id" :items="accountList"
                                    label="DR*" v-model="item.drAccountId">
                                    <template #item="{ item }">
                                        {{ `${item.accountNumber} - ${item.accountName}` }}
                                    </template>
                                </v-autocomplete>
                            </td>
                            <td>
                                <v-autocomplete item-text="accountNumber" item-value="id" :items="accountList"
                                    label="CR*" v-model="item.crAccountId">
                                    <template #item="{ item }">
                                        {{ `${item.accountNumber} - ${item.accountName}` }}
                                    </template>
                                </v-autocomplete>
                            </td>
                            <td>
                                <v-text-field v-model="item.description" label="ເນື້ອໃນ"></v-text-field>
                            </td>
                            <td style="text-align: right;">
                                {{ getFormatNum(item.localAmount) }}
                            </td>
                            <td>
                                <v-btn color="error" text @click="deleteItem(item)" v-on:keydown="handleKeyDown">
                                    <i class="fas fa-trash"></i>
                                </v-btn>
                            </td>

                        </tr>

                    </template>
                </v-data-table>

                <!-- ******* Line Card CLOSE *******-->
                <tr v-if="transaction.lines.length == 0">
                    <td>
                        <v-btn size="large" variant="outlined" @click="newRow" class="primary" rounded>
                            <span class="mdi mdi-plus"></span>
                        </v-btn>
                    </td>
                </tr>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="toggleDialog">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="postTransaction">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex'
import PricingOption from '~/components/PricingOption.vue'
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate, replaceAll } from '~/common'
// import CancelTicketForm from './CancelTicketForm.vue';
export default {
    name: 'gl-form',
    // components: { PricingOption, CancelTicketForm },
    props: {
        GLId: {
            type: Number,
            default: null,
        },
        isUpdate: {
            type: Boolean,
            default: false,
        },
    },
    directives: {
        commaThousand
    },
    async created() {
        await this.loadChartOfAccount();
        const today = new Date().toISOString().substr(0, 10);
        console.log(`PO Transaction: ${JSON.stringify(this.POTransaction)}`);
        this.transaction.bookingDate = today;
        if (this.isUpdate) {
            console.log("View old record");
            this.isloading = true
            await this.loadTransaction()
            this.isloading = false
        } else {
            this.newRow();
        }

        // TODO: Add pricing option here
    },
    methods: {
        async loadChartOfAccount() {
            await this.$axios.get("api/account/findAll").then(response => {
                this.isloading = true
                this.accountList = response.data
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
        findCurrency(currencyId) {
            return this.findAllCurrency.find(el => el.id == currencyId);
        },
        handleKeyDown(event) {
            if (event.key === 'Tab') {
                // Handle tab key press
                console.log('Tab key pressed')
                this.newRow()
            }
        },
        currencyChange(item) {
            const currency = this.currencyList.find(el => el['id'] == item.currencyId);
            let index = this.transaction.lines.indexOf(item);
            if (!currency) return
            this.transaction.lines[index]['rate'] = currency['rate'];
            const amount = replaceAll(this.transaction.lines[index]['amount'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            this.transaction.lines[index]['localAmount'] = amount * rate
        },
        amountChange(item) {
            let index = this.transaction.lines.indexOf(item);
            const amount = replaceAll(this.transaction.lines[index]['amount'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            this.transaction.lines[index]['localAmount'] = amount * rate
        },
        rateChange(item) {
            let index = this.transaction.lines.indexOf(item);
            const amount = replaceAll(this.transaction.lines[index]['amount'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            this.transaction.lines[index]['localAmount'] = amount * rate
        },
        async deleteItem(item) {
            // TODO: Delete line not reduct card 
            if (this.transaction.poHeaderId != null) return swalError2(this.$swal, 'Error', `ບໍ່ສາມາດລົບໄດ້ ການຮັບເຄື່ອງຈາກ PO ຕ້ອງອີງຕາມລາຍການຢູ່ໃນ PO ເທົ່ານັ້ນ`)
            if (item.id) {
                console.log("Line has id");
                this.isloading = true
                await this.$axios
                    .delete(`api/${this.apiLine}/line/find/${item.id}`)
                    .then((res) => {
                        this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
                    })
                    .catch((er) => {
                        swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
                    })
                this.isloading = false
            } else {
                this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
                console.log("Line has no id");
            }
        },
        newRow() {
            if (this.isUpdate) return swalError2(this.$swal, 'Error', 'Operation fail ບໍ່ສາມາດເພີ່ມໄດ້ເນື່ອງຈາກ ເປັນລາຍການແກ້ໄຂ')
            const defaultLine = {
                "postingReference": 'DUMMY',
                "bookingDate": null,
                "amount": 0,
                "currencyId": null,
                "rate": 1,
                "drAccountId": null,
                "crAccountId": null,
                "description": '',
                "localAmount": 0,
                "source": 'GL',
                "isActive": true,
            }
            this.transaction.lines.push(defaultLine)
        },
        openCustomerDialog() {
            this.customerDialog = true;
        },
        clearLineIdForCreateFunction() {
            // let linesWithNoId = [];
            for (const iterator of this.transaction.lines) {
                iterator.id = null
                iterator.bookingDate = this.transaction.bookingDate
            }
            // this.transaction.lines = linesWithNoId;
        },
        async loadTransaction() {
            await this.$axios
                .get(`api/${this.apiLine}/find/${this.GLId}`)
                .then((res) => {
                    this.transaction.bookingDate = res.data.bookingDate;
                    this.transaction.lines.push(res.data);
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },
        validateLine(obj, errorLineNumber) {
            // Check if the object has all required properties
            let { qty, rate, price, discount, total, productId, unitId } = obj
            discount = parseInt(discount)
            rate = parseInt(rate)
            qty = parseInt(qty)
            if (!Number.isFinite(qty) || Number(qty) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${qty}********`
                if (this.sourceAPLID = 'PO' || this.transaction.poHeaderId) return true
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(rate) || Number(rate) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${rate}********`
                return false; // Reach must be a positive number
            }
            console.log("Type of price ", typeof (price), ' [price] ', price);
            if (!Number.isFinite(price) || Number(price) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`
                return false; // Reach must be a positive number
            }
            console.log("Type of discount1 ", typeof (discount));
            // if (!Number.isFinite(discount)) {
            //     console.log("Type of discount2 ", typeof (discount));
            //     this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`
            //     return false; // Reach must be a positive number
            // }
            if (!Number.isFinite(total) || Number(total) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຍອດລວມ ຕ້ອງໃຫຍ່ກ່ອນ 0 current value is ${total}********`
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(productId)) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສິນຄ້າບໍ່ຖືກຕ້ອງ  current value is ${productId}********`
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(unitId)) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຫົວຫນ່ວຍບໍ່ຖືກຕ້ອງ  current value is ${unitId}********`
                return false; // Reach must be a positive number
            }
            return true;
        },
        validateHeader() {
            this.headerError = true
            this.sheet = true
            console.log('=== currency id ', this.transaction.currencyId);
            if (!this.transaction.currencyId) {
                this.validateErrorMessage = `******** Error Currency in Header #${this.transaction.currencyId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
                return false; // Reach must be a positive number
            }
            // if (!this.transaction.paymentId) {
            //     this.validateErrorMessage = `******** Error Payment in Header #${this.transaction.paymentId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
            //     return false; // Reach must be a positive number
            // }
            // if (!this.transaction.clientId) {
            //     this.validateErrorMessage = `******** Error Customer in Header #${this.transaction.clientId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
            //     return false; // Reach must be a positive number
            // }
            if (this.transaction.lines.length == 0) {
                this.validateErrorMessage = `******** Error Header ບໍ່ມີລາຍການສິນຄ້າ ********`
                return false; // Reach must be a positive number

            }
            this.sheet = false
            this.headerError = false
            return true
        },
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        toggleDialog() {
            this.$emit('close-dialog')
        },
        async postTransaction() {
            // if (this.isloading || !this.validateHeader()) return;
            if (this.isloading) return;
            this.isloading = true

            this.errorLineNumber = null
            for (const iterator of this.transaction.lines) {
                iterator.amount = parseInt(replaceAll(iterator.amount, ',', ''))
                iterator.localAmount = parseInt(replaceAll(iterator.localAmount, ',', ''))
                iterator.rate = parseInt(replaceAll(iterator.rate, ',', ''))
            }
            if (this.isUpdate) {
                // ********** If header has data, that means we go for update API ********** //
                this.transaction.lines[0]['bookingDate'] = this.transaction.bookingDate;
                await this.$axios
                    .put(`api/${this.apiLine}/update/${this.GLId}`, this.transaction.lines[0])
                    .then((res) => {
                        this.$emit('reload')
                        this.$emit('close-dialog')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                        const outOfStockProductId = er.response.data.split("#")[1]
                        if (outOfStockProductId != undefined) {
                            const pronductOutStock = this.productList.find(el => el.id == outOfStockProductId)
                            this.validateErrorMessage = `********  ສິນຄ້າ ${pronductOutStock['pro_name']} ໃນສ້າງບໍ່ພຽງພໍ ********`
                            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId))
                            this.sheet = true
                        }
                        console.log('Error ===>: ' + er)
                    })
            } else {
                // ********** Go for create API ********** //
                this.clearLineIdForCreateFunction()
                await this.$axios
                    .post(`api/${this.apiLine}/createMulti`, this.transaction)
                    .then((res) => {
                        this.$emit('reload')
                        this.$emit('close-dialog')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                        const outOfStockProductId = er.response.data.split("#")[1]
                        if (outOfStockProductId != undefined) {
                            this.validateErrorMessage = `********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********`
                            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId))
                            this.sheet = true
                        }
                        console.log('Error ===>: ' + er)
                    })
            }
            this.isloading = false
        }
    },
    computed: {
        // ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),
        clientList() {
            return this.findAllClient
        },
        currentTerminal() {
            console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        user() {
            return this.$auth.user || ''
        },
        apiLine() {
            return 'gl';
        },
        productList() {
            return this.findAllProduct
        },
        paymentList() {
            return this.findAllPayment
        },
        unitList() {
            return this.findAllUnit
        },
        currencyList() {
            return this.findAllCurrency
        },
        numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
        grandTotal() {
            let total = this.transaction.lines.reduce((total, item) => {
                return total + item.localAmount;
            }, 0);
            return total
            // return total;
        },


    },
    data() {
        return {
            accountList: [],
            cancelConfirmDialog: false,
            productPricingSelected: null,
            pricingDialogKey: 1,
            pricingDialog: false,
            search: '',
            numberCommaRule: (value) => {
                const regex = /^[0-9,]*$/;
                return regex.test(value) || 'Only numbers and commas are allowed';
            },
            headerError: false,
            customerDialog: false,
            validateErrorMessage: '',
            sheet: false,
            errorLineNumber: null,
            onlineCustomerId: null,
            isloading: false,
            transaction: {
                vendorId: null,
                status: 'PENDING',
                isActive: true,
                exchangeRate: 1,
                total: 0,
                poHeaderId: null,
                locationId: null,
                lines: []
            },
            headers: [
                { text: '#', align: 'start', value: '' },
                { text: 'ຈຳນວນ', align: 'end', value: 'amount' },
                { text: 'Currency', align: 'end', value: 'currencyId' },
                {
                    text: 'ອັດຕາແລກປ່ຽນ',
                    align: 'end',
                    value: 'rate',
                    sortable: true,
                },
                {
                    text: 'DR',
                    align: 'end',
                    value: 'drAccountId',
                    sortable: true,
                },
                {
                    text: 'CR',
                    align: 'end',
                    value: 'crAccountId',
                    sortable: true,
                },
                {
                    text: 'ເນື້ອໃນ',
                    align: 'end',
                    value: 'description',
                    sortable: false,
                },
                {
                    text: 'LCY Total',
                    align: 'end',
                    value: 'localAmount',
                    sortable: false,
                },
                {
                    text: 'delete',
                    align: 'end',
                    value: 'id',
                    sortable: false,
                },

            ],
        }
    },

}
</script>

<style></style>