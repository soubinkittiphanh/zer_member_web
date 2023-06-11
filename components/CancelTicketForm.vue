html
<template>
    <div>
        <v-dialog v-model="isSubmitting" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            ຍົກເລີກບິນ
            <v-form ref="myform" @submit.prevent="submitForm">
                <v-text-field disabled v-model="form.orderId" label="ເລກທີອໍເດີ " required></v-text-field>
                <v-autocomplete item-text="name" item-value="id" :items="cancelList" label="ເລືອກການຍົກເລີກ *"
                    v-model="form.status" ></v-autocomplete>
                <v-text-field v-model="form.reason" label="ເຫດຜົນການຍົກເລີກ"></v-text-field>
                <!-- <v-btn type="submit">Create</v-btn> -->
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="$emit('close-dialog')">
                    ຍົກເລີກ
                </v-btn>
                <v-btn color="primary" text @click="submitForm(true)">
                    ບັນທຶກ
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'
export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            require: false,
        }
    },
    data() {
        return {
            isSubmitting: false,
            form: {
                orderId: this.id,
                status: 2,
                userId: '',
                reason: '',

            },
            cancelList:[
                {
                    id:2,
                    name:'cancel'
                },
                {
                    id:3,
                    name:'return'
                }
            ]
        };
    },
    computed: {
        codeRule() {
            return [
                (v) => !!v || 'ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ ',
                (v) => (v && v.length >= 2) || 'ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ',
            ]
        },
        nameRule() {
            return [
                (v) => !!v || 'ກະລຸນາ ຊື່ ສາຂາ ',
            ]
        },
        numberRule() {
            return [
                v => /^[0-9]*$/.test(v) || !v || 'ໃສ່ໄດ້ສະເພາະ ຕົວເລກ',
            ]
        },
    },
    mounted() {
        this.loadBranch()
    },
    computed: {
        user() {
            return this.$auth.user || ''
        }
    },
    methods: {
        async submitForm() {
            if (this.$refs.myform.validate() && !this.isSubmitting) {
                this.isSubmitting = true
                // Form is valid, submit it
                if (this.isEdit) {
                    await this.$axios.put(`branch/update/${this.id}`, this.form).then(response => {
                        if (response.status == 200) {
                            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                            // Reload data
                            this.refreshData()
                        } else {
                            swalError2(this.$swal, "Error", response.data)
                        }
                    }).catch(error => {
                        swalError2(this.$swal, "Error", error.response.data.errors[0]['msg'])

                    })
                } else {
                    // orderId, status, userId, reason
                    this.form.userId = this.user.id
                    console.log("Form: ",this.form);
                    // return;
                    await this.$axios.put("/api/changeOrderStatus", this.form).then(response => {
                        if (response.status == 200) {
                            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                            // Reload data
                            this.refreshData()
                        } else {
                            swalError2(this.$swal, "Error", response.data)
                        }
                    }).catch(error => {
                        swalError2(this.$swal, "Error", error.response.data.errors[0]['msg'])

                    })
                }

            } else {
                // Form is invalid, do not submit
                return
            }
            this.isSubmitting = false
        },
        async loadBranch() {
            if (this.id && this.isEdit) {
                this.isSubmitting = true
                await this.$axios.get(`branch/find/${this.id}`).then(response => {
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    this.form = response.data
                }).catch(error => {
                    swalError2(this.$swal, "Error", error.response.data.errors[0]['msg'])

                })
                this.isSubmitting = false
            }
        },
        refreshData() {
            this.$emit('refresh')
        }
    },
};
</script>
