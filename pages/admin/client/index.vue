
<template>
  <div>
    <v-dialog v-model="dialogCustomer" max-width="1024">
      <CustomerForm :isEdit="!isEdit" :customerId="selectedCustomerId" @close-dialog="handleEvent" @reload-data="loadData" :key="componentKey"/>
    </v-dialog>
    <h1>ລູກຄ້າ</h1>
    <!-- <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>


    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-btn @click="createItem"> ເພີ່ມລູກຄ້າ </v-btn>

          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <!-- <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx /> -->
            <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>

      </v-card-text>


      <v-data-table v-if="customerList" :headers="headers" :search="search" :items="customerList">
        <template v-slot:[`item.function`]="{ item }">

          <v-btn color="blue darken-1" text @click="editItem(item.id)
          wallet = true
            ">

            <i class="fa fa-pencil-square-o"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.telephone`]="{ item }">

          <v-btn color="blue darken-1" text @click="whatsappLink(item)">

            <!-- <i class="fas fa-whatsapp"></i> -->
            {{ item.telephone }}
            <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
          </v-btn>

        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import CustomerForm from '@/components/customer/CustomerForm.vue';

export default {
  components: {
    CustomerForm
  },
  data() {
    return {
      userId: "",
      componentKey:1,
      selectedCustomerId:0,
      dialogCustomer: false,
      customerList: [],
      search: '',
      isEdit:false,
      isloading: false,
      whatsappContactLink: "",
      headers: [
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        { text: 'company', align: 'center', value: 'company' },
        { text: 'email', align: 'center', value: 'email' },
        { text: 'telephone', align: 'center', value: 'telephone' },
        // { text: 'active', align: 'center', value: 'isAtive' },
        {
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'function',
          sortable: false,
        },
      ],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.tel.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    handleEvent() {
      this.dialogCustomer = false;

    },
    editItem(clientId){
      this.componentKey += 1;
      this.selectedCustomerId = clientId;
      this.dialogCustomer = true;
      this.isEdit = false;
    },
    createItem(){
      this.componentKey += 1;
      this.dialogCustomer = true;
      this.isEdit = true;
    },
    async loadData() {
      this.isloading = true
      await this.$axios.get("api/client/find").then(response => {
        this.customerList = []
        for (const iterator of response.data) {
          this.customerList.push(iterator)
        }
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
