
<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-dialog v-model="isloading" hide-overlay persistent width="300">
                    <loading-indicator> </loading-indicator>
                </v-dialog>
                <v-row justify="center">
                    <v-col cols="8" class="text-center">
                        <v-card>
                            <div class="text-center">
                                <v-col cols="12">
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line
                                        hide-detailsx />
                                </v-col>
                            </div>
                            <v-data-table v-if="productList" :headers="headers" :search="search" :items="productList"
                                :items-per-page="pageLine">
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title>ສິນຄ້າທັງຫມົດ: {{ productList.length }}</v-toolbar-title>
                                        <v-divider class="mx-4" inset vertical></v-divider>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                </template>
                                <template v-slot:[`item.function`]="{ item }">
                                    <v-btn rounded fab @click="addProduct(item)">
                                        <v-icon>mdi-cash-register</v-icon>
                                    </v-btn>
                                </template>
                                <template v-slot:[`item.img_path`]="{ item }">
                                    <v-avatar>
                                        <!-- <v-img :src="`${host}${item.img_path}`" alt="John"></v-img> -->
                                        <v-img :src="`${host}/${item.img_path}`" alt="John"></v-img>
                                        <!-- <v-img src="https://cdn.vuetifyjs.com/images/john.jp" alt="John"></v-img> -->
                                    </v-avatar>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-row dense>
                            <v-col v-for="item in productSelectedList" :key="item.pro_id" cols="12">
                                <v-card theme="dark">
                                    <v-card-text class="text-right">
                                        {{ item.pro_name }} X {{ item.qty }} {{ formatNumber(item.qty * item.pro_price) }}
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import { hostName, getFormatNum } from '~/common/index'
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
    layout: "home",
    data() {
        return {
            items: [
                {
                    name: 'Item 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'https://picsum.photos/300/200?random=1'
                },
                {
                    name: 'Item 2',
                    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    image: 'https://picsum.photos/300/200?random=2'
                },
                {
                    name: 'Item 3',
                    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                    image: 'https://picsum.photos300/200?random=3'
                },
                {
                    name: 'Item 4',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
                    image: 'https://picsum.photos/300/?random=4'
                },
                {
                    name: 'Item 5',
                    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
                    image: 'httpspicsum.photos/300/200?random=5'
                },
                {
                    name: 'Item 6',
                    description: 'Mollit anim id est laborum.',
                    image: 'https://picsum.photos/300/200?random=6'
                }
            ],
            productSelectedList: [],
            isloading: false,
            productList: [],
            categoryList: [],
            pageLine: 30,
            search: '',
            headers: [
                {
                    text: '#',
                    align: 'center',
                    value: 'img_path',
                },
                {
                    text: 'ໄອດີ',
                    align: 'center',
                    value: 'pro_id',
                },
                { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
                // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
                // { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
                { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
                // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
                { text: 'Stock', align: 'center', value: 'card_count' },
                // { text: 'cost', align: 'center', value: 'pro_cost_price' },
                {
                    text: 'ຟັງຊັ່ນ',
                    align: 'center',
                    value: 'function',
                    sortable: false,
                },
            ],
        }
    },
    computed: {
        host() {
            return hostName()
        },

    },
    async mounted() {
        await this.fetchData()
    },
    methods: {
        formatNumber(val) {
            return getFormatNum(val)
        },
        addProduct(product) {

            // console.log("===>IS PRODUCT EXIST "+isProductExist);
            if (this.productSelectedList.length == 0) {
                product.qty = 1;
                this.productSelectedList.push(product);
            } else {
                let itemInCart = this.productSelectedList.find(el => el.pro_id === product.pro_id);
                console.log("Is product exist " + itemInCart);
                if (itemInCart !== undefined) {
                    let itemNew = itemInCart;
                    itemNew.qty += 1
                    this.productSelectedList.slice(this.productSelectedList.indexOf(itemInCart), 1, itemNew)
                    console.log("Item already there ", itemNew.qty);
                } else {
                    product.qty = 1;
                    this.productSelectedList.push(product);
                }
            }

        },
        async fetchData() {
            this.isloading = true
            this.productList = []
            await this.$axios
                .get('product_f')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.productList.push(iterator)
                    }
                })
                .catch((er) => {
                    this.message = er
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false
        },
        editItem(item) {
            this.productFormKey += 1
            this.selectedProductId = item.pro_id
            this.editProductForm = true;
        },
        async loadCategory() {
            this.isloading = true;
            await this.$axios
                .get('/category_f')
                .then((res) => {
                    console.log('Data: ' + res.data)
                    for (const iterator of res.data) {
                        this.categoryList.push(iterator);
                    }
                })
                .catch((er) => {
                    // console.log('Data: ' + er)
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async rebuildStock() {
            if (!this.isloading) {
                this.isloading = true
                await this.$axios.post("/api/card/rebuildStock").then(response => {
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    this.fetchData()
                }).catch(error => {
                    swalError2(this.$swal, "Error", error.response.data)
                })
                this.isloading = false
            }
        }
    },
};
</script>
  

  