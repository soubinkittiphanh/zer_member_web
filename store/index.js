// all sate variable [data]
export const state = () => ({
    user: '',
    isAuth:true,
    productDetail: null
})

// the function to update state variable should be called by setter [actions]
export const mutations = {
    SetClass(state, bodyClass) {
        state.bodyClass = bodyClass
    },
    setUser(state,payload){
        console.log("setUser: "+payload.name);
        state.user={"name":payload.name,"id":payload.id,"phone":payload.phone,"token":payload.token}
    },
    setLogin(state){
        console.log("SET LOGIN");
        state.isAuth=true;
    },
    setLogout(state){
        state.isAuth=false;
        state.user='';
    },
    setProductDetail(state,payload){
        state.productDetail = payload;
    }

}
// action to get sate
export const getters = {
    isAuthenticated(state) {
        return state.isAuth
    },

    loggedInUser(state) {
        return state.user
    },
    isAuth(state){
        return state.isAuth
    },
    findSelectedProductDetail(state){
        return state.productDetail
    }
    
}
// action to set sate
export const actions={
    login(state,payload){
        state.commit("setUser",payload)
        state.commit("setLogin")
    },
    logout(state){
        state.commit("setLogout");
    },
    assignProductDetail(state,payload){
        state.commit("setProductDetail",payload)
    }
}
// this.$store.dispatch('assignProductDetail', payload)       => this to set sate
// this.$store.getters.findSelectedProductDetail         => get data from sate