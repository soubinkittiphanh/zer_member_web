

<template>
    <div class="text-center">
        <div>
            <v-dialog v-model="dialog" persistent width="1024">
                <ar-receivable :is-edit="isEdit" :receive-header-id="selectedId" @close="triggerDialog" :key="arFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </ar-receivable>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <v-card>
            <v-card-title>
                <v-layout row wrap>
                    <v-col cols="6">
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition"
                            offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date = parseDate(dateFormatted)" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>

                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition"
                            offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date2 = parseDate(dateFormatted2)" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                        <v-btn @click="triggerDialog"> ເພີ່ມລາຍຮັບ </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
                        <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line
                            hide-detailsx />
                        <v-btn @click="loadTxn"> ດຶງລາຍງານ </v-btn>
                    </v-col>
                </v-layout>
            </v-card-title>
            <!-- <v-data-table v-if="orderHeaderList" :headers="headers" :search="search" :items="orderHeaderList"> -->
            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList">
                <template v-slot:[`item.function`]="{ item }">

                    <v-btn color="blue darken-1" text @click="editItem(item)
                    wallet = true
                        ">

                        <i class="fa fa-pencil-square-o"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.totalAmount`]="{ item }">

                    {{ numberWithFormat(item.totalAmount) }}


                </template>

            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import { getFormatNum } from '~/common'
import ArReceivable from '~/components/accounting/ArReceivable.vue'
export default {
    components: { ArReceivable },
    mounted() {
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            isEdit: false,
            dialog: false,
            arFormKey: 1,
            isloading: false,
            menu1: false,
            menu2: false,
            txnList: [],
            selectedId: '',
            headers: [
                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                },
                { text: 'ເລກອ້າງອີງ', align: 'center', value: 'paymentNumber' },
                { text: 'ຍອດລວມ', align: 'center', value: 'totalAmount' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency' },
                { text: 'ອັດຕາແລກປ່ຽນ', align: 'center', value: 'rate' },
                { text: 'ຊຳລະດ້ວຍ', align: 'center', value: 'paymentMethod' },
                { text: 'ເບື້ອງຫນີ້', align: 'center', value: 'drAccount' },
                { text: 'ເບື້ອງມີ', align: 'center', value: 'crAccount' },
                { text: 'ເນື້ອໃນ', align: 'center', value: 'notes' },
                { text: 'ເວລາສ້າງ', align: 'center', value: 'createdAt' },
                {
                    text: 'ແກ້ໄຂ',
                    align: 'end',
                    value: 'function',
                    sortable: false,
                },

            ],
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            dateFormatted: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
            dateFormatted2: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
        }
    },
    methods: {
        triggerDialog() {
            this.arFormKey += 1;
            this.selectedId = null;
            this.isEdit = false;
            this.dialog = true
        },
        numberWithFormat(val) {
            return getFormatNum(val)
        },
        editItem(item) {
            this.selectedId = item.id
            this.isEdit = true;
            this.arFormKey += 1;
            this.dialog = true
        },
        formatDate(date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        async loadTxn() {
            this.isloading = true
            await this.$axios.get("/api/finanicial/ar/header/find").then(response => {
                this.txnList = [];
                for (const iterator of response.data) {
                    iterator['bookingDate'] = iterator['bookingDate'].split('T')[0]
                    this.txnList.push(iterator)
                }
                console.log("====> " + this.txnList[0]);
            }).catch(error => {

            })
            this.isloading = false
        }

    }
}
</script>

<style></style>