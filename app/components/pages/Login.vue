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
                    <input type="text" name="identifier" v-model="identifier" autocorrect="off" placeholder="resia" required>
                </FormInput>
                <FormInput for-text="password" placeholder="Password">
                    <input type="password" name="password" v-model="password" autocomplete="password" placeholder="********" required>
                </FormInput>
                <div class="login__remember-me">
                    <input type="checkbox" v-model="rememberMe" />
                    <span>Remember Me</span>
                </div>
                <div class="centered-page__error" v-if="error">
                    {{ error }}
                </div>
                <div class="centered-page__button-container">
                    <ProgressButton value="Log In" :progress="progress" />
                </div>
            </form>
        </template>
        <template #footer>
            <router-link to="/signup">
                Need an account?
            </router-link>
        </template>
        <template #background>
            <img src="/assets/background.png" alt="background" class="centered-page__background-image" draggable="false" />
        </template>
    </CenteredPage>
</template>

<script>
    import axios from "axios";

    import CenteredPage from "@/components/utility/CenteredPage";
    import ProgressButton from "@/components/utility/ProgressButton";
    import FormInput from "@/components/utility/FormInput";

    export default {
        name: "Login",
        components: {
            CenteredPage,
            ProgressButton,
            FormInput
        },
        data: () => ({
            identifier: "",
            password: "",
            error: "",
            rememberMe: false,
            progress: false
        }),
        created() {
            document.title = "Login | Resia";
        },
        methods: {
            login() {
                this.progress = true;
                this.error = "";

                const data = {
                    identifier: this.identifier,
                    password: this.password,
                    rememberMe: this.rememberMe
                };
                axios.post("/api/login", data).then(response => {
                    this.progress = false;
                    if (response.data.success) {
                        const user = response.data.user;
                        user.loggedIn = true;
                        this.$store.dispatch("updateUser", user);
                        this.$router.push({ path: "/" });
                    } else {
                        this.error = response.data.error;
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
    .login__remember-me {
        display: flex;
        align-items: center;

        input[type="checkbox"] {
            margin-right: 0.75rem;
        }
    }
</style>
