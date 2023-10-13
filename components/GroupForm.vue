
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການກຸ່ມຜູ້ໃຊ້ງານ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field :disabled="!isCreate" v-model="form.code" label="* Code" required
                        :rules="nameRules"></v-text-field>
                    <v-text-field v-model="form.name" label="* ຊື່" required :rules="nameRules"></v-text-field>
                    <v-autocomplete item-text="name" item-value="id" :items="authorityList" label="Authority*"
                        v-model="authoritySelected"></v-autocomplete>
                    <v-btn size="large" variant="outlined" @click="addAuthority" class="primary" rounded>
                        <span class="mdi mdi-note-plus-outline"></span>
                        ເພີ່ມ Authority
                    </v-btn>
                    <v-checkbox v-model.number="form.isActive" label="Is Active"></v-checkbox>
                </v-form>
                <div>
                    <v-row justify="center" align="center">
                        <v-divider></v-divider>
                        <div class="mx-2">ສິດທິ ອານຸຍາດໃນການນຳໃຊ້</div>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row no-gutters>
                        <v-chip v-for="authority in form.authorities" :key="authority.id" class="ma-2" color="warning"
                            variant="outlined" @click="removeAuthority(authority)">
                            {{ authority.code }} - {{ authority.name }}
                        </v-chip>
                    </v-row>
                </div>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
export default {
    props: {
        isCreate: {
            type: Boolean,
            require: true,
            default: true,
        },
        recordId: {
            type: Number,
            require: false,
            default: 0,
        }
    },
    data() {
        return {
            form: {
                code: '',
                name: '',
                authorities: [],
                isActive: true
            },
            authorityList: [],
            authoritySelected: 1,
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 100) || 'Name must be less than 20 characters'
            ],
        };
    },
    // mounted() {
    //     this.loadEntry();
    // },
    async created() {
        this.loadEntry();
        this.loadAuthority();
    },
    methods: {
        removeAuthority(terminal) {
            const idx = this.form.authorities.indexOf(terminal)
            this.form.authorities.splice(idx, 1);
        },
        addAuthority() {
            if(!this.authoritySelected) return
            const newAuthority = this.authorityList.find(el => el.id == this.authoritySelected)
            console.log(`Authority ${newAuthority.code}`);
            if (this.form.authorities.length == 0) {
                console.log(`TEHERE IS NO TERMINAL`);
                this.form.authorities.push(newAuthority)
            } else if (this.form.authorities == 'undefined') {
                this.form.authorities.push(newAuthority)
            } else {
                const authority = this.form.authorities.find(el => el.id == this.authoritySelected)
                console.log(`ADD TERMINAL ${authority}`)
                if (!authority) this.form.authorities.push(newAuthority)
            }
            // this.record.terminals.splice(idx, 1);
        },
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/group/create' : `api/group/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    await this.$axios.put(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                }
                this.isloading = false
            }

        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                await this.$axios.get(`api/group/find/${this.recordId}`).then(response => {
                    this.form = response.data
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        async loadAuthority() {
            if (this.isloading) return
            this.isloading = true
            await this.$axios
                .get(`api/authority/find`)
                .then((res) => {
                    // ****** Clear Old Data
                    this.authorityList = res.data
                    this.authoritySelected = this.authorityList[0]['id']
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                    console.log('Error ===>: ' + er)
                })
            this.isloading = false
        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        // Add any necessary computed properties here
    }
};
</script>
