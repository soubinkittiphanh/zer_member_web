<template>
    <div>
        <span>Login out...</span>
    </div>
</template>

<script>
export default {
    mounted(){
        this.logout();
        this.$router.push("/login");
    },
    methods:{
        logout(){
            this.$store.dispatch('logout');
        }
    }
}
</script>