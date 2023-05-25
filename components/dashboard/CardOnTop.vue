<template>
    <v-card class="mx-auto" max-width="368" min-height="100" :color="color">

        <!-- <v-card-item title="Florida">
            <template v-slot:subtitle>
                <v-icon icon="mdi-alert" size="18" color="error" class="me-1 pb-1"></v-icon>

                {{ detail }}
            </template>
        </v-card-item> -->

        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h7" cols="6" text-color="white">
                    {{ title }} <!-- 64&deg;F -->
                </v-col>

                <v-col cols="6" class="text-right text-h7" text-color="white">
                    <!-- <v-text-field class="text-field-fit" box outlined dense v-model="value" /> -->
                    {{value}}
                </v-col>
            </v-row>
        </v-card-text>

        <!-- <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
        </div> -->

        <!-- <v-expand-transition>
            <div v-if="expand">
                <div class="py-2">
                    <v-slider v-model="time" :max="6" :step="1" :ticks="labels" class="mx-4" color="primary"
                        density="compact" hide-details show-ticks="always" thumb-size="10"></v-slider>
                </div>

                <v-list class="bg-transparent">
                    <v-list-item v-for="item in forecast" :key="item.day" :title="item.day" :append-icon="item.icon"
                        :subtitle="item.temp">
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition> -->

        <!-- <v-divider></v-divider>

        <v-card-actions>
            <v-btn @click="expand = !expand">
                {{ !expand ? 'Full Report' : 'Hide Report' }}
            </v-btn>
        </v-card-actions> -->
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: 0,
        },
        color: {
            type: String,
            default: "#26c6da"
        }
    },
    data() {
        return {
            expand: false,
        }
    }
}
</script>