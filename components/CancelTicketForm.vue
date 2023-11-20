html
<template>
    <div>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            ຍົກເລີກບິນ
            <v-form ref="myform" @submit.prevent="submitForm">
                <v-text-field disabled v-model="id" label="ເລກທີອໍເດີ " ></v-text-field>
                <v-text-field v-model="form.remark" label="ເຫດຜົນການຍົກເລີກ" :rules="nameRules"></v-text-field>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="$emit('close-dialog')">
                    ຍົກເລີກ
                </v-btn>
                <v-btn color="primary" text @click="submitForm">
                    ຢືນຢັນ
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'
export default {
    props: {
        id: {
            type: Number,
            require: false,
        }
    },
    data() {
        return {
            isLoading: false,
            form: {
                isActive: false,
                remark: '',

            },
            nameRules: [
                value => !!value || 'ກະລຸນາ ໃສ່ເຫດຜົນ',
                value => (value.toString().length <= 100) || 'Reason must be less than 100 characters'
            ],
        };
    },
    computed: {
        user() {
            return this.$auth.user || ''
        }
    },
    methods: {
        async submitForm() {
            if (this.$refs.myform.validate() && !this.isLoading) {
                this.isLoading = true
                try {
                    const response = await this.$axios.put(`api/sale/reverse/${this.id}`, this.form)
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    this.refreshData()
                } catch (error) {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + error)
                }
                this.isLoading = false
                
            } else {
                // Form is invalid, do not submit
                return
            }
            this.isLoading = false
        },
        refreshData() {
            this.$emit('refresh')
        }
    },
};
</script>
