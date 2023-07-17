<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 0" outlined  @click="addProduct(product)">
                <v-img max-width="250" max-height="100"
                    :src="`${host}/uploads/${imagePath}`" :lazy-src="`${host}/uploads/${imagePath}`">
                </v-img>

                <v-card-text class="text-start">
                    <div class="font-weight-meduim primary--text">
                        {{ productName }}
                    </div>
                    <div class="font-weight-meduim primary--text">ລາຄາ: {{ formatNumber(product.pro_price) }}</div>
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
  
<script>
import { mapMutations, mapState,mapGetters,mapActions } from 'vuex'
import { hostName,getFormatNum } from '../../common/index'
export default {
    name: 'product-card-pos', 
    props: {
        imagePath: {
            type: String,
            default: '',
        },
        productName: {
            type: String,
            default: '',
        },
        product: {
            type: Object,
            default: null,
        },

    },
     
    computed: {
        host() {
            return hostName()
        }
    },
    methods:{
        ...mapActions(['addProduct']),
        formatNumber(val){
            return getFormatNum(val)
        }
    }
}
</script>
  
<style></style>