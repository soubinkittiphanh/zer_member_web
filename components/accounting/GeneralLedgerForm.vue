<template>
    <v-row justify="center">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                Open Dialog
            </v-btn>
        </template>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>
                <span class="text-h5">ຄ່າໃຊ້ຈ່າຍ {{ today }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ເລກເອກະສານອ້າງອີງ*" required v-model="postingReference"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field type="date" label="ວັນທີ*" v-model="bookingDate"
                                hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="ເນື້ອໃນການຊຳລະ*" required v-model="paymentDescription"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <input type="text" v-model.number="amount" v-comma-thousand></input>
                            <v-text-field v-model="amount" label="ຈຳນວນເງິນ*" required v-comma-thousand></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete item-text="desc" item-value="id" :items="account"
                                label="ບັນຊີແຍກປະເພດ DR ACCOUNT*" v-model="paymentDr.accountNumber"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete item-text="desc" item-value="id" :items="account"
                                label="ບັນຊີແຍກປະເພດ CR ACCOUNT*" v-model="paymentCr.accountNumber"></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="triggerDialog">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="createPayment">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-row>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
    paymentHeadId: {
        type: Number,
        default: '',
    },
    isEdit: {
        type: Boolean,
        default: false,
    },
    directives: {
        commaThousand
    },
    data() {
        return {
            account: [],
            drAccount: "",
            crAccount: "",
            amount: '',
            isloading: false,
            bookingDate: '',
            paymentDescription: '',
            postingReference: '',
            paymentDr: {
                "accountNumber": 5006,
                "bookingDate": "",
                "postingReference": "",
                "debit": 0,
                "credit": 0,
                "description": "Investment",
                // "descriptionLL": "ລົງທຶນ ຊື້ ເຄື່ອງມາຂາຍ ແບ້ 40 ຕຸ້ຍ 30 ໂອບີ 30",
                "source": "GL"
            },
            paymentCr: {
                "accountNumber": 1001,
                "bookingDate": "",
                "postingReference": "",
                "debit": 0,
                "credit": 0,
                "description": "Investment",
                // "descriptionLL": "ລົງທຶນ ຊື້ ເຄື່ອງມາຂາຍ ແບ້ 40 ຕຸ້ຍ 30 ໂອບີ 30",
                "source": "GL"
            },
        }
    },
    mounted() {
        this.loadAccount()
        const today = new Date().toISOString().substr(0, 10);
        this.bookingDate = today
    },
    computed: {
        today() {
            const today = new Date().toLocaleDateString();
            console.log(today);
            return today
        }
    },
    methods: {
        triggerDialog(v) {
            this.$emit('close', v)
        },
        async loadAccount() {
            this.isloading =true;
            const response = await this.$axios.get('/api/financial/chartAccount')
            response.data.forEach(element => {
                console.log("Account number => ", element["accountNumber"]);
                this.account.push({
                    id: element["id"],
                    desc: element["accountName"] + " - " + element["accountNumber"]
                })
            });
            this.isloading =false;
        },
        async createPayment() {
            if (this.isloading) return
            this.isloading = true
            let responseErrorList = null;
            try {
                this.paymentCr.bookingDate = this.bookingDate;
                this.paymentCr.description = this.paymentDescription;
                this.paymentCr.postingReference = this.postingReference
                this.paymentCr.credit = this.amount
                this.paymentDr.bookingDate = this.bookingDate;
                this.paymentDr.description = this.paymentDescription;
                this.paymentDr.postingReference = this.postingReference
                this.paymentDr.debit = this.amount
                const responseDr = await this.$axios.post("/api/financial/create", this.paymentDr)
                if (responseDr.data["accountNumber"]) {
                    console.log("DR Transaction completed");
                    console.log(responseDr.data);
                } else {
                    responseErrorList.push({
                        type: '',
                        msg: 'Can not make dr'
                    })
                }
                const responseCr = await this.$axios.post("/api/financial/create", this.paymentCr)
                if (responseCr.data["accountNumber"]) {
                    console.log("CR Transaction completed");
                    console.log(responseCr.data);
                } else {
                    responseErrorList.push({
                        type: '',
                        msg: 'Can not make dr'
                    })
                }
                if (!responseErrorList) {
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                } else {
                    swalError2(this.$swal, "Error", responseErrorList[0].msg)
                }

            } catch (error) {
                responseErrorList.push({
                    type: '',
                    msg: 'Can not make dr'
                })
                console.log("Something wrong ===>");
                swalError2(this.$swal, "Error", error.response.data.erors[0]['msg']);
            }
            this.isloading = false


        }
    }
}
</script>

<style></style>