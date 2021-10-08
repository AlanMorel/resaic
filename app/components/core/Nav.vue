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
                    <router-link to="/settings" class="nav__link">
                        Settings
                    </router-link>
                </li>
                <li class="nav__item">
                    <span class="nav__link" @click="logout">Log out</span>
                </li>
            </template>
            <template v-else>
                <li class="nav__item">
                    <router-link to="/login" class="nav__link">
                        Login
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/signup" class="nav__link">
                        Sign Up
                    </router-link>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
    import axios from "axios";
    import { defineComponent, computed } from "vue";
    import { useStore } from "vuex";

    import Logo from "@/components/core/Logo";

    export default defineComponent({
        name: "Nav",
        components: {
            Logo
        },
        setup() {
            const store = useStore();

            const logout = async () => {
                const response = await axios.post("/api/logout");

                if (response.data.success) {
                    const user = {
                        loggedIn: false
                    };
                    store.dispatch("updateUser", user);
                } else {
                    console.log(response.data.error);
                }
            };

            const user = computed(() => store.state.user);

            return {
                user,
                logout
            };
        }
    });
</script>

<style lang="scss">
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
