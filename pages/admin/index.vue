
<template>
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <h1>Dash board</h1>
        <v-card class="mb-3">
            <v-card-text>
                <v-layout row wrap>
                    <v-row>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[0]" :value="numberFormatter(series[0])"></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[1]" :value="numberFormatter(series[1])"></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[2]" :value="numberFormatter(series[2])"></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[3]" :value="numberFormatter(series[3])"></card-on-top>
                        </v-col>

                    </v-row>
                </v-layout>
            </v-card-text>
        </v-card>
        <v-card class="mb-3">
            <v-card-text>
                <v-layout row wrap>
                    <v-row>
                        <v-col cols="4" sm="6">
                            <apexchart :options="barOptions" :series="barSeries"></apexchart>
                        </v-col>

                        <v-col cols="4" sm="6" v-if="dailyState">
                            <apexchart :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card-text>
        </v-card>
        <campaignCard />

    </div>
</template>
  
<script>
import { getFormatNum } from '~/util/myUtil'
import { generateColorShades } from '~/common'
import CardOnTop from '~/components/dashboard/CardOnTop.vue'
import CampaignCard from '~/components/card/campaignCard.vue'

export default {
    components: { CardOnTop, CampaignCard },
    data() {
        return {
            saleValue: 0,
            isloading: false,
            dailyState:false,
            series: [0, 0],
            options: {
                chart: {
                    type: 'donut',
                }, responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                labels: ['CASH', 'COD'],
                title: {
                    text: 'ອໍເດີ ປະເພດ'
                },

                annotations: {
                    points: [
                    ]
                },
            },
            peeair: {
                series: [],
                options: {
                    colors: ['#FF4560', '#775DD0'],
                },
            },
            barSeries: [],
            barOptions: {
                title: {
                    text: 'ສິນຄ້າຂາຍດີ',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                },
                labels: [
                ],
                chart: {
                    type: 'pie',
                    width: '100%',
                    height: '400px',
                },
            },
            barSeriesForDailyStat: [{
                data: []
            }],
            //ກາບຍອດຂາຍແຕ່ລະມື ເປັນ ຮູບທຽນ
            barOptionsForDailyStat: {
                colors: [],
                chart: {
                    type: 'line',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }, dataLabels: {
                        style: {
                            fontSize: '12px',
                        },
                        formatter: function (val) {
                            return val.toFixed(2);
                        },
                    },
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: [
                    ],
                }, yaxis: {
                    title: {
                        text: 'Sales (in thousands)'
                    }
                },
                title: {
                    text: 'ສະຖິຕິການຂາຍໃນເດືອນ'
                }
            }
        };
    },
    async created() {
        await this.loadDailySaleStatistic()
        this.init();
    }, async mounted() {
        await this.loadTopSale()
        await this.paymentGroup()
    },
    methods: {
        numberFormatter(value) {
            return getFormatNum(value)
        },

        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        async loadTopSale() {
            this.isloading = true
            await this.$axios
                .get('api/topsale/?top=' + 5)
                .then((res) => {
                    console.log("Data ", res.data[0]);
                    res.data.map((el) => {
                        this.barSeries.push(+el.sale_count)
                        this.barOptions.labels.push(el.pro_name + ' ' + getFormatNum(el.total_sale))
                    })

                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        async loadDailySaleStatistic() {
            this.isloading = true
            await this.$axios
                .get('api/dailySaleReport')
                .then((res) => {
                    console.log("Data ", res.data[0]);
                    for (const iterator of res.data) {
                        this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
                        // let shadeColors = generateColorShades("#FFA500")
                        // this.barOptionsForDailyStat.colors = shadeColors // ****** Shade style 
                        this.barSeriesForDailyStat[0].data.push(iterator.total_sale)
                        this.barOptionsForDailyStat.xaxis.categories.push(iterator.txn_date_short)
                    }
                }).catch(err => {
                    console.log('error', err);
                });
                this.dailyState=true
            this.isloading = false
        },
        async paymentGroup() {
            this.isloading = true
            await this.$axios
                .get('api/cod_n_cash_report')
                .then((res) => {
                    this.series = res.data.series;
                    this.options.labels = res.data.labels
                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        init() {
            console.log("Init function");
            const series2 = [66, 33]
            this.peeair.options = {
                title: {
                    text: 'GreenWood',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                },
                labels: [
                    ` COD ${series2[0]} ບິນ `,
                    ` ORDER ${series2[1]} ບິນ`,
                ],
                chart: {
                    type: 'pie',
                    width: '100%',
                    height: '400px',
                },

            }
            this.peeair.series = series2;
        }
    }

}
</script>
  
