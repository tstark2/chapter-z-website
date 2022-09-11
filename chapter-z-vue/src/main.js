import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Staff from "./components/pages/Staff";
import Newsletters from "./components/pages/Newsletters";
import Sponsors from "./components/pages/Sponsors";
import Links from "./components/pages/Links";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Home,},
        {path: "/about", component: AboutUs},
        {path: "/staff", component: Staff},
        {path: "/newsletters", component: Newsletters},
        {path: "/sponsors", component: Sponsors},
        {path: "/links", component: Links}
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
