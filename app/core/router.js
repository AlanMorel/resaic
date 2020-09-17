import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/utility/Main.vue";
import Home from "@/components/pages/Home.vue";
import Login from "@/components/pages/Login.vue";
import SignUp from "@/components/pages/SignUp.vue";
import ContactUs from "@/components/pages/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home
            }, {
                path: "/contact-us",
                name: "ContactUs",
                component: ContactUs
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        component: Login
    }, {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
