
<template>
    <div>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="preview" hide-overlay width="400px">
            <dia-image :i-url="previewSrc" @closeDia="preview = false"> </dia-image>
        </v-dialog>
        <v-card>
            <v-card-title>

                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="formLocal" v-model="validLocal" lazy-validation>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-autocomplete item-text="outlet_name" item-value="outlet_id" :items="outlet" label="ຮ້ານ*"
                                    v-model="formData.outlet"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-autocomplete item-text="categ_name" item-value="categ_id" :items="category"
                                    label="ປະເພດສິນຄ້າ*" v-model="formData.pro_category"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="formData.pro_id" :counter="10" :disabled="!!formData.pro_id"
                                    label="ໄອດີສິນຄ້າ" required></v-text-field>
                            </v-col>



                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="formData.pro_name" :counter="50" :rules="rules.nameRule"
                                    label="ຊື້ສິນຄ້າ*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="formData.pro_price" :counter="10" :rules="rules.priceRule"
                                    label="ລາຄາ*" type="number" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="formData.pro_cost_price" :counter="10" type="number"
                                    :rules="rules.priceRule" label="ຕົ້ນທຶນ*" required></v-text-field>
                            </v-col>


                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="formData.pro_retail_price" :counter="10" type="number"
                                    :rules="rules.priceRule" label="ລາຄາສົ່ງ %" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-file-input :rules="rules.imageRule" ref="filesfield" multiple
                                    accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
                                    prepend-icon="mdi-camera" label="ຮູບພາບຫລາຍພາບ" @change="onFilesChange"></v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-textarea outlined name="input-7-4" counter="100" label="ຄຳອະທິບາຍ" value="abc"
                                    v-model="formData.pro_desc"></v-textarea>
                            </v-col>
                        </v-row>
                        <div>
                            <v-card class="pa-md-6 mx-lg-auto" v-for="(img, idx) in formData.pro_image" :key="idx">
                                <v-row justify="space-around">
                                    <v-list-item-avatar @click.prevent="
                                        previewImg(`${host}/uploads/${img.name}`)
                                        ">
                                        <v-img :src="`${host}/uploads/${img.name}`">
                                        </v-img>
                                    </v-list-item-avatar>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="blue darken-1" @click.prevent="deleteFileFrServ(idx)">
                                        <i class="fas fa-trash-alt"></i>
                                    </v-btn>
                                </v-row>
                            </v-card>
                        </div>
                        <div>
                            <v-list three-line>
                                <template v-for="(item, index) in imagesPreviewURL">
                                    <v-list-item :key="index">
                                        <v-list-item-avatar @click.prevent="previewImg(item.IMG_URL)">
                                            <v-img :src="item.IMG_URL"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.NAME"></v-list-item-title>
                                            <v-list-item-subtitle v-html="item.isvalid">
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="blue darken-1" @click.prevent="deleteFileFrServ(index)">
                                            <i class="fas fa-trash-alt"></i>
                                        </v-btn>
                                    </v-list-item>
                                    <v-divider :key="index + item.NAME"></v-divider>
                                </template>
                            </v-list>
                        </div>
                    </v-form>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="uploadFilesLocal">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
  
<script>
import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import { mysqlDateToDateObject, parseDate } from '~/common'
import ImagePreviewMixin from '../../pages/product/index.vue'
import { hostName } from '../../common/index'
export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
        headerId: {
            type: Number,
            default: null,
        },
    },
    middleware: 'auths',
    mixins: [ImagePreviewMixin],
    computed: {
        host() {
            return hostName()
        }
    },
    mounted() {
        console.log('FORMDATA ID: ' + this.formData.pro_id)
        this.pro_id = this.headerId
        this.formData.pro_id = this.headerId
        console.log('Mounted: ')
        this.fetchProId(this.headerId)
        this.fetchCategory()
        this.fetchOutlet()
    },
    validate(data) {
        // this.formData.pro_id = data.params.id
        console.log('MIXIN ID: ' + data.params.id)
        console.log('PRO DEFUALT ID: ' + this.pro_id)
        return /^\d+$/.test(data.params.id)
    },
    data() {
        return {
            imagesPreviewURL: [],
            files: null,
            IMG_URL: '',
            NAME: '',
            rules: {
                nameRule: [
                    (v) => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ',
                    (v) => (v && v.length <= 150) || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ',
                ],
                priceRule: [
                    // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
                    (v) => +v >= 0 || 'ກະລຸນ ໃສ່ລາຄາ > 0',
                    (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ລາຄາ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
                ],
                costPrice: [
                    // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
                    (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
                ],
                retailRule: [
                    // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
                    (v) => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0',
                    (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
                ],
                imageRule: [
                    (files) => {
                        let fileSize = 0
                        let totalSize = 0
                        if (files) {
                            files.forEach((el) => {
                                fileSize += el.size
                                console.log('Size: ' + el.size)
                            })
                            totalSize = fileSize / files.length
                            console.log('File size: aaa' + files.length + " Each: " + totalSize || 0);
                        } else {
                            console.log('File: ' + files)
                        }

                        console.log('Total: ' + totalSize)
                        return totalSize < 2000000 || "ຂະຫນາດເກີນ"
                    },
                ],
            },
            preview: false,
            previewSrc: null,
            title: 'ແກ້ໄຂສິນຄ້າ ',
            valid: false,
            category: [],
            formData: {
                pro_category: 1001,
                pro_id: null,
                pro_name: '',
                pro_price: 0,
                pro_retail_price: 0,
                pro_desc: '',
                pro_status: false,
                pro_outlet: 1,
                pro_cost_price: 0,
            },
            outlet: [],
            isLoading: false,
            validLocal: true,
            diaMessageTitle: 'ຄຳເຕືອນ',
            diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
            pro_id: null,
            dia_confirm: false,
            tempImgId: null,
            formData: {}
        }
    },
    methods: {
        validateLocal() {
            console.log('VALIDATING...')
            this.$refs.formLocal.validate()
        },
        async fetchCategory() {
            this.isLoading = true
            await this.$axios
                .get('category_f')
                .then((res) => {
                    console.log('=>category' + res.data)
                    this.category = res.data.map((el) => {
                        return {
                            categ_id: el.categ_id,
                            categ_name: el.categ_name,
                            categ_desc: el.categ_desc,
                        }
                    })
                })
                .catch((er) => {
                    console.log('error: ' + er.response.data)
                })
            this.isLoading = false
        },
        async fetchOutlet() {
            this.isLoading = true
            await this.$axios
                .get('outlet')
                .then((res) => {
                    console.log('=>outlet' + res.data)
                    this.outlet = res.data.map((el) => {
                        return {
                            outlet_id: el.id,
                            outlet_name: el.name,
                            outlet_tel: el.tel,
                        }
                    })
                })
                .catch((er) => {
                    console.log('error: ' + er.response.data)
                })
            this.isLoading = false
        },
        previewImg(url) {
            this.previewSrc = url
            this.preview = true
        },
        onFilesChange(payload) {
            const file = payload // in case vuetify file input
            this.files = payload
            if (file) {
                for (let i = 0; i < file.length; i++) {
                    this.imagesPreviewURL.push({
                        IMG_URL: URL.createObjectURL(file[i]),
                        NAME: file[i].name,
                        isvalid: this.sizeValidate(file[i].size),
                    })
                }
                // URL.revokeObjectURL(file) // free memory
            } else {
                this.imagesPreviewURL = null
            }
        },
        deleteFile(idx) {
            this.imagesPreviewURL.splice(idx, 1)
            this.files.splice(idx, 1)
            this.deleteFileFrServ(idx)
        },
        sizeValidate(z) {
            console.log('SIZE' + z);
            const maxSize = 20000000
            if (z > maxSize) {
                return `Max size is ${maxSize / 1000}Kb`
            }
        },
        async fetchProId(id) {
            this.isLoading = true
            console.log('FECT ID:' + id)
            await this.$axios
                .post('/product_f_id', { proid: id })
                .then((res) => {
                    console.log('Product ID ' + res.data)
                    const el = res.data[0]
                    const image =
                        res.data[0].img_name == null
                            ? []
                            : res.data.map((el) => {
                                return {
                                    name: el.img_name,
                                    path: el.img_path,
                                }
                            })
                    this.formData = {
                        pro_category: el.pro_category,
                        pro_id: el.pro_id,
                        pro_name: el.pro_name,
                        pro_price: el.pro_price,
                        pro_desc: el.pro_desc,
                        pro_status: el.pro_status === 1 || false,
                        pro_retail_price: el.retail_cost_percent,
                        pro_cost_price: el.cost_price,
                        outlet: el.outlet,
                        pro_image: image,
                    }
                    console.log('IMAGE COUNT: ' + this.formData.pro_image.length)
                })
                .catch((er) => {
                    console.log('Error: ' + er)
                    this.message = er
                })
            this.isLoading = false
        },

        async deleteFileFrServ(idx) {
            //   v && this.deleteFileFrServ'

            confirmSwal(this.$swal, 'warning', async () => {
                console.log("Delete record function");
                this.isLoading = true
                await this.$axios
                    .post('/unlink_file', {
                        img_name: this.formData.pro_image[idx].name,
                    })
                    .then((res) => {
                        res.data === 'Transaction completed' &&
                            this.formData.pro_image.splice(idx, 1)
                        // this.message = res.data
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        this.message = er.error
                    })
                this.isLoading = false
            })

        },

        async uploadFilesLocal() {
            console.log("===> Upload data");
            if (!this.$refs.formLocal.validate()) {
                return
            }
            this.isLoading = true
            const formData = new FormData()
            formData.append('FORM', JSON.stringify(this.formData))
            if (this.files) {
                this.files.forEach((element) => {
                    formData.append('files', element)
                })
            }

            await this.$axios
                .post('uploadmulti_update', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res) => {
                    this.$emit('close-dialog')
                    this.$emit('refresh')
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    // this.message = res.data
                })
                .catch((er) => {
                    // this.message = er.response.data
                    swalError2(this.$swal, "Error", er.response.data)
                })
            this.isLoading = false
        },
    },
}
</script>
  