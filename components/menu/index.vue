<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 0" outlined @click="takeMeTo">
                <!-- <v-img 
                    :src="imageSrc"  height="80">
                </v-img> -->

                <v-card-text class="text-center">


                    <div>
                        <!-- <v-icon> {{ icon }} </v-icon> -->
                        <v-avatar color="primary" size="70">
                            <v-icon dark size="50">
                                {{icon}}
                            </v-icon>
                        </v-avatar>
                        <!-- <v-btn class="ma-2" color="indigo" :icon="icon"></v-btn> -->
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
    data() {
        return {
            imageSrc: require('@/assets/image/pos-terminal.png'),
        };
    },

    methods: {

        takeMeTo() {
            this.$router.push(this.path)
        },
    }
}
</script>
  
<style></style>