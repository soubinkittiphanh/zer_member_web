
<template>
    <div v-if="isloading">
        <h1>Dash board</h1>
        <v-card class="mb-3">
            <v-card-text>
                <v-layout row wrap>
                    <v-row>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[0]" :value="numberFormatter(series[0])" ></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[1]" :value="numberFormatter(series[1])" ></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[2]" :value="numberFormatter(series[2])" ></card-on-top>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <card-on-top :title="options.labels[3]" :value="numberFormatter(series[3])" ></card-on-top>
                        </v-col>

                    </v-row>
                </v-layout>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-text>
                <v-layout row wrap>
                    <v-row>


                        <v-col cols="4" sm="6">
                            <apexchart :options="barOptions" :series="barSeries"></apexchart>
                        </v-col>

                        <v-col cols="4" sm="6">
                            <apexchart :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
                        </v-col>

                    </v-row>
                </v-layout>
            </v-card-text>
        </v-card>
        <!-- <my-chart :chart-data="chartData" :chart-options="chartOptions"></my-chart> -->
    </div>
</template>
  
<script>
// import MyChart from '~/components/MyChart.vue';
import { getFormatNum } from '~/util/myUtil'
import CardOnTop from '~/components/dashboard/CardOnTop.vue'
export default {
    components: { CardOnTop },
    data() {
        return {
            saleValue:0,
            isloading: false,
            series: [0,0],
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
                labels: ['CASH','COD'],
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
    computed: {

    },
    async created() {
        console.log("Created");
        this.init();
    }, async mounted() {

        await this.loadDailySaleStatistic()
        await this.loadTopSale()
        await this.paymentGroup()
        console.log("Mounted");
    },
    methods: {
        numberFormatter(value){
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
            this.isloading = false
            await this.$axios
                .get('api/topsale/?top=' + 10)
                .then((res) => {
                    console.log("Data ", res.data[0]);
                    res.data.map((el) => {
                        this.barSeries.push(+el.sale_count)
                        this.barOptions.labels.push(el.pro_name + ' ' + getFormatNum(el.total_sale))
                    })

                }).catch(err => {
                    this.isloading = true
                    console.log('error', err);
                });
        },
        async loadDailySaleStatistic() {
            this.isloading = false
            await this.$axios
                .get('api/dailySaleReport')
                .then((res) => {
                    console.log("Data ", res.data[0]);
                    for (let index = 0; index < res.data.length; index++) {
                        const element = res.data[index];
                        console.log("Color: ", this.getRandomColor);
                        this.barOptionsForDailyStat.colors.push(this.getRandomColor)
                    }
                    res.data.map((el) => {
                        console.log("EL count ", el.sale_count);
                        this.barSeriesForDailyStat[0].data.push(el.total_sale)
                        this.barOptionsForDailyStat.xaxis.categories.push(el.txn_date_short)
                        // this.barOptionsForDailyStat.yaxis.title.text('Sales (in thousands)')
                        //                         yaxis: {
                        //     title: {
                        //       text: 'Sales (in thousands)'
                        //     }
                        //   },
                    })
                    // this.isloading = true
                }).catch(err => {
                    this.isloading = true
                    console.log('error', err);
                });
        },
        async paymentGroup() {
            this.isloading = false
            await this.$axios
                .get('api/cod_n_cash_report')
                .then((res) => {
                    this.series =res.data.series;
                    this.options.labels=res.data.labels
                    // res.data.map((el) => {
                    //     if(!el.payment_status && el.payment_code.includes('COD')){
                    //         this.series[1] ++
                    //         this.series[0] ++
                    //     } else {
                    //         this.series[0] ++
                    //     }
                    //     this.saleValue+=el.cart_total
                    // })
                    this.isloading = true
                }).catch(err => {
                    this.isloading = true
                    console.log('error', err);
                });
        },
        init() {
            console.log("Init function");
            // this.series = [100, 55, 99, 948, 5, 7, 9, 4, 7, 99];
            // this.options = {
            //     title: {
            //         text: 'PeeAir 4',
            //         align: 'center',
            //         style: {
            //             fontSize: '16px',
            //         },
            //     },

            //     chart: {
            //         height: 350,
            //         type: 'line',
            //     },
            //     stroke: {
            //         width: [0, 4]
            //     }, title: {
            //         text: 'Traffic Sources'
            //     }, dataLabels: {
            //         enabled: true,
            //         enabledOnSeries: [1]
            //     },
            //     labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            //     xaxis: {
            //         type: 'datetime'
            //     },
            //     yaxis: [{
            //         title: {
            //             text: 'Website Blog',
            //         },

            //     }, {
            //         opposite: true,
            //         title: {
            //             text: 'Social Media'
            //         }
            //     }]

            // }
            const series2 = [66, 33,]
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
  
<!-- <style scoped>
.myclass {
    font-family: 'noto sans lao';
}
</style> -->