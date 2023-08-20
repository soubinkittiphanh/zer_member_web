<template>
    <div>
        <v-dialog v-model="isSubmitting" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card>
            <v-card-title>
                <span class="text-h5">ເພີ່ມສະຕັອກສິນຄ້າ {{ productId }} {{ productName }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="myform" @submit.prevent="submitForm">
                        <v-autocomplete item-text="name" item-value="id" :items="locationList"
                                                label="Source location*"
                                                v-model="srcLocationId"></v-autocomplete>
                        <v-text-field label="ຈຳນວນ" :rules="numberRule" hide-details="auto"
                            v-model="stockQty"></v-text-field>
                        <v-text-field label="ຕົ້ນທຶນທັງຫໝົດ" :rules="numberRule" hide-details="auto"
                            v-model="stockCost"></v-text-field>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('close-dialog')">
                    ປິດ
                </v-btn>
                <v-btn color="blue darken-1" text @click="stockSubmit">
                    ບັນທຶກ
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'
export default {
    props: {
        id: {
            type: Number,
            default: 0,
        },
        productId: {
            type: Number,
            default: '',
        },
        productName: {
            type: String,
            default: '',
        },
        isEdit:{
            type:Boolean,
            default:false,
        },
        cost:{
            type:Number,
            default: 0,
        }

    },
    data() {
        return {
            stockQty: 1,
            stockCost: this.cost,
            isSubmitting: false,
            locationList:[],
            srcLocationId:1
        }
    },
    computed: {
        numberRule() {
            return [
                v => !!v || 'ກະລຸນາ ໃສ່ຈຳນວນ ',
                v => /^[0-9]+$/.test(v) || 'ໃສ່ໄດ້ສະເພາະ ຕົວເລກ',
            ]
        },
        user() {
            return this.$auth.user || ''
        }

    },
    created(){
        this.loadLocation()
    },
    methods: {
        async loadLocation(item) {
            this.isloading = true
            await this.$axios
                .get(`api/location/find`)
                .then((res) => {
                    this.locationList = res.data.map(el => el)
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
                })
            this.isloading = false

        },
        async stockSubmit() {
            if (this.$refs.myform.validate() && !this.isSubmitting) {
                this.isSubmitting = true
                const stockData = {
                    inputter: this.user.id,
                    product_id: this.productId,
                    stocCardkQty: this.stockQty,
                    totalCost: this.stockCost,
                    productId: this.id,
                    srcLocationId: this.srcLocationId
                }
                console.log("Pre fly ",stockData);
                // return
                await this.$axios
                    .post('/api/card/bulkCreate', stockData)
                    .then((res) => {
                        console.log(res.data)
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        // this.fetchData() // UPDATE PRODUCT UI
                        this.$emit('reload')
                        this.$emit('close-dialog')
                    })
                    .catch((error) => {
                        console.log(error)
                        swalError2(this.$swal, "Error", error.response.data)
                    });
                this.isSubmitting = false
            }
        }
    }
}
</script>

<style></style>