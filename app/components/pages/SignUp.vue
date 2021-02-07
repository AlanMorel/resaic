<template>
    <CenteredPage class="sign-up">
        <template #prompt>
            <span>
                Join the fastest growing community of photographers in the world!
            </span>
        </template>
        <template #content>
            <form @submit.prevent="signup">
                <FormInput for-text="username" placeholder="Username">
                    <input type="text" name="username" v-model="username" autocomplete="username" autocorrect="off" placeholder="resaic" @blur="usernameCheck()" required>
                </FormInput>
                <ValidationList v-if="username" :errors="usernameErrors" :successes="usernameSuccesses" />
                <FormInput for-text="email" placeholder="Email">
                    <input type="text" name="email" v-model="email" autocomplete="email" autocorrect="email" placeholder="resaic@resaic.co" required>
                </FormInput>
                <ValidationList v-if="email" :errors="validateEmail(email)" />
                <FormInput for-text="password" placeholder="Password">
                    <IconToggler v-model="showPassword" on="EyeClosed" off="EyeOpened" />
                    <input :type="showPassword ? 'text' : 'password'" name="password" v-model="password" autocomplete="password" placeholder="********" required>
                </FormInput>
                <StrengthIndicator :strength="passwordStrength" />
                <ValidationList v-if="password" :errors="validatePassword(password)" />
                <div class="sign-up__legal-agreement">
                    <input type="checkbox" v-model="legalAgreement" />
                    <span>
                        I agree to the Resaic <router-link to="/privacy-policy">Privacy Policy</router-link> and <router-link to="/terms-of-service">Terms of Service</router-link>.
                    </span>
                </div>
                <div class="centered-page__error" v-if="error">
                    {{ error }}
                </div>
                <div class="centered-page__button-container">
                    <ProgressButton value="Sign up" :progress="progress" />
                </div>
            </form>
        </template>
        <template #footer>
            <router-link to="/login">
                Already have an account?
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
    import IconToggler from "@/components/utility/IconToggler";
    import StrengthIndicator from "@/components/utility/StrengthIndicator";
    import FormInput from "@/components/utility/FormInput";
    import ValidationList from "@/components/utility/ValidationList";

    import validation from "@/mixins/validation";

    export default {
        name: "SignUp",
        components: {
            CenteredPage,
            ProgressButton,
            IconToggler,
            StrengthIndicator,
            FormInput,
            ValidationList
        },
        mixins: [validation],
        data: () => ({
            username: "",
            email: "",
            password: "",
            showPassword: false,
            legalAgreement: false,
            error: "",
            usernameAvailability: {},
            progress: false
        }),
        created() {
            document.title = "Sign Up | Resaic";
        },
        computed: {
            usernameErrors() {
                const errors = [];

                const validationErrors = this.validateUsername(this.username);
                if (validationErrors.length) {
                    errors.push(...validationErrors);
                }

                if (this.usernameAvailability?.type === "error") {
                    errors.push(this.usernameAvailability.message);
                }

                return errors;
            },
            usernameSuccesses() {
                const successes = [];

                if (this.usernameAvailability?.type === "success") {
                    successes.push(this.usernameAvailability.message);
                }

                return successes;
            },
            passwordStrength() {
                return this.password ? this.validatePassword(this.password).length : -1;
            }
        },
        methods: {
            signup() {
                if (!this.legalAgreement) {
                    this.error = "You must agree to our Privacy Policy and Terms of Service.";
                    return;
                }

                if (this.validatePassword(this.password).length ||
                    this.validateUsername(this.username).length ||
                    this.validateEmail(this.email).length ||
                    this.progress) {
                    return;
                }

                this.progress = true;
                this.error = "";

                const data = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };
                axios.post("/api/register", data).then(response => {
                    this.progress = false;
                    if (response.data.success) {
                        this.$router.push({ path: "/login" });
                    } else {
                        this.error = response.data.error;
                    }
                }).catch(error => {
                    this.progress = false;
                    console.log(error);
                });
            },
            usernameCheck() {
                this.usernameAvailability = {};
                if (!this.username.length) {
                    return;
                }
                if (this.validateUsername(this.username).length) {
                    return;
                }
                const data = {
                    username: this.username
                };
                axios.post("/api/check-username", data).then(response => {
                    if (response.data.success) {
                        this.usernameAvailability = {
                            type: "success",
                            message: "This username is available"
                        };
                    } else {
                        this.usernameAvailability = {
                            type: "error",
                            message: response.data.error
                        };
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="stylus">
    .sign-up__legal-agreement {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 0.95rem;

        input[type="checkbox"] {
            margin-right: 0.75rem;
        }

        a {
            text-decoration: underline;

            &:hover,
            &:focus {
                color: var(--primary-color);
            }
        }
    }
</style>
