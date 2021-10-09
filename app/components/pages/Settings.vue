<template>
    <div class="settings">
        <div class="settings__inner">
            <h1 class="settings__header">Settings</h1>
            <form @submit.prevent="updateSettings">
                <FormInput for-text="username" placeholder="Username" :dynamic="false">
                    <input
                        v-model="username"
                        type="text"
                        name="username"
                        autocomplete="username"
                        autocorrect="off"
                        placeholder="resaic"
                        disabled
                        @blur="usernameCheck()"
                    />
                </FormInput>
                <FormInput for-text="email" placeholder="Email" :dynamic="false">
                    <input
                        v-model="email"
                        type="text"
                        name="email"
                        autocomplete="email"
                        autocorrect="email"
                        placeholder="resaic@resaic.co"
                        disabled
                    />
                </FormInput>
                <FormInput for-text="bio" placeholder="Bio" :dynamic="false">
                    <textarea v-model="bio" class="settings__bio" placeholder="I'm an awesome person!" />
                </FormInput>
                <FormInput for-text="city" placeholder="City" :dynamic="false">
                    <input
                        v-model="city"
                        type="text"
                        name="city"
                        autocomplete="city"
                        autocorrect="city"
                        placeholder="New York"
                    />
                </FormInput>
                <FormInput for-text="country" placeholder="Country" :dynamic="false">
                    <input
                        v-model="country"
                        type="text"
                        name="country"
                        autocomplete="country"
                        autocorrect="country"
                        placeholder="United States"
                    />
                </FormInput>
                <div class="settings__button-container">
                    <ProgressButton text="Update" :progress="progress" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { defineComponent, reactive, toRefs } from "vue";
    import { useStore } from "vuex";
    import { FormInput } from "@alanmorel/vida";

    import ProgressButton from "@/components/vida/ProgressButton";

    import useValidation from "@/mixins/validation";

    export default defineComponent({
        name: "Settings",
        components: {
            FormInput,
            ProgressButton
        },
        setup() {
            document.title = "Settings | Resaic";

            const store = useStore();
            const user = store.state.user;

            const username = user.username;
            const email = user.email;
            const bio = user.bio || "";
            const city = user.city || "";
            const country = user.country || "";

            const data = reactive({
                username,
                email,
                bio,
                city,
                country,
                progress: false
            });

            return {
                ...toRefs(data),
                ...useValidation()
            };
        },
        methods: {
            async updateSettings() {
                this.progress = true;

                const payload = {
                    bio: this.bio,
                    city: this.city,
                    country: this.country
                };

                const response = await axios.put("/api/settings", payload);

                this.progress = false;

                console.log(response.data);
            }
        }
    });
</script>

<style lang="scss">
    .settings {
        .form-input--static {
            label {
                font-size: 1.25rem;
                font-family: $primary-font;
            }
        }
    }

    .settings__header {
        margin-bottom: 1rem;
    }

    .settings__inner {
        max-width: 40rem;
        margin: auto;
        padding: 2rem;
    }

    .settings__bio {
        resize: none;
        height: 10rem;
    }

    .settings__button-container {
        text-align: right;
    }
</style>
