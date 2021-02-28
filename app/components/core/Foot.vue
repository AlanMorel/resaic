<template>
    <footer class="footer">
        <div class="footer__inner l-container">
            <div class="footer__left">
                <div class="footer__logo">
                    <router-link to="/">
                        <Logo />
                    </router-link>
                </div>
            </div>
            <div class="footer__right">
                <ul class="footer__links">
                    <li v-for="link in footerLinks" class="footer__link" :key="link.link">
                        <router-link :to="'/' + link.link">
                            {{ link.text }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            Copyright © 2020 - 2021 Resaic. All rights reserved.
        </div>
    </footer>
</template>

<script>
    import { defineComponent } from "vue";

    import Logo from "@/components/core/Logo";

    export default defineComponent({
        name: "Foot",
        components: {
            Logo
        },
        setup() {
            return {
                footerLinks: [
                    {
                        text: "Terms of Service",
                        link: "terms-of-service"
                    },
                    {
                        text: "Privacy Policy",
                        link: "privacy-policy"
                    },
                    {
                        text: "Contact Us",
                        link: "contact-us"
                    },
                    {
                        text: "Changelog",
                        link: "changelog"
                    }
                ]
            };
        }
    });
</script>

<style lang="scss">
    .footer {
        background-color: var(--primary-color);
        padding: 1rem 0 0.75rem;

        a {
            color: white;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }

    .footer__inner {
        display: flex;
        justify-content: space-between;
    }

    .footer__link {
        font-family: $primary-font;
        margin-bottom: 0.5rem;
    }

    .footer__copyright {
        color: rgba(255, 255, 255, 0.75);
        text-align: center;
        font-size: 0.75rem;
        font-family: $primary-font;
    }
</style>
