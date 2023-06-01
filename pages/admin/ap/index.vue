<!-- <template>
    <div>
        <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      > 
      <ap-payment @close="triggerDialog">

      </ap-payment>
        </v-dialog>
        <v-btn block class="mt-2" @click="triggerDialog">ສ້າງອິນວອຍ</v-btn>
    </div>
</template> -->
<template>
    <div class="text-center">
        <div>
            <v-dialog v-model="dialog" persistent width="1024">
                <ap-payment @close="triggerDialog">

                </ap-payment>
            </v-dialog>
            <v-btn block class="mt-2" @click="triggerDialog">ສ້າງອິນວອຍ</v-btn>
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

                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
                        <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line
                            hide-detailsx />
                        <v-btn @click="loadTxn"> ດຶງລາຍງານ </v-btn>
                    </v-col>
                </v-layout>
            </v-card-title>
            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList">
                <template v-slot:[`item.function`]="{ item }">

                    <v-btn color="blue darken-1" text @click="editItem(item)
                    wallet = true
                        ">

                        <i class="fas fa-wallet"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.cusTel`]="{ item }">

                    <v-btn color="blue darken-1" text @click="whatsappLink(item)">

                        <!-- <i class="fas fa-whatsapp"></i> -->
                        {{ item.cusTel }}
                        <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
                    </v-btn>

                </template>
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import ApPayment from '~/components/accounting/ApPayment.vue'
export default {
    components: { ApPayment },
    mounted() {
        // this.loadAccount()
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            dialog: false,
            isloading: false,
            menu1: false,
            menu2: false,
            txnList: [],
            headers: [
                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                },
                {
                    text: 'Account',
                    align: 'center',
                    value: 'accountNumber',
                    sortable: true,
                },
                { text: 'ເລກອ້າງອີງ', align: 'center', value: 'postingReference' },
                { text: 'ເບື້ອງຫນີ້', align: 'center', value: 'debit' },
                { text: 'ເບື້ອງມີ', align: 'center', value: 'credit' },
                { text: 'ເນື້ອໃນ', align: 'center', value: 'description' },
                { text: 'ວັນເວລາສ້າງ', align: 'center', value: 'createdAt' },
                {
                    text: 'ກົດຊຳລະ',
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
            this.dialog = !this.dialog
        }, formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        async loadTxn() {
            this.$axios.get("/api/financial/find").then(response => {
                this.txnList = response.data.map(element => {
                    return {
                        id: element["id"],
                        accountNumber: element["accountNumber"],
                        bookingDate: element["bookingDate"].split("T")[0],
                        postingReference: element["postingReference"],
                        debit: element["debit"],
                        credit: element["credit"],
                        description: element["description"],
                        descriptionLL: element["descriptionLL"],
                        currency: element["currency"],
                        rate: element["rate"],
                        source: element["source"],
                        createdAt: element["createdAt"],
                        updateTimestamp: element["updateTimestamp"]
                    }
                })
            }).catch(error => {

            })
        }

    }
}
</script>

<style></style>