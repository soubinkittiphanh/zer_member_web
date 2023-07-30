
<template>
    <div style="background: #EFF2F9" class="ma-0">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <!-- <h1>Dash board</h1> -->
        <div class="mb-1">
            <v-card class="pa-4" style="background-color: transparent;">
                <v-card-title style="font-weight: bold;font-family: Arial, Helvetica, sans-serif;">
                    SHORTCUT
                </v-card-title>
                <v-row>
                    <v-col :cols="12">
                        <div class="row">
                            <div v-for="(item, index) in menus" :key="index"
                                class="col-12 col-md-4 col-sm-6 col-xs-6 text-center">
                                <Menu :title="item.title" :icon="item.icon" :path="item.path">
                                    <template v-slot:iconSlot>
                                        <img :src="item.svgIcon" height="80">
                                    </template>
                                </Menu>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mb-1">
            <v-card class="pa-1" style="background-color: transparent;">
                <v-card-title style="font-weight: bold;font-family: Arial, Helvetica, sans-serif;">
                    OVERVIEW
                </v-card-title>
                <v-row>
                    <v-col :cols="12">
                        <div class="row">
                            <div v-for="(item, index) in menusOverview" :key="index"
                                class="col-12 col-md-4 col-sm-6 col-xs-6">
                                <MenuOverview :title="item.title" :icon="item.icon" :path="item.path" :total="item.total">
                                </MenuOverview>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mb-2 pa-0">
            <!-- <v-card  >
                <v-card-text class="m-0"> -->
            <v-row class="p-0">
                <v-col cols="6">
                    <!-- <card-grouping>
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
                    </card-grouping> -->
                </v-col>
                <v-col cols="3">
                    <!-- <v-card @click="$router.push('/admin/minstock')">

                        <v-card-title>ລາຍການສິນຄ້າ ໃຫ້ໝົດ</v-card-title>
                        <v-card-text>
                            <v-chip v-for="item in minProductList" :key="item.pro_id" class="ma-2" color="red"
                                text-color="white">
                                {{ item.pro_name }} -
                                <span class="mdi mdi-tag-multiple-outline"></span>
                                <v-icon start icon="mdi-label" style="font-weight: bold;"> {{ item.pro_card_count
                                }}</v-icon>



                            </v-chip>
                        </v-card-text>
                    </v-card> -->
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
        <div>
            <v-row>
                <v-col :cols="6">
                    ....
                </v-col>
                <v-col :cols="6">
                    ....
                </v-col>
            </v-row>
        </div>
        <div class="mb-1">
            <v-row>
                <v-col cols="4" md="6" sm="12" xl="6">
                    <v-card>
                        <apexchart :options="pieChartOption" :series="pieChartOption.barSeries"></apexchart>
                    </v-card>
                </v-col>
                <v-col cols="8" md="6" sm="12" xl="6" v-if="dailyState">
                    <v-card>
                        <apexchart :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <MinStockCard />

    </div>
</template>
  
<script>
import { getFormatNum } from '~/util/myUtil'
import { generateColorShades, firstAndLastDateOfCurrentYear, getFirstDayOfMonth, today } from '~/common'
import CardOnTop from '~/components/dashboard/CardOnTop.vue'
import CardGrouping from '~/components/dashboard/CardGrouping.vue'
import CampaignCard from '~/components/card/campaignCard.vue'
import MinStockCard from '~/components/minStockCard'
import MenuOverview from '~/components/menuOverview'

export default {
    components: { CardOnTop, CampaignCard, CardGrouping, MenuOverview, MinStockCard },
    middleware: 'auths',
    data() {
        return {
            // imageSrc: require('@/assets/images/icon/pos-terminal.png'),
            menus: [
                {
                    title: 'POS',
                    // icon: 'mdi-network-pos',
                    svgIcon: require('~/assets/icons/cashier_2.svg'),
                    path: '/pos',
                },
                {
                    title: 'Invoice',
                    // icon: 'mdi-file-document-multiple',
                    svgIcon: require('~/assets/icons/invoice.svg'),
                    path: '/admin/ordersFromPos'
                },
                {
                    title: 'ລູກຫນີ້',
                    // icon: 'mdi-credit-card-refresh-outline',
                    svgIcon: require('~/assets/icons/pay-card.svg'),
                    path: '/admin/ordersFromPosCredit'
                },
                {
                    title: 'Stock',
                    // icon: 'mdi-warehouse',
                    svgIcon: require('~/assets/icons/stock.svg'),
                    path: '/admin/product/productlist'
                },
                {
                    title: 'ລາຍການ ການຂາຍ',
                    // icon: 'mdi-warehouse',
                    svgIcon: require('~/assets/icons/responsive.svg'),
                    path: '/admin/product/ordersFromPos'
                },
                {
                    title: 'Customer',
                    // icon: 'mdi-warehouse',
                    svgIcon: require('~/assets/icons/patient.svg'),
                    path: '/admin/client'
                },
            ],
            yearlySale: [],
            menusOverview: [
                {
                    title: 'ຍອດຂາຍມື້ນິ (KIP)',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },
                {
                    title: 'ຍອດຂາຍເດືອນນີ້ - ' + '( ' + new Date().toDateString().split(" ")[1] + '/' + new Date().toDateString().split(" ")[3] + ' ) KIP',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },
                {
                    title: 'ຍອດຂາຍໝົດປີ - ' + new Date().toDateString().split(" ")[3] + ' KIP',
                    icon: 'mdi-calendar',
                    path: '',
                    total: '0',
                },

            ],
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
                    text: 'ໝວດສິນຄ້າຂາຍດີ',
                    align: 'center',
                    style: {
                        fontSize: '16px',
                    },
                },
                labels: [
                ],

                barSeries: [],
                // theme: {
                //     monochrome: {
                //         enabled: true,
                //         color: '#01532B',
                //     }
                // },
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
        // await this.loadDailySaleStatistic()
        await this.loadSaleStatistic()
        this.generateDailyStatisticSale()
        this.init();
        await this.minStockProduct()
    }, async mounted() {
        await this.loadTopSale()
        await this.paymentGroup()
    },
    computed: {
        totalSaleYTD() {
            const totalPrice = this.yearlySale.reduce((total, item) => {
                // discountTotal+=item.discount
                return total + item.total - item.discount;
            }, 0);
            console.log(`YTD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
        totalSaleMTD() {
            console.log(`====> TD ${today.split('-')[1]}`);
            const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == today.split('-')[1])
            const totalPrice = monthSaleList.reduce((total, item) => {
                // discountTotal+=item.discount
                return total + item.total - item.discount;
            }, 0);
            console.log(`MTD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
        txnSaleMTD() {
            const monthSaleList = this.yearlySale.filter(el => el.bookingDate.split('-')[1] == today.split('-')[1])
            const dailyTransactions = monthSaleList.reduce((acc, transaction) => {
                const date = transaction.bookingDate;
                const index = acc.findIndex((item) => item.date === date);
                if (index === -1) {
                    acc.push({ date, transactions: [transaction], totalSale: transaction.total-transaction.discount });
                } else {
                    acc[index].transactions.push(transaction);
                    acc[index].totalSale += transaction.total-transaction.discount;
                }
                return acc;
            }, []);

            return dailyTransactions;
        },
        totalSaleTD() {
            const todaySaleList = this.yearlySale.filter(el => el.bookingDate == today)
            const totalPrice = todaySaleList.reduce((total, item) => {
                // discountTotal+=item.discount
                return total + item.total - item.discount;
            }, 0);
            console.log(`TD SALE ${totalPrice}`);
            return getFormatNum(totalPrice)
        },
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
        // http://localhost:8080/api/sale/sumsaleYearly?date={"startDate":"2023-01-01","endDate":"2023-12-31"}

        async loadSaleStatistic() {
            const date = firstAndLastDateOfCurrentYear()
            this.isloading = true
            await this.$axios
                .get('api/sale/sumsaleYearly', { params: { date } })
                .then((res) => {
                    this.yearlySale = []
                    for (const iterator of res.data) {
                        this.yearlySale.push(iterator)
                    }
                    this.menusOverview[2]['total'] = this.totalSaleYTD
                    this.menusOverview[1]['total'] = this.totalSaleMTD
                    this.menusOverview[0]['total'] = this.totalSaleTD
                    console.log("Lend of sale yearly " + this.yearlySale.length);
                }).catch(err => {
                    console.log('error', err);
                });
            this.isloading = false
        },
        async generateDailyStatisticSale() {
            this.isloading = true

            //****************** Deprecated (old use for delivery sale model) ***************** */
            // await this.$axios
            //     .get('api/dailySaleReport')
            //     .then((res) => {
            //         console.log("Data ", res.data[0]);
            //         for (const iterator of res.data) {
            //             this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
            //             // this.barOptionsForDailyStat.colors.push('#01532B') // ******* Original
            //             this.barSeriesForDailyStat[0].data.push(iterator.total_sale)
            //             this.barOptionsForDailyStat.xaxis.categories.push(iterator.txn_date_short)
            //         }
            //     }).catch(err => {
            //         console.log('error', err);
            //     });
            //****************** Deprecated  ***************** */

            for (const iterator of this.txnSaleMTD) {
                this.barOptionsForDailyStat.colors.push(this.getRandomColor) // ******* Original
                this.barSeriesForDailyStat[0].data.push(iterator['totalSale'])
                this.barOptionsForDailyStat.xaxis.categories.push(iterator['date'])
            }

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
  
