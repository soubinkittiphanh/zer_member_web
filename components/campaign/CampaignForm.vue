
<template>
    <div>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="showAddRowDialog" max-width="800">
            <v-card>
                <v-card-title>Add New Row</v-card-title>
                <v-card-text>
                    <v-form ref="addRowForm">
                        <v-text-field type="date" label="ວັນທີ*" v-model="newRow.date" required hint="date"></v-text-field>
                        <v-text-field v-model="newRow.reach" label="Reach" required
                            :rules="[rules.required, rules.number]"></v-text-field>
                        <v-text-field v-model="newRow.comments" label="Comments" required
                            :rules="[rules.required, rules.number]"> </v-text-field>
                        <v-text-field v-model="newRow.results" label="Results" required
                            :rules="[rules.required, rules.number]"></v-text-field>
                        <v-text-field v-model="newRow.purchaseQty" label="Purchase Qty"
                            :rules="[rules.required, rules.number]" required></v-text-field>
                        <v-text-field v-model="newRow.costPerCustomer" label="Cost Per Customer"
                            :rules="[rules.required, rules.number]" required></v-text-field>
                        <v-text-field v-model="newRow.budgetSpend" label="Budget Spend"
                            :rules="[rules.required, rules.number]" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="addRow">Add</v-btn>
                    <v-btn color="secondary" @click="showAddRowDialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>

            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="4" md="4">
                            <v-form v-model="valid" @submit.prevent="submitForm">
                                <v-text-field v-model="form.header.title" label="Title" :rules="[rules.required]"
                                    required></v-text-field>
                                <v-text-field v-model="form.header.product" label="Product" :rules="[rules.required]"
                                    required></v-text-field>
                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form v-model="valid" @submit.prevent="submitForm">
                                <v-text-field type="date" label="ວັນທີເລີ່ມ*" v-model="form.header.start"
                                    hint="example of helper text only on focus"></v-text-field>
                                <v-text-field v-model="form.header.budget" label="Budget" type="number"
                                    :rules="[rules.required, rules.number]" required></v-text-field>

                                <!-- <v-btn color="primary" :disabled="!valid" type="submit">Submit</v-btn> -->
                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form @submit.prevent="submit">
                                <v-text-field type="date" label="ວັນທີສິ້ນສຸດ*" v-model="form.header.end"
                                    hint="example of helper text only on focus"></v-text-field>
                                <v-switch v-model="form.header.isActive" label="Active" :true-value="true"
                                    :false-value="false"></v-switch>
                            </v-form>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-btn color="primary" @click="showAddRowDialog = true">Add Row</v-btn>
                    <v-data-table :headers="headers" :items="tableData">
                        <template v-slot:item="{ item }">
                            <tr>
                                <td>
                                    <v-text-field type="date" label="ວັນທີ*" v-model="bookingDate"
                                        hint="example of helper text only on focus"></v-text-field>

                                </td>
                                <td> <v-text-field v-model="form.reach" label="Reach" :rules="reachRules"></v-text-field>
                                </td>
                                <td><v-text-field v-model="form.comments" label="Comments"
                                        :rules="commentsRules"></v-text-field></td>
                                <td> <v-text-field v-model="form.results" label="Results"
                                        :rules="resultsRules"></v-text-field>
                                </td>
                                <td>
                                    <v-text-field v-model="form.purchaseQty" label="Purchase Quantity"
                                        :rules="purchaseQtyRules"></v-text-field>
                                </td>
                                <td>

                                    <v-text-field v-model="form.costPerCustomer" label="Cost Per Customer"
                                        :rules="costPerCustomerRules"></v-text-field>
                                </td>
                                <td>
                                    <v-text-field v-model="form.budgetSpend" label="Budget Spend"
                                        :rules="budgetSpendRules"></v-text-field>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" >
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="submit">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
  
<script>
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
    data() {
        return {
            showAddRowDialog: false,
            dialog: false,
            title: 'ສ້າງ Campaign',
            valid: false,
            isLoading: false,
            form: {
                date: '',
                reach: '',
                comments: '',
                results: '',
                purchaseQty: '',
                costPerCustomer: '',
                budgetSpend: '',
                isActive: true,
                header: {
                    title: "Summer Sale",
                    start: "",
                    end: "",
                    product: "T-shirts",
                    budget: 5000.00,
                    isActive: true
                }
            },
            bookingDate: '',
            rules: {
                required: v => !!v || "This field is required",
                dateAfter: date => v =>
                    date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
                dateAfterToday: v =>
                    new Date(v) >= new Date() || "Date must be after today",
                number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
            },
            headers: [
                { text: "Date", value: "date" },
                { text: "Reach", value: "reach" },
                { text: "Comments", value: "comments" },
                { text: "Results", value: "results" },
                { text: "Purchase Qty", value: "purchaseQty" },
                { text: "Cost Per Customer", value: "costPerCustomer" },
                { text: "Budget Spend", value: "budgetSpend" }
            ],
            tableData: [
                {
                    date: "2021-07-01",
                    reach: "1000",
                    comments: "Lorem ipsum dolor sit amet",
                    results: "Lorem ipsum dolor sit amet",
                    purchaseQty: "",
                    costPerCustomer: "",
                    budgetSpend: ""
                },
                {
                    date: "2021-07-02",
                    reach: "2000",
                    comments: "Lorem ipsum dolor sit amet",
                    results: "Lorem ipsum dolor sit amet",
                    purchaseQty: "",
                    costPerCustomer: "",
                    budgetSpend: ""
                },
                {
                    date: "2021-07-03",
                    reach: "3000",
                    comments: "Lorem ipsum dolor sit amet",
                    results: "Lorem ipsum dolor sit amet",
                    purchaseQty: "",
                    costPerCustomer: "",
                    budgetSpend: ""
                }
            ], newRow: {
                date: "",
                reach: "",
                comments: "",
                results: "",
                purchaseQty: "",
                costPerCustomer: "",
                budgetSpend: ""
            }
        };
    },
    mounted() {
        // this.loadAccount()
        const today = new Date().toISOString().substr(0, 10);
        this.bookingDate = today
    },
    computed: {
        dateRules() {
            return [
                value => !!value || 'Field is required',
                value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'
            ];
        },
        reachRules() {
            return [
                value => !!value || 'Field is required',
                value => Number.isInteger(Number(value)) || 'Value must be an'
            ];
        },
        commentsRules() {
            return [
                value => !!value || 'Field is required',
                value => Number.isInteger(Number(value)) || 'Value must be an integer'
            ];
        },
        resultsRules() {
            return [
                value => !!value || 'Field is required',
                value => Number.isInteger(Number(value)) || 'Value must be an integer'
            ];
        },
        purchaseQtyRules() {
            return [
                value => !!value || 'Field is required',
                value => /^\d+(\.\d{1,2})?$/.test(value) || 'Invalid value'
            ];
        },
        costPerCustomerRules() {
            return [
                value => !!value || 'Field is required',
                value => /^\d+(\.\d{1,2})?$/.test(value) || 'Invalid value'
            ];
        },
        budgetSpendRules() {
            return [
                value => !!value || 'Field is required',
                value => /^\d+(\.\d{1,2})?$/.test(value) || 'Invalid value'
            ];
        }
    },
    methods: {
        open() {
            this.dialog = true;
        },
        close() {
            this.dialog = false;
        },
        submit() {
            // handle form submission here
            if (!this.isLoading) {
                this.isLoading = true;
                this.$axios.post("/api/campaign/create", this.form.header).then(res => {
                    //     swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    // } else {
                    //     swalError2(this.$swal, "Error", responseErrorList[0].msg)
                    if (res.status == 200) {
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    } else {
                        swalError2(this.$swal, "Error", res.data)
                    }
                }).catch(error => {
                    swalError2(this.$swal, "Error", error.response.data.errors[0]['msg'])

                })
                this.isLoading = false;
            }
            this.close();
        }, addRow() {
            if (this.$refs.addRowForm.validate()) {
                this.tableData.push(this.newRow);
                this.newRow = {
                    date: "",
                    reach: "",
                    comments: "",
                    results: "",
                    purchaseQty: "",
                    costPerCustomer: "",
                    budgetSpend: ""
                };
                this.showAddRowDialog = false;
            }
        }
    }
}
</script>
  