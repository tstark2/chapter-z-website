import Vue from "vue";
import App from "./App";
// import MainHeader from "./components/MainHeader";
// import VueRouter from "vue-router";


// Vue.use(VueRouter);

// export const router = new VueRouter({
//     mode: "history",
//     routes: [
//         {path: "/oauth2/callback", component: AuthHandler},
//         {path: "/", component: ImageList},
//         {path: "/upload", component: UploadForm}
//     ]
// });

new Vue({
    render: h => h(App)
}).$mount("#app");