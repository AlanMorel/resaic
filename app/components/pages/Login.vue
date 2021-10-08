<template>
    <CenteredPage class="login">
        <template #prompt>
            <span>
                Login to your account
            </span>
        </template>
        <template #content>
            <form @submit.prevent="login">
                <FormInput for-text="identifier" placeholder="Username or Email">
                    <input
                        v-model="identifier"
                        type="text"
                        name="identifier"
                        autocorrect="off"
                        placeholder="resaic"
                        required
                    />
                </FormInput>
                <FormInput for-text="password" placeholder="Password">
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        autocomplete="password"
                        placeholder="********"
                        required
                    />
                </FormInput>
                <div class="login__remember-me">
                    <input v-model="rememberMe" type="checkbox" />
                    <span>Remember Me</span>
                </div>
                <div v-if="error" class="centered-page__error">
                    {{ error }}
                </div>
                <div class="centered-page__button-container">
                    <ProgressButton text="Log In" :progress="progress" />
                </div>
            </form>
        </template>
        <template #footer>
            <router-link to="/signup">
                Need an account?
            </router-link>
        </template>
        <template #background>
            <img
                src="/assets/background.png"
                alt="background"
                class="centered-page__background-image"
                draggable="false"
            />
        </template>
    </CenteredPage>
</template>

<script>
    import axios from "axios";
    import { FormInput } from "@alanmorel/vida";
    import { defineComponent, reactive, toRefs } from "vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";

    import CenteredPage from "@/components/utility/CenteredPage";
    import ProgressButton from "@/components/vida/ProgressButton";

    export default defineComponent({
        name: "Login",
        components: {
            CenteredPage,
            ProgressButton,
            FormInput
        },
        setup() {
            document.title = "Login | Resaic";
            const store = useStore();
            const router = useRouter();

            const data = reactive({
                identifier: "",
                password: "",
                error: "",
                rememberMe: false,
                progress: false
            });

            const login = async () => {
                data.progress = true;
                data.error = "";

                const payload = {
                    identifier: data.identifier,
                    password: data.password,
                    rememberMe: data.rememberMe
                };

                const response = await axios.post("/api/login", payload);

                data.progress = false;

                if (response.data.success) {
                    const user = response.data.user;
                    user.loggedIn = true;
                    store.dispatch("updateUser", user);
                    router.push({ path: "/" });
                } else {
                    data.error = response.data.error;
                }
            };

            return {
                ...toRefs(data),
                login
            };
        }
    });
</script>

<style lang="scss">
    .login__remember-me {
        display: flex;
        align-items: center;

        input[type="checkbox"] {
            width: auto;
            margin-right: 0.75rem;
            width: 1.125rem;
            height: 1.125rem;
        }
    }
</style>
