
<template>
    <v-card>
        <v-card-title>
            <v-chip class="ma-2" color="primary" label text-color="white">
                <v-icon start>mdi-label</v-icon>
                ຂໍ້ມູນການຈັດສົ່ງ
            </v-chip>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form @submit.prevent="submit">
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

                <v-btn rounded type="submit" color="primary">POST</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
  
<script>
export default {
    name: 'delivery-form',
    async created() {
        const today = new Date().toISOString().substr(0, 10);
        this.customerForm.txn_date = today;
        await this.loadRider()
        await this.loadGeo()
        await this.loadShipping()
    },
    data() {
        return {
            geographyList: '',
            riderList: [],
            shippingList: [],
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
            this.$emit('post-transaction', this.customerForm)
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
  