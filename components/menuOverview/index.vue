<template>
    <!-- <div> -->
    <!-- <v-hover v-slot:default="{ hover }" open-delay="100">  Bae request to disable hove-->
    <!-- <v-card :elevation="hover ? 16 : 0" outlined @click="takeMeTo"> -->
    <v-card outlined max-height="80">
        <!-- <v-img 
                    :src="imageSrc"  height="80">
                </v-img> -->

        <v-card-text>
            <div>
                <v-row align="center">
                    <v-col cols="3" style="text-align: left;">
                        <v-avatar color="primary" size="50">
                            <v-icon dark size="30">
                                {{ icon }}
                            </v-icon>
                        </v-avatar>
                    </v-col>
                    <v-col class="pt-0" cols="9" style="text-align: right;">
                        <v-row>
                            <v-col cols="12">{{ title }}</v-col>
                            <v-col cols="12" style="font-size: larger ;font-weight: bold;font-family: Arial, Helvetica, sans-serif;"> {{total}} </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- <v-btn class="ma-2" color="indigo" :icon="icon"></v-btn> -->
            </div>
            <!-- <div class="font-weight-meduim primary--text ">
                        {{ title }}
                    </div> -->
        </v-card-text>
    </v-card>
    <!-- </v-hover> -->
    <!-- </div> -->
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
        total: {
            type: String,
            default: '',
        }


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