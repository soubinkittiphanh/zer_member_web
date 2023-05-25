<!-- <template>
    <div>
      <v-dialog
        v-model='successDialog'
        max-width='400'
        scrollable
        persistent
      >
        <v-card class='rounded-lg'>
          <div class='laoSanMedium py-7 font-size-18 text-center'>
            ອັບໂຫຼດເອກະສານ ສຳເລັດ
          </div>
          <v-card-text class='my-5'>
            <v-row justify='center' no-gutters>
              <v-col cols='8'>
                <v-img :src='successIcon'/>
              </v-col>
            </v-row>
            <div class='text-center mt-5 px-16'>
              ກະລຸນາພິມສະຕິກເກີໃຫ້ລູກຄ້າໃນຂັ້ນຕອນຕໍ່ໄປ
              ໃນເມນູ ພິມສະຕິກເກີ
            </div>
          </v-card-text>
          <v-divider/>
          <v-card-actions class='py-4'>
            <v-btn
              class='rounded-lg text-spacing laoSanMedium'
              depressed
              x-large
              color='primary'
              width='100%'
              @click='closeSuccessDialog'
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
    export default {
      name: 'SuccessDialog',
      props: {
        openDialog: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        successDialog() {
          return this.openDialog
        }
      },
      data() {
        return {
          successIcon: require('/assets/image/icon/success.svg')
        }
      },
      methods: {
        closeSuccessDialog() {
          this.$emit('closeSuccessDialog')
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
   -->