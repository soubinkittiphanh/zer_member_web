
<template>
    <div>
        <v-dialog v-model="ticketPreviewDialog" max-width="524">
            <div :key="previewDialogKey">
                <v-card class="pa-2">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ວັນທີ: {{ customerForm.txn_date }}</v-row>
                                <v-row>ຮ້ານ: {{ currentTerminal == undefined ? '' : currentTerminal['description'] + '-' +
                                    currentTerminal['name'] }}</v-row>
                                <v-row>ເບີໂທ:</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ຜູ້ຮັບ: {{ customerForm.name }}</v-row>
                                <v-row>ໂທ: {{ customerForm.tel }}</v-row>
                                <v-row>ຂົນສົ່ງ: {{ currentShipping }}</v-row>
                                <v-row>ບ່ອນສົ່ງ: {{ customerForm.address }} - {{ currentGeo }}</v-row>
                                <v-row>ຄ່າຝາກ: {{ customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' :
                                    'ຕົ້ນທາງ'
                                }}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row v-for="prod in cartOfProduct" :key="prod['id']">
                            <!-- <v-col cols="5">{{ prod['pro_name'] }}</v-col>
                            <v-col cols="3">{{ formatNumber(prod['localPrice']) }}</v-col>
                            <v-col cols="4">{{ prod['qty'] }}</v-col> -->
                            {{ prod['pro_name'] }}
                            <v-spacer></v-spacer>
                            {{ formatNumber(prod['localPrice']) }}
                            X
                            {{ prod['qty'] }}
                        </v-row>
                        <v-row v-if="customerForm.discount > 0">
                            ສ່ວນຫລຸດ
                            <v-spacer></v-spacer>
                           - {{ formatNumber(customerForm.discount) }}
                        </v-row>
                        <v-row v-if="customerForm.rider_fee > 0">
                            ຄ່າສົ່ງ
                            <v-spacer></v-spacer>
                            {{ formatNumber(customerForm.rider_fee) }}
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            ຊຳລະດ້ວຍ: {{ currentPayment }}
                            <v-spacer></v-spacer>
                            {{ formatNumber(ticketTotal) }}
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn rounded color="warning" @click="ticketPreviewDialog = false">Cancel</v-btn>
                        <v-btn rounded color="primary" @click="submit">Post</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>

        <v-card>
            <v-card-title>
                <v-row>
                    <v-chip class="ma-2" color="primary" label text-color="white">
                        <v-icon start>mdi-label</v-icon>
                        ຂໍ້ມູນການຈັດສົ່ງ
                    </v-chip>
                    <v-spacer></v-spacer>
                    <!-- <v-btn rounded @click="submit" color="primary">Preview ticket</v-btn> -->
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form @submit.prevent="previewTicket">
                    <v-row>
                        <v-col cols="4">
                            <v-text-field type="date" label="ວັນທີ*" v-model="customerForm.txn_date"
                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.name" label="ຊືລູກຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.tel" label="ເບີໂທລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.address" label="ບ່ອນສົ່ງ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="abbr" item-value="id" :items="geographyList" label="ແຂວງ*"
                                v-model="customerForm.geoId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-radio-group v-model="customerForm.shipping_fee_by" row align="center">
                                <v-label>ຄ່າຝາກ:</v-label>
                                <v-radio label="ຕົ້ນທາງ" value="source"></v-radio>
                                <v-radio label="ປາຍທາງ" value="destination"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="shippingList" label="ຂົນສົ່ງ*"
                                v-model="customerForm.shippingId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="riderList" label="Rider*"
                                v-model="customerForm.riderId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.rider_fee" label="ຄ່າສົ່ງ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">

                        </v-col>
                        <v-col cols="4">

                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.discount" label="ສ່ວນຫລຸດ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn rounded type="submit" color="primary">Print preview</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
  
<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { getFormatNum } from '~/common'
export default {
    name: 'delivery-form',
    async created() {
        const today = new Date().toISOString().substr(0, 10);
        this.customerForm.txn_date = today;
        console.log(`PRODUCT ${this.cartOfProduct[0]['pro_name']}`);
        await this.loadRider()
        await this.loadGeo()
        await this.loadShipping()
        await this.loadPayment()
    },
    computed: {
        generateCustomerObjec() {
            const customerInfo = {
                name: this.customerForm.name,
                branch: this.currentTerminal == undefined ? '' : this.currentTerminal['description'] + '-' +
                    this.currentTerminal['name'],
                tel: this.customerForm.tel,
                shippingFeeBy: this.customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' : 'ຕົ້ນທາງ',
                address: this.customerForm.address + ' - ' + this.currentGeo,
                shipping: this.currentShipping,
                payment: this.currentPayment,
                riderFee: this.customerForm.rider_fee,
            }
            return customerInfo;
        },
        ticketTotal() {
            let total = 0;
            for (const iterator of this.cartOfProduct) {
                total += iterator['localPrice']
            }
            return total - this.customerForm.discount-this.customerForm.rider_fee;
        },
        currentTerminal() {
            console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        currentGeo() {
            const geo = this.geographyList.find(el => el.id == this.customerForm.geoId)
            if (geo == undefined) return ''
            return geo['description']
        },
        currentShipping() {
            const shipping = this.shippingList.find(el => el.id == this.customerForm.shippingId)
            if (shipping == undefined) return ''
            return shipping['name']
        },
        currentPayment() {
            const payment = this.paymentList.find(el => el.id == this.currentSelectedPayment)
            if (payment == undefined) return ''
            return payment['payment_code']
        },
        ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    },
    data() {
        return {
            geographyList: [],
            paymentList: [],
            previewDialogKey: 1,
            ticketPreviewDialog: false,
            riderList: [],
            shippingList: [],
            ticketPreviewDialog: false,
            customerForm: {
                name: '',
                tel: '',
                address: '',
                rider_fee: 0,
                txn_date: null,
                shipping_fee_by: 'destination',
                shippingId: 1,
                riderId: 1,
                geoId: 1,
                discount: 0,
            }
        }
    },
    methods: {
        submit() {
            // handle form submission
            console.log(this.customerForm)
            const payload = {
                customerForm: this.customerForm,
                customerInfo: this.generateCustomerObjec
            }
            this.$emit('post-transaction', payload)
        },
        formatNumber(val) {
            return getFormatNum(val)
        },
        previewTicket() {
            this.previewDialogKey += 1;
            this.ticketPreviewDialog = true

        },
        async loadRider() {
            this.$axios
                .get('/api/rider/find')
                .then((res) => {
                    this.riderList = res.data
                })
                .catch((er) => {
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
                    this.paymentList = res.data
                })
                .catch((er) => {
                    // console.log('Data: ' + er)
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadGeo() {
            this.$axios
                .get('/api/geography/find')
                .then((res) => {
                    this.geographyList = res.data
                    for (const iterator of this.geographyList) {
                        iterator['abbr'] += ' - '.concat(iterator['description'])
                        console.log('====> ' + iterator['abbr']);
                    }
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadShipping() {
            this.$axios
                .get('/api/shipping/find')
                .then((res) => {
                    this.shippingList = res.data
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        }
    }
}
</script>
  