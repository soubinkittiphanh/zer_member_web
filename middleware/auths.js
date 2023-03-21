export default function({store,redirect}){
    // console.log(ctx);
    if (store.getters.loggedInUser) {
        console.log("Welcome");

    } else {

        return redirect("/login");
    }
    console.log("Iam a middleware");
}