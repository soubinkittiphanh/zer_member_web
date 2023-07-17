// all sate variable [data]
export const state = () => ({
    user: '',
    isAuth: true,
    productDetail: null,
    productSearchKeyboard: '',
    cartOfproductSelected: [],
    selectedCategoryId: 9999,
    selectedCustomer: null,
    selectedPayment: 3,
})

// the function to update state variable should be called by setter [actions]
export const mutations = {
    SetClass(state, bodyClass) {
        state.bodyClass = bodyClass
    },
    SetSearchKeyword(state, value) {
        state.productSearchKeyboard = value
    },
    setSelecteCategoryId(state, categoryId) {
        state.selectedCategoryId = categoryId
    },
    setSelectedCustomer(state, customer) {
        state.selectedCustomer = customer
    },
    setSelectedPayment(state, paymentId) {
        state.selectedPayment = paymentId
    },
    addProductToCart(state, product) {
        let found = false;
        state.cartOfproductSelected.forEach(item => {
            if (item.id === product.id) {
                item.qty++;
                found = true;
            }
        });
        if (!found) {
            // state.cart.push({ ...product, qty: 1 });
            state.cartOfproductSelected.push({ ...product, qty: 1 })
        }
    },
    removeProductFromCart(state, product) {
        let found = false;
        state.cartOfproductSelected.forEach(item => {
            if (item.id === product.id) {
                if (!(item.qty == 1)) {
                    item.qty--;
                } else {
                    const index = state.cartOfproductSelected.indexOf(product);
                    if (index !== -1) {
                        state.cartOfproductSelected.splice(index, 1);
                    }
                }
            }
        });
    },
    clearProductFromCart(state, product) {
        const index = state.cartOfproductSelected.indexOf(product);
        state.cartOfproductSelected.splice(index, 1);
    },
    clearAllProductFromCart(state,) {
        state.cartOfproductSelected = [];
    },
    

    setUser(state, payload) {
        console.log("setUser: " + payload.name);
        state.user = { "name": payload.name, "id": payload.id, "phone": payload.phone, "token": payload.token }
    },
    setLogin(state) {
        console.log("SET LOGIN");
        state.isAuth = true;
    },
    setLogout(state) {
        state.isAuth = false;
        state.user = '';
    },
    setProductDetail(state, payload) {
        state.productDetail = payload;
    },


}
// action to get sate
export const getters = {

    isAuth(state) {
        return state.isAuth
    },
    findSelectedProductDetail(state) {
        return state.productDetail
    },
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    },
    searchKeyword(state) {
        return state.productSearchKeyboard
    },
    cartOfProduct(state) {
        return state.cartOfproductSelected
    },
    currenctSelectedCategoryId(state) {
        return state.selectedCategoryId
    },
    currentSelectedCustomer(state) {
        return state.selectedCustomer
    },
    currentSelectedPayment(state) {
        return state.selectedPayment
    }

}
// action to set sate
export const actions = {
    login(state, payload) {
        state.commit("setUser", payload)
        state.commit("setLogin")
    },
    logout(state) {
        state.commit("setLogout");
    },
    clearCart(state) {
        state.commit("clearAllProductFromCart");
    },
    assignProductDetail(state, payload) {
        state.commit("setProductDetail", payload)
    },
    addProduct(state, product) {
        state.commit("addProductToCart", product)
    },
    deleteProduct(state, product) {
        state.commit("removeProductFromCart", product)
    },
    updateSelectedCategoryId(state, categoryId) {
        state.commit("setSelecteCategoryId", categoryId)
    },
    deleteProductFromCart(state, product) {
        state.commit("clearProductFromCart", product)
    },
    addCustomer(state, customer) {
        state.commit("setSelectedCustomer", customer)
    },
    addSelectedPayment(state, paymentId) {
        state.commit("setSelectedPayment", paymentId)
    }
}
// this.$store.dispatch('assignProductDetail', payload)       => this to set sate
// this.$store.getters.findSelectedProductDetail         => get data from sate