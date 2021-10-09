import Changelog from "@/components/pages/Changelog";
import ContactUs from "@/components/pages/ContactUs";
import Home from "@/components/pages/Home";
import Login from "@/components/pages/Login";
import NotFound from "@/components/pages/NotFound";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import Settings from "@/components/pages/Settings";
import SignUp from "@/components/pages/SignUp";
import TermsOfService from "@/components/pages/TermsOfService";
import Main from "@/components/utility/Main";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/",
                component: Home
            },
            {
                path: "/contact-us",
                component: ContactUs
            },
            {
                path: "/terms-of-service",
                component: TermsOfService
            },
            {
                path: "/privacy-policy",
                component: PrivacyPolicy
            },
            {
                path: "/changelog",
                component: Changelog
            },
            {
                path: "/settings",
                component: Settings
            },
            {
                path: "/not-found",
                component: NotFound
            }
        ]
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/*",
        beforeEnter: (to, from, next) => {
            next({
                path: "/not-found"
            });
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

export default router;
