<template>
    <div>
        <v-dialog v-model="dialog" max-width="1200">
            <v-card class="pa-4">
                <campaign-form></campaign-form>
            </v-card>
        </v-dialog>
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
                        <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn>
                        <v-btn @click="open"> open </v-btn>
                    </v-col>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-row>
                        <v-col cols="6" lg="6">
                        </v-col>
                        <v-col cols="6" lg="6">
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card-text>
            <v-data-table v-if="campaignList" :headers="headers" :search="search" :items="campaignList">
                <template v-slot:[`item.function`]="{ item }">
                    <v-btn color="blue darken-1" text @click="editItem(item.id)
                    wallet = true
                        ">
                        <i class="fa fa-pencil-square-o"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.tel`]="{ item }">
                    <v-btn color="blue darken-1" text @click="whatsappLink(item)">
                        {{ item.tel }}
                        <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
                    </v-btn>

                </template>
            </v-data-table>

        </v-card>
    </div>
</template>

<script>
import CampaignForm from '~/components/campaign/CampaignForm.vue'
export default {
    components: { CampaignForm },
    data() {
        return {
            campaignList: [],
            headers: [
                {
                    text: 'ຊື່',
                    align: 'center',
                    value: 'name',
                    sortable: true,
                },
                { text: 'ເບີໂທ', align: 'center', value: 'tel' },
                { text: 'Rating', align: 'center', value: 'rating' },
                { text: 'active', align: 'center', value: 'isAtive' },
                {
                    text: 'ລາຍລະອຽດ',
                    align: 'end',
                    value: 'function',
                    sortable: false,
                },
            ],
            isloading:false,
            dialog: false,
            search: '',
            userId: '',
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
            menu1: false,
            menu2: false,

        }
    },
    mounted(){
        this.loadData();
    },
    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
            this.loadData()
        },
        date2(val) {
            this.dateFormatted2 = this.formatDate(this.date2)
            this.loadData()
        },
    },
    methods: {
        open() {
            this.dialog = true;
        }, async loadData() {
            await this.$axios.get("/api/campaign/find").then(response => {
                this.isloading = true
                this.campaignList = response.data.map(el => {
                    return {
                        id: el["id"],
                        name: el["title"],
                        tel: el["start"],
                        rating: el["end"],
                        product: el["product"],
                        budget: el["budget"],
                        isActive: el["isActive"],
                        function: el["id"],
                    }
                })
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        }, formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
    }

}
</script>

<style></style>