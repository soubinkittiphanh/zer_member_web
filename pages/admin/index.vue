
<template>
    <div class="container">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <h1>Dash board</h1>
        <div class="mb-2 pa-0">
            <!-- <v-card  >
                <v-card-text class="m-0"> -->
            <v-row class="p-0">
                <v-col cols="6">
                    <card-grouping>
                        <template v-slot:slot1>
                            <card-on-top :title="options.labels[0]" :value="numberFormatter(series[0])" color="#E6F7FF">
                                <template v-slot:icon>
                                    <v-icon color="#51A5EB">mdi-receipt-text</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot2>
                            <card-on-top :title="options.labels[1]" :value="numberFormatter(series[1])" color="#FEF0ED">
                                <template v-slot:icon>
                                    <v-icon color="#F7C3B8">mdi mdi-truck-cargo-container</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot3>
                            <card-on-top :title="options.labels[2]" :value="numberFormatter(series[2])" color="#E7F1F2">
                                <template v-slot:icon>
                                    <v-icon color="#518F8A">mdi mdi-currency-usd</v-icon>
                                </template>
                            </card-on-top>
                        </template>
                        <template v-slot:slot4>
                            <card-on-top :title="options.labels[3]" :value="numberFormatter(series[3])" color="#FBE8EA">
                                <template v-slot:icon>
                                    <v-icon color="#C37D85">mdi mdi-file-document-refresh</v-icon>
                                </template>

                            </card-on-top>
                        </template>
                    </card-grouping>
                </v-col>
                <v-col cols="3">
                    <v-card>
                        <v-card-title>ສິນຄ້າຂາດສະຕັອກ</v-card-title>
                        <v-card-text>
                            <v-chip v-for="item in minProductList" :key="item.pro_id" class="ma-2" color="red"  text-color="white">
                                {{ item.pro_name }} - 
                                <span class="mdi mdi-tag-multiple-outline"></span>
                                <v-icon start icon="mdi-label" style="font-weight: bold;"> {{ item.pro_card_count }}</v-icon>
                                
                                
                                
                            </v-chip>
                        </v-card-text>
                    </v-card>
                    <!-- <v-card class="mx-auto" max-width="300">
                        <v-list :items="items" item-title="name" item-value="id"></v-list>
                    </v-card> -->
                    <!-- <v-card class="mx-auto" max-width="300">
                        <v-list :items="minProductList" item-title="pro_name" item-value="pro_id"></v-list>
                    </v-card> -->
                </v-col>
                <v-col cols="3">

                </v-col>
            </v-row>
            <!-- </v-card-text>
            </v-card> -->
        </div>
        <div class="mb-1">
            <v-row>
                <v-col cols="4" md="6" sm="12" xl="12">
                    <v-card>
                        <apexchart :options="pieChartOption" :series="pieChartOption.barSeries"></apexchart>
                    </v-card>
                </v-col>
                <v-col cols="8" md="6" sm="12" xl="12" v-if="dailyState">
                    <v-card>
                        <apexchart :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <campaignCard />

    </div>
</template>
  
<script>
import { getFormatNum } from '~/util/myUtil'
import { generateColorShades } from '~/common'
import CardOnTop from '~/components/dashboard/CardOnTop.vue'
import CardGrouping from '~/components/dashboard/CardGrouping.vue'
import CampaignCard from '~/components/card/campaignCard.vue'

export default {
    components: { CardOnTop, CampaignCard, CardGrouping },
    data() {
        return {
            saleValue: 0,
            // minProductList: [{
            //     pro_name:'',
            //     pro_id:1
            // }],
            items: [
                {
                    name: 'Item #1',
                    id: 1,
                },
                {
                    name: 'Item #2',
                    id: 2,
                },
                {
                    name: 'Item #3',
                    id: 3,
                },
            ],
            minProductList: [],
            isloading: false,
            dailyState: false,
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

            pieChartOption: {
                // plotOptions: {
                //     pie: {
                //         customScale: 0.9
                //     }
                // },
                title: {
                    text: 'ສິນຄ້າຂາຍດີ',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                },
                labels: [
                ],

                barSeries: [],
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#01532B',
                    }
                },
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
        await this.minStockProduct()
    }, async mounted() {
        await this.loadTopSale()
        await this.paymentGroup()
    },
    methods: {
        numberFormatter(value) {
            return getFormatNum(value)
        },
        async minStockProduct() {
            this.isloading = true
            await this.$axios
                .get('product_f')
                .then((res) => {
                    this.minProductList = []
                    for (const iterator of res.data) {
                        if (iterator['minStock'] > iterator['card_count']) {
                            this.minProductList.push({
                                pro_id: iterator.pro_id,
                                pro_name: iterator.pro_name,
                                pro_price: iterator.pro_price,
                                pro_desc: iterator.pro_desc,
                                pro_status: iterator.pro_status,
                                pro_category: iterator.pro_category,
                                pro_category_desc: iterator.pro_category + ' - ' + iterator.categ_name,
                                pro_card_count: iterator.card_count,
                                pro_cost_price: iterator.cost_price,
                                pro_outlet: iterator.outlet,
                                pro_outlet_name: iterator.outlet_name,
                                minStock: iterator.minStock,
                                function: iterator.pro_id,
                            })
                        }
                    }
                })
                .catch((er) => {
                    this.message = er
                    console.log('Error: ' + er)
                })
            this.isloading = false
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
                        this.pieChartOption.barSeries.push(+el.sale_count)
                        this.pieChartOption.labels.push(el.categ_name + ' ' + getFormatNum(el.total_sale))
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
                        // this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
                        this.barOptionsForDailyStat.colors.push('#01532B') // ******* Original

                        this.barSeriesForDailyStat[0].data.push(iterator.total_sale)
                        this.barOptionsForDailyStat.xaxis.categories.push(iterator.txn_date_short)
                    }
                }).catch(err => {
                    console.log('error', err);
                });
            this.dailyState = true
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
  
