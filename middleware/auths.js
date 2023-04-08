export default function({store,redirect}){
    // console.log(ctx);
    if (store.getters.loggedInUser) {
        console.log("Welcome");

    } else {

        return redirect("/admin/login");
    }
    console.log("Iam a middleware");
}