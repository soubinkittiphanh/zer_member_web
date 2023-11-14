<template>
    <v-card class="ml-4">
        <v-card-title>{{ this.orderDetail.title }}</v-card-title>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="orderDetail" >

                </v-data-table>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
export default {
    props: {
        orderDetail: {
            type: Array,
        },
        showTotal: {
            type: Boolean,
            default: false,
        },
        gross: {
            type: String,
            default: '0'
        }

    },
    data() {
        return {
            headers: [
                { text: 'ລາຍການ', value: 'name' },
                { text: 'ຈຳນວນ', value: 'value' },
                { text: 'ມູນຄ່າ', value: 'amount' },
                { text: 'ຄ່າຂົນສົ່ງ', value: 'deliveryFee' },
            ],
            headerStyle: {
                backgroundColor: '#2196f3', // change to your desired color
                color: 'white', // change to the text color you want
                fontWeight: 'bold' // change to the font weight you want
            }
        }
    }
}
</script>

<style scoped>

</style>