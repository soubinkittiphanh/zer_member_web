<template>
  <div class="text-center">
          <span class="text-h5">Product category </span>
          <!-- <span class="text-h5">Product category {{this.$store.getters.loggedInUser}}</span> -->
    <v-dialog v-model="dialogForm" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Product category {{this.$store.getters.loggedInUser}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="form_data.categ_id"
                disabled
                :rules="rule['cat_id']"
                label="ໄອດີໝວດສິນຄ້າ"
                required
              ></v-text-field>
              <v-text-field
                v-model="form_data.categ_name"
                :rules="rule['cat_name']"
                label="ຊື່ປະເພດສິນຄ້າ"
                required
              ></v-text-field>

              <v-textarea
                outlined
                name="input-7-4"
                counter="5"
                label="ໝາຍເຫດ"
                v-model="form_data.categ_desc"
              ></v-textarea>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn>
          <v-btn color="blue darken-1" text @click="dialogForm = false">
            ປິດ
          </v-btn>
          <v-btn color="blue darken-1" text @click="submitDatas">
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
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຊອກຫາ"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="loadData"
        :headers="headers"
        :items="loadData"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ປະເພດສິນຄ້າ: {{loadData.length}}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="
                dialogForm = true
                isedit = false
              "
            >
              ສ້າງໃຫມ່
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.categ_function`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="
              editItem(item)
              isedit = true
            "
          >
            mdi-pencil
          </v-icon>
        </template>
        <template v-slot:[`item.categ_wallet`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="
              wallet(item)
              isedit = true
            "
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  middleware: 'auths',
  data: () => ({
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
      if (val != null) {
        this.dialog = true
        return
      }
      this.dialog = false
    },
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
      this.isloading = true
      console.log('submitOut')
      if (!this.$refs.form.validate()) {
        this.isloading = false
        return
      }
      console.log('submitIn')
      const submitData = {
        cat_id: this.form_data.categ_id,
        cat_name: this.form_data.categ_name,
        cat_desc: this.form_data.categ_desc,
      }
      const urlpath = '/category_'
      if (this.isedit) {
        await this.$axios
          .put(urlpath + 'e', submitData)
          .then((res) => {
            this.message = res.data
            // this.reset()
          })
          .catch((er) => {
            this.message = 'Error: ' + er
          })
          this.isloading = false
      } else {
        await this.$axios
          .post(urlpath + 'i', submitData)
          .then((res) => {
            this.message = res.data
            // this.reset()
          })
          .catch((er) => {
            this.message = 'Error: ' + er
          })
          this.isloading = false
      }
      this.fetchData()
    },
    async fetchData() {
      this.isloading=true;
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
          console.log('AFTER MAP: ' + this.loadData[0].categ_id)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
        this.isloading=false;
    },
    editItem(val) {
      console.log('SHOULD BE ID: ' + val.categ_function)
      const filtData = this.loadData.find(
        (el) => el.categ_id === val.categ_function
      )
      this.form_data = filtData
      this.dialogForm = true
    },
  },
}
</script>

