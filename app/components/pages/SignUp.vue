<template>
    <CenteredPage class="sign-up">
        <template #prompt>
            <span> Join the fastest growing community of photographers in the world </span>
        </template>
        <template #content>
            <form @submit.prevent="signup">
                <FormInput for-text="username" placeholder="Username">
                    <input
                        v-model="username"
                        type="text"
                        name="username"
                        autocomplete="username"
                        autocorrect="off"
                        placeholder="resaic"
                        required
                        @blur="usernameCheck()"
                    />
                </FormInput>
                <ValidationList v-if="username" :errors="usernameErrors" :successes="usernameSuccesses" />
                <FormInput for-text="email" placeholder="Email">
                    <input
                        v-model="email"
                        type="text"
                        name="email"
                        autocomplete="email"
                        autocorrect="email"
                        placeholder="resaic@resaic.co"
                        required
                    />
                </FormInput>
                <ValidationList v-if="email" :errors="validateEmail(email)" />
                <FormInput for-text="password" placeholder="Password">
                    <IconToggler v-model="showPassword" on="EyeClosed" off="EyeOpened" />
                    <input
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        name="password"
                        autocomplete="password"
                        placeholder="********"
                        required
                    />
                </FormInput>
                <StrengthIndicator :strength="passwordStrength" />
                <ValidationList v-if="password" :errors="validatePassword(password)" />
                <div class="sign-up__legal-agreement">
                    <input v-model="legalAgreement" type="checkbox" />
                    <span>
                        I agree to the Resaic <router-link to="/privacy-policy">Privacy Policy</router-link> and
                        <router-link to="/terms-of-service">Terms of Service</router-link>.
                    </span>
                </div>
                <div v-if="error" class="centered-page__error">
                    {{ error }}
                </div>
                <div class="centered-page__button-container">
                    <ProgressButton text="Sign up" :progress="progress" />
                </div>
            </form>
        </template>
        <template #footer>
            <router-link to="/login"> Already have an account? </router-link>
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
    import { defineComponent, reactive, toRefs } from "vue";
    import { FormInput } from "@alanmorel/vida";
    import { useRouter } from "vue-router";

    import CenteredPage from "@/components/utility/CenteredPage";
    import ProgressButton from "@/components/vida/ProgressButton";
    import IconToggler from "@/components/utility/IconToggler";
    import StrengthIndicator from "@/components/vida/StrengthIndicator";
    import ValidationList from "@/components/vida/ValidationList";

    import useValidation from "@/mixins/validation";

    export default defineComponent({
        name: "SignUp",
        components: {
            CenteredPage,
            ProgressButton,
            IconToggler,
            StrengthIndicator,
            FormInput,
            ValidationList
        },
        setup() {
            document.title = "Sign Up | Resaic";

            const router = useRouter();

            const data = reactive({
                username: "",
                email: "",
                password: "",
                showPassword: false,
                legalAgreement: false,
                error: "",
                usernameAvailability: {},
                progress: false
            });

            const signup = async () => {
                if (!data.legalAgreement) {
                    data.error = "You must agree to our Privacy Policy and Terms of Service.";
                    return;
                }

                if (
                    data.validatePassword(data.password).length ||
                    data.validateUsername(data.username).length ||
                    data.validateEmail(data.email).length ||
                    data.progress
                ) {
                    return;
                }

                data.progress = true;
                data.error = "";

                const payload = {
                    username: data.username,
                    email: data.email,
                    password: data.password
                };

                const response = await axios.post("/api/register", payload);

                data.progress = false;

                if (response.data.success) {
                    router.push({ path: "/login" });
                } else {
                    data.error = response.data.error;
                }
            };

            return {
                ...toRefs(data),
                signup,
                ...useValidation()
            };
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
            async usernameCheck() {
                this.usernameAvailability = {};
                if (!this.username.length) {
                    return;
                }
                if (this.validateUsername(this.username).length) {
                    return;
                }
                const payload = {
                    username: this.username
                };

                const response = await axios.post("/api/check-username", payload);

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
            }
        }
    });
</script>

<style lang="scss">
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
