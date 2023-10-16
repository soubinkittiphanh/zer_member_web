<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ປະເພດສິນຄ້າ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="znnN7ZLdf3I">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="dialogForm" max-width="600px">
      <v-card>
        <v-card-title>
          <v-chip class="ma-2" color="primary" label text-color="white">
            <v-icon start>mdi-label</v-icon>
            ຈັດການປະເພດສິນຄ້າ
          </v-chip>
          <!-- <span class="text-h5">ຈັດການປະເພດສິນຄ້າ</span> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="form_data.categ_id" disabled :rules="rule['cat_id']" label="ໄອດີໝວດສິນຄ້າ"
                required></v-text-field>
              <v-text-field v-model="form_data.categ_name" :rules="rule['cat_name']" label="ຊື່ປະເພດສິນຄ້າ*"
                required></v-text-field>

              <v-textarea outlined name="input-7-4" counter="100" label="ໝາຍເຫດ"
                v-model="form_data.categ_desc"></v-textarea>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn> -->
          <v-btn color="warning" rounded @click="dialogForm = false">
            ປິດ
          </v-btn>
          <v-btn color="primary" rounded @click="submitDatas">
            ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" width="500" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table v-if="loadData" :headers="headers" :items="loadData" :items-per-page="5" :search="search"
        class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ຈຳນວນ ປະເພດສິນຄ້າທັງຫມົດ: {{ loadData.length }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn class="primary" size="large" variant="outlined" rounded @click="
              dialogForm = true
            isedit = false
              ">
              ສ້າງໃຫມ່
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.categ_function`]="{ item }">
          <!-- <v-icon small class="mr-2" @click="
            editItem(item)
          isedit = true
            ">
            mdi-pencil
          </v-icon>
          <i class="fa fa-pencil-square-o"></i>
 -->

          <v-btn color="primary" text @click="editItem(item)
          wallet = true
            ">
            <i class="fa fa-pencil-square-o"></i>
          </v-btn>
        </template>

      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
  middleware: 'auths',
  data: () => ({
    guidelineDialog: false,
    isloading: false,
    isedit: false,
    singleSelect: false,
    selected: [],
    dialog: false,
    dialogForm: false,
    message: '',
    valid: true,
    search: '',
    rule: {
      cat_id: [(v) => !!v || 'ໄອດິຫມວດ ແມ່ນ ຕ້ອງໃສ່'],
      cat_name: [(v) => !!v || 'ຊຶ້ຫມວດສິນຄ້າ ແມ່ນ ຕ້ອງໃສ່'],
    },
    form_data: {
      categ_id: '1XXXX',
      categ_name: null,
      categ_desc: '',
      createdAt: null,
    },
    headers: [
      {
        text: 'ລະຫັດຫມວດຫມູ່',
        align: 'center',
        sortable: false,
        value: 'categ_id',
      },
      { text: 'ຊື່ຫມວດຫມູ່', align: 'center', value: 'categ_name' },
      { text: 'ຫມາຍເຫດ', align: 'center', value: 'categ_desc' },
      {
        text: 'ຟັງຊັ່ນ',
        align: 'end',
        value: 'categ_function',
        sortable: false,
      },
    ],
    loadData: [],
  }),
  watch: {
    message(val) {
      // llll
      if (val != null) {
        this.dialog = true
        return
      }
      this.dialog = false
    },
    isedit(val) {
      if (!val) {
        this.form_data = {
          categ_id: '1XXXX',
          categ_name: null,
          categ_desc: '',
          createdAt: null,
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      // this.$refs.form.reset()
      this.form_data.categ_name = ''
      this.form_data.categ_desc = ''
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async submitDatas() {
      if (!this.$refs.form.validate() || this.isloading) {
        this.isloading = false
        return
      }
      this.isloading = true
      const urlpath = '/api/category/'
      if (this.isedit) {
        await this.$axios
          .put(urlpath + 'update/' + this.form_data.categ_id, this.form_data)
          .then((res) => {
            this.dialogForm = false
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          })
          .catch((er) => {
            swalError2(this.$swal, "Error", er)
          })
        this.isedit = false;
        this.isloading = false
      } else {
        await this.$axios
          .post(urlpath + 'create', this.form_data)
          .then((res) => {
            // this.message = res.data
            this.dialogForm = false
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            // this.reset()

          })
          .catch((er) => {
            swalError2(this.$swal, "Error", er)
            // this.message = 'Error: ' + er
          })
        this.isloading = false
      }
      this.fetchData()
    },
    async fetchData() {
      this.isloading = true;
      await this.$axios
        .get('/category_f')
        .then((res) => {
          console.log('Data: ' + res.data)
          this.loadData = res.data.map((el) => {
            console.log('EL: ' + el.categ_id)
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
              categ_function: el.categ_id,
            }
          })
        })
        .catch((er) => {
          // console.log('Data: ' + er)
          swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
    },
    editItem(val) {
      console.log('SHOULD BE ID: ' + val.categ_function)
      this.isedit = true;
      const filtData = this.loadData.find(
        (el) => el.categ_id === val.categ_function
      )
      this.form_data = filtData
      this.dialogForm = true
    },
  },
}
</script>

