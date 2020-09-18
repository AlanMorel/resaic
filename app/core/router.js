import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/utility/Main";
import Home from "@/components/pages/Home";
import Login from "@/components/pages/Login";
import SignUp from "@/components/pages/SignUp";
import ContactUs from "@/components/pages/ContactUs";
import TermsOfService from "@/components/pages/TermsOfService";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import Changelog from "@/components/pages/Changelog";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/",
                component: Home
            }, {
                path: "/contact-us",
                component: ContactUs
            }, {
                path: "/terms-of-service",
                component: TermsOfService
            }, {
                path: "/privacy-policy",
                component: PrivacyPolicy
            }, {
                path: "/changelog",
                component: Changelog
            }
        ]
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/signup",
        component: SignUp
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
