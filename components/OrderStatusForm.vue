
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຮັບເຄື່ອງ {{ confirmEntries.length }} ລາຍການ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-card v-for="order in confirmEntries" :key="order.id" class="mb-2" >
                        <v-card-text>
                            <v-row>
                                <v-col cols="2">
                                    <v-text-field disabled v-model="order.trackingNumber"
                                        label="* Tracking No."></v-text-field>
                                </v-col>
                                <v-col cols="1">
                                    <v-text-field v-model="order.shippingFee" label="* ຄ່າສົ່ງ"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-autocomplete @input="currencyChange(order)" item-text="code" item-value="id"
                                        :items="currencyList" label="ສະກຸນເງິນ*"
                                        v-model="order.shippingFeeCurrencyId"></v-autocomplete>
                                </v-col>
                                <v-col cols="1">
                                    <v-text-field disabled v-model="order.shippingRate" label="ອັດຕາແລກປ່ຽນ"></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-select v-if="orderStatus != 'ORDERED'" disabled v-model="order.status"
                                        :items="status" label="ສະຖານະເຄື່ອງ" required></v-select>
                                </v-col>
                                <v-col cols="2" v-if="orderStatus == 'INVOICED'">
                                    <v-autocomplete item-text="payment_code" item-value="id" :items="paymentList"
                                        label="ການຊຳລະ*" v-model="order.paymentId"></v-autocomplete>
                                </v-col>
                                <v-col cols="1" align-self="center">
                                    <v-btn color="warning" rounded variant="text"
                                        @click="removeItemFromConfirmEntrie(order)">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </v-btn>
                                </v-col>
                                <v-col cols="1" align-self="center">
                                    <v-btn color="primary" rounded variant="text" @click="confirmOrder(order)">
                                        <i class="fa-regular fa-circle-check"></i>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                </v-form>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import { debounce } from 'lodash'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        isCreate: {
            type: Boolean,
            require: true,
            default: true,
        },
        recordId: {
            type: Number,
            require: false,
            default: 0,
        },
        orderStatus: {
            type: String,
            default: 'RECEIVED',
        }
    },
    data() {
        return {
            confirmEntries: [],
            status: [
                'ORDERED',
                'RECEIVED',
                'INVOICED',
            ],
            isloading: false,
        };
    },


    mounted() {
        if (this.orderStatus == 'INVOICED') {
            // this.confirmEntries = this.$store.state.listOfConfirmPaymentOrder;
            this.confirmEntries = this.$store.state.listOfConfirmPaymentOrder.map(order => ({ ...order }));
            console.log(`$$$$$$$$$  PAYMENT LIST [${this.confirmEntries.length}] $$$$$$$$$$`);
        } else {
            // this.confirmEntries = this.$store.state.listOfConfirmStockInOrder;
            this.confirmEntries = this.$store.state.listOfConfirmStockInOrder.map(order => ({ ...order }));
            console.log(`$$$$$$$$$ STOCK LIST [${this.confirmEntries.length}] $$$$$$$$$$`);
        }
        for (const iterator of this.confirmEntries) {
            iterator['status'] = this.orderStatus
        }
    },
    methods: {
        ...mapActions(['removeOrderFromStockConfirm', 'removeOrderFromPaymentConfirm']),
        currencyChange(order) {
            const orderIdx = this.confirmEntries.indexOf(order)
            const currency = this.currencyList.find(el => el['id'] == this.confirmEntries[orderIdx].shippingFeeCurrencyId);
            if (!currency) return
            this.confirmEntries[orderIdx].shippingRate = currency['rate'];
        },
        removeItemFromConfirmEntrie(entry) {
            const index = this.confirmEntries.indexOf(entry)
            this.confirmEntries.splice(index, 1)
            // ***** remove from state *****
            if (this.orderStatus == 'RECEIVED') {
                this.removeOrderFromStockConfirm(entry)
            } else {
                this.removeOrderFromPaymentConfirm(entry)
            }
        },
        async confirmOrder(order) {
            if (!this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = `api/order/update/${order.id}`
                await this.$axios.put(api, order).then(response => {
                    this.refreshData()
                    // *** remove from state ****
                    this.removeItemFromConfirmEntrie(order)
                    return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                }).catch(error => {
                    console.log("Error: ", error);
                    return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                })
                this.isloading = false
            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        currencyList() {
            return this.findAllCurrency
        },
        paymentList() {
            return this.findAllPayment
        },
        ...mapGetters(['findAllListOfConfirmPayment', 'findAllListOfConfirmStockIn', 'findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),

    },
};
</script>

<style scoped>
.custom-card {
  border-radius: 20px; /* Adjust the border radius as needed */
  border: 1px solid #ff9800; /* Set your desired border color */
  padding: 10px; /* Adjust padding as needed */
}
</style>