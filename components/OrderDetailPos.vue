<template>
    <div>
        <v-card>

            <v-card-subtitle>
                <span class="text-h5">ລາຍການສິນຄ້າ</span>
            </v-card-subtitle>
            <v-data-table v-if="entry" :headers="headers" :search="search" :items="entry">
                <template v-slot:[`item.function`]="{ item }">

                    <v-btn color="blue darken-1" text @click="editItem(item)
                    wallet = true
                        ">

                        <i class="fas fa-wallet"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.price`]="{ item }">
                    {{ getFormatNum(item.price) }}
                </template>
                <template v-slot:[`item.discount`]="{ item }">
                    {{ getFormatNum(item.discount) }}
                </template>
                <template v-slot:[`item.total`]="{ item }">
                    {{ getFormatNum(item.total) }}
                </template>
            </v-data-table>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="toggleDialog">
                    Close
                </v-btn>
                <!-- <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Save
                </v-btn> -->
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        entry: {
            type: Object,
            default: '',
        },
    },

    methods: {
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        toggleDialog() {
            this.$emit('close-dialog')
        },
    },
    data() {
        return {
            search: '',
            headers: [
                { text: 'ສິນຄ້າ', align: 'center', value: 'product.pro_name' },
                { text: 'ຈຳນວນ', align: 'center', value: 'quantity' },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'price',
                    sortable: true,
                },
                {
                    text: 'ສ່ວນຫລຸດ',
                    align: 'end',
                    value: 'discount',
                    sortable: true,
                },

                {
                    text: 'ລວມ',
                    align: 'end',
                    value: 'total',
                    sortable: false,
                },

            ],
        }
    },

}
</script>

<style></style>