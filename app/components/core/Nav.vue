<template>
    <nav class="nav">
        <div class="nav__logo">
            <router-link to="/">
                <Logo />
            </router-link>
        </div>
        <ul class="nav__menu">
            <template v-if="user.loggedIn">
                <li class="nav__item">
                    <span @click="logout" class="nav__link">Log out</span>
                </li>
            </template>
            <template v-else>
                <li class="nav__item">
                    <router-link to="/login" class="nav__link">Login</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/signup" class="nav__link">Sign Up</router-link>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
    import axios from "axios";

    import Logo from "@/components/core/Logo";

    export default {
        name: "Nav",
        components: {
            Logo
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            logout() {
                axios.post("/api/logout").then(response => {
                    if (response.data.success) {
                        const user = {
                            loggedIn: false
                        };
                        this.$store.dispatch("updateUser", user);
                    } else {
                        console.log(response.data.error);
                    }
                }).catch(error => {
                    this.progress = false;
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="stylus">
    .nav {
        padding: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__menu {
        display: flex;
    }

    .nav__item {
        font-family: $primary-font;
    }

    .nav__link {
        border-radius: 0.25rem;
        display: inline-block;
        padding: 0.375rem 1rem;
        margin: 0 0.5rem;
        transition: background-color 0.15s ease;
        cursor: pointer;

        &:hover,
        &:focus {
            background-color: var(--primary-color);
            color: white;
        }

        &:last-of-type {
            margin-right: 0;
        }
    }
</style>
