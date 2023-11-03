
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="clientDialog" scrollable width="auto">
            <!-- <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Open Dialog
                </v-btn>
            </template> -->
            <v-card>
                <v-card-title> ເລືອກລູກຄ້າ</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-radio-group v-model="selectedClient" column>
                        <v-radio v-for="client in clientOption" :key="client.id"
                            :label="client['name'].concat(' - ').concat(client['telephone'])"
                            :value="client['id']"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>

                    <v-btn color="warning" rounded variant="text" @click="clientDialog = false">
                        Close
                    </v-btn>
                    <!-- <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Save
                    </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການອໍເດີ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <v-col cols="3">
                            <v-text-field type="date" label="ວັນທີ*" v-model="form.bookingDate"
                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                        </v-col>
                        <v-col cols="3">

                            <v-text-field v-model="form.name" label="* name" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.note" label="note"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-autocomplete item-text="name" item-value="id" :items="vendorList" label="ຜູ້ສະໜອງສິນຄ້າ"
                                v-model="form.vendorId"></v-autocomplete>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="form.trackingNumber" label="* trackingNumber"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.link" label="* link"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-text-field v-model="form.price" label="* ລາຄາສິນຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-autocomplete @input="currencyChange(true)" item-text="code" item-value="id"
                                :items="currencyList" label="ສະກຸນເງິນ*" v-model="form.currencyId"></v-autocomplete>
                        </v-col>
                        <v-col cols="2">
                            <v-text-field disabled v-model="form.priceRate" label="ອັດຕາແລກປ່ຽນ"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="form.status" :items="status" label="ສະຖານະເຄື່ອງ" required></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-text-field v-model="form.shippingFee" label="* ຄ່າຂົນສົ່ງ"></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <v-autocomplete @input="currencyChange(false)" item-text="code" item-value="id"
                                :items="currencyList" label="ສະກຸນເງິນ*"
                                v-model="form.shippingFeeCurrencyId"></v-autocomplete>
                        </v-col>
                        <v-col cols="2">
                            <v-text-field disabled v-model="form.shippingRate" label="*ອັດຕາແລກປ່ຽນ"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-divider></v-divider>
                        <div class="mx-2">ຂໍ້ມູນລູກຄ້າ</div>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="customerTel" label="* ເບີໂທລູກຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="customerName" label="* ຊື່ລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-checkbox v-model.number="form.isActive" label="Is Active"></v-checkbox>
                </v-form>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
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
        }
    },
    data() {
        return {
            timeoutId: null,
            clientDialog: false,
            lockSuggest: false,
            clientOption: [],
            vendorList: [],
            selectedClient: null,
            form: {
                bookingDate: '',
                currencyId: 1,
                vendorId: 1,
                priceRate: 1,
                shippingFeeCurrencyId: 1,
                shippingRate: 1,
                shippingFee: 0,
                note: '',
                name: '',
                trackingNumber: '',
                link: '',
                price: 0,
                isActive: true,
                status: 'ORDERED',

            },
            customerTel: '',
            customerName: '',
            status: [
                'ORDERED',
                'RECEIVED',
                'INVOICED',
            ],
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 20) || 'Name must be less than 20 characters'
            ],
        };
    },

    watch: {
        customerTel(newVal) {
            this.handleTypingEvent()
        },
        customerName(newValue) {
            if (this.lockSuggest) return
            this.selectedClient = null
        },
        selectedClient(newVal) {
            const newClient = this.findAllClient.find(el => el.id == newVal)
            if (newClient != undefined) {
                this.lockSuggest = true
                this.customerName = newClient['name']
                this.customerTel = newClient['telephone']
                this.clientDialog = false
                this.timeoutId = setTimeout(() => {
                    console.log(`******Reset auto suggest*******`);
                    this.lockSuggest = false
                }, 2000)

            }
        }
    },
    async created() {
        if (this.isCreate) {
            const today = new Date().toISOString().substr(0, 10);
            this.form.bookingDate = today;
            console.log(`******** DEFAULT CURRENCY ${this.currencyList[0]['id']}*******`);
            this.form.currencyId = this.currencyList[0]['id'];
            this.form.shippingFeeCurrencyId = this.currencyList[0]['id'];
        }
        this.loadEntry();
        this.loadVendor();
    },
    methods: {
        async loadVendor() {
            await this.$axios.get("api/vendor/find").then(response => {
                this.isloading = true
                this.vendorList = response.data
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
        currencyChange(isPrice) {
            if (isPrice) {
                const currency = this.currencyList.find(el => el['id'] == this.form.currencyId);
                if (!currency) return
                this.form.priceRate = currency['rate'];
            } else {
                const currency = this.currencyList.find(el => el['id'] == this.form.shippingFeeCurrencyId);
                if (!currency) return
                this.form.shippingRate = currency['rate'];
            }
        },
        clientList(custTel) {
            return this.findAllClient.filter(el => el.telephone.includes(custTel))
        },
        handleTypingEvent: debounce(function () {
            // Do something after the user has finished typing
            console.log('User finished typing! Input value: ' + this.customerTel)
            if (this.lockSuggest) return
            if (this.clientList(this.customerTel) != undefined) {
                this.clientOption = this.clientList(this.customerTel)
                console.log(`*****${this.clientOption.length}*****`);
                if (this.clientOption.length > 0) {
                    this.clientDialog = true
                }
            }
        }, 1000), // Debo
        customerObject() {
            return {
                id: this.selectedClient,
                name: this.customerName,
                telephone: this.customerTel,
            }
        },
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/order/create' : `api/order/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    this.form.client = this.customerObject()
                    this.form.userId = this.user.id
                    this.form.locationId = this.currentTerminal['locationId']
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    this.form.client = this.customerObject()
                    this.form.clientId = this.selectedClient
                    this.form.userId = this.user.id
                    this.form.locationId = this.currentTerminal['locationId']
                    await this.$axios.put(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                }
                this.isloading = false
            }

        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                this.isloading = true
                await this.$axios.get(`api/order/find/${this.recordId}`).then(response => {

                    this.form = response.data
                    // customer mapping 
                    this.customerTel = response.data['client']['telephone']
                    this.selectedClient = response.data['client']['id']
                    this.lockSuggest = true
                    this.customerName = response.data['client']['name']
                    this.timeoutId = setTimeout(() => {
                        console.log(`******Reset auto suggest*******`);
                        this.lockSuggest = false
                        this.isloading = false
                    }, 2000)
                    // customer mapping
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        currentTerminal() {
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        user() {
            return this.$auth.user || ''
        },
        currencyList() {
            return this.findAllCurrency
        },
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),

    },
};
</script>
