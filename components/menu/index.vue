<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100" >
            <v-card :elevation="hover ? 16 : 0" outlined  @click="takeMeTo">
                <!-- <v-img max-width="250" max-height="100"
                    :src="`${host}/uploads/${imagePath}`" :lazy-src="`${host}/uploads/${imagePath}`">
                </v-img> -->

                <v-card-text class="text-center">
                    <div>
                        <v-icon> {{ icon }} </v-icon>
                    </div>
                    <div class="font-weight-meduim primary--text ">
                        {{ title }}
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
  
<script>

export default {
    name: 'menu-card', 
    props: {

        title: {
            type: String,
            default: '',
        },
        path: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },

    },
     
    methods:{
        takeMeTo(){
            this.$router.push(this.path)
        },
    }
}
</script>
  
<style></style>