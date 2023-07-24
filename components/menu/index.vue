<template>
    <div>
        <v-hover v-slot:default="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 16 : 0" outlined @click="takeMeTo">
                <!-- <v-img 
                    :src="imageSvg"  height="80">
                </v-img> -->

                <v-card-text class="text-center">
                    <div>
                        <!-- <v-icon> {{ icon }} </v-icon> -->
                        <!-- <v-avatar color="primary" size="100"> -->
                        <!-- <img :src="~/assets/icons/cashier.svg" height="80"> -->
                        <!-- <img :src="`${icon}`" height="80"> -->
                        <!-- <img :src="imageSvg" height="80"> -->
                        <slot name="iconSlot"></slot>
                        <!-- <MySvgIcon /> -->
                        <!-- <v-icon dark size="50">
                                {{icon}}
                            </v-icon> -->
                        <!-- </v-avatar> -->
                        <!-- <v-btn class="ma-2" color="indigo" :icon="icon"></v-btn> -->
                    </div>
                    <div class="font-weight-meduim primary--text ">
                        <v-chip class="ma-2" style="background-color: transparent; outline: 1px solid gray;" variant="outlined" >
                            {{ title }}
                        </v-chip>
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
  
<script>
// import MySvgIcon from '~/assets/icons/cashier.svg'
export default {
    name: 'menu-card',
    components: {
        // MySvgIcon
    },
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
             imageSvg: require('~/assets/icons/cashier.svg'),
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