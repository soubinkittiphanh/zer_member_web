
export const state = () => ({
    user: '',
    isAuth:true,
})

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
    }

}

export const getters = {
    isAuthenticated(state) {
        return state.isAuth
    },

    loggedInUser(state) {
        return state.user
    },
    isAuth(state){
        return state.isAuth
    }
    
}

export const actions={
    login(state,payload){
        state.commit("setUser",payload)
        state.commit("setLogin")
    },
    logout(state){
        state.commit("setLogout");
    }
}