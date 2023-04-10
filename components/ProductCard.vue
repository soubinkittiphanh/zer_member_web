<template>
    <v-hover v-slot="{ hover }" open-delay="400" >
        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" @click="productDetail">
            <!-- <v-img :src="'https://nodejsclusters-99563-0.cloudclusters.net/' + productItem.img_path" aspect-
                ratio="2.75"></v-img> -->

            <!-- <router-link :to="`/product/${productItem.id}`"> -->
                <v-img :src="'https://nodejsclusters-99563-0.cloudclusters.net/' + productItem.img_path" alt="" class=""></v-img>
            <!-- </router-link> -->
            <v-card-title class="subtitle-2">{{ productItem.title }}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :value="productItem.sale_count / 2" color="amber" dense half-increments readonly size="14">
                    </v-rating>
                    <div class="grey--text ml-4">
                        {{ 10 * 10 }} % | {{ productItem.pro_name }}
                    </div>
                </v-row>
                <!-- <div class="my-4 subtitle-2">
                    <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                        {{ genreTypeName(genre, index) }}
                    </span>
                </div> -->
            </v-card-text>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    props: ["productItem"],
    data() {
        return {
            show: false,
        }
    },
    methods: {
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        productDetail(){
            // this.$router.push(`/admin/product/${idx.pro_id}`)
            this.$router.push(`/product/${this.productItem.pro_id}`)
            this.$store.dispatch('assignProductDetail', this.productItem)
        }
    }

}
</script>