<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                            <router-link :to="`/product/${product.id}`">
                                <v-img :src="'https://nodejsclusters-99563-0.cloudclusters.net/' + product.img_path" alt=""
                                    class="" />
                            </router-link>
                        </v-card>

                    </v-hover>
                </v-col>
                <v-col cols="12" sm="8">
                    <h1 class="grey--text text-darken-3 mt-5">{{ this.product.pro_name }}</h1>
                    <v-row>
                        <v-col cols="12" sm="2">
                            <v-rating :value="product.sale_count / 2" color="amber" dense half-increments readonly
                                size="14">

                            </v-rating>

                        </v-col>
                        <v-col cols="12" sm="3">
                            <span class="gray--text ml-n7">
                                {{ product.sale_count * 10 }}%
                            </span>
                        </v-col>

                    </v-row>
                    <p class="mt-5 grey--text text--darken-3 subheader">{{ product.pro_name }}</p>
                    <div class="mt-5">
                        <!-- <h2 class="mt-5 grey--text text--darken-3">Featured Cast</h2> -->
                        <div class="">
                            <h3>{{ product.outlet_name }}</h3>
                            <span class="grey--text">{{ getFormatNum(product.pro_price) }}</span>
                        </div>
                    </div>
                    <v-dialog v-model="dialog" persistent max-width="800px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ product.pro_desc }}</span>
                            </v-card-title>
                        </v-card>
                    </v-dialog>
                    <v-btn tile color="error" class="ml-2">
                        <v-icon left>mdi-heart</v-icon>Favorite
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider class="mt-2"></v-divider>
            <!-- <Cast :casts="product.credits.cast"  ss /> -->
            <v-divider class="mt-2"></v-divider>
            <!-- <Images :images="'https://nodejsclusters-99563-0.cloudclusters.net/' +product.pro_image_path" /> -->
        </v-container>


    </div>
</template>
<!-- card_count: el.card_count,
categ_name: el.categ_name,
cost_price: el.cost_price,
id: el.id,
img_name: el.img_name,
img_path: el.img_path,
outlet: el.outlet,
outlet_name: el.outlet_name,
pro_category: el.pro_category,
pro_desc: el.pro_desc,
pro_id: el.pro_id,
pro_image_path: el.pro_image_path,
pro_name: el.pro_name,
pro_price: el.pro_price,
pro_status: el.pro_status,
retail_cost_percent: el.retail_cost_percent,
sale_count: el.sale_count,
stock_count: el.stock_count, -->

<style>
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
}

.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
    
<script>
export default {
    //   middleware: 'auths',
    layout: "products",
    data() {
        return {
            product: '',
            dialog: false,
        }
    },
    mounted() {
        // await this.getData()
        this.product = this.$store.getters.findSelectedProductDetail;
        console.log(this.product);
    },
    computed: {
        dateNow() {
            const sqlDatetimeNow = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
            const fdate = sqlDatetimeNow.substring(0, 11);
            // const tdate=sqlDatetimeNow.substring(0,11);
            return fdate;
        },

    },
    methods: {
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },

    },
}
</script>


