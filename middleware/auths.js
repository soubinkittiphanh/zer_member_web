export default function({app,redirect}){
    // console.log(ctx);
    // if (store.getters.loggedInUser) {
    //     console.log("Welcome");

    // } else {

    //     return redirect("/admin/login");
    // }

    if (!app.$auth.loggedIn) {
        return redirect('/member');
      }
    console.log("Iam a middleware");
}