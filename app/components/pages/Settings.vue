<template>
    <div class="settings">
        <div class="settings__inner">
            <h1 class="settings__header">Settings</h1>
            <form @submit.prevent="updateSettings">
                <FormInput for-text="username" placeholder="Username" :dynamic="false">
                    <input
                        type="text"
                        name="username"
                        v-model="username"
                        autocomplete="username"
                        autocorrect="off"
                        placeholder="resaic"
                        @blur="usernameCheck()"
                        disabled
                    />
                </FormInput>
                <FormInput for-text="email" placeholder="Email" :dynamic="false">
                    <input
                        type="text"
                        name="email"
                        v-model="email"
                        autocomplete="email"
                        autocorrect="email"
                        placeholder="resaic@resaic.co"
                        disabled
                    />
                </FormInput>
                <FormInput for-text="bio" placeholder="Bio" :dynamic="false">
                    <textarea v-model="bio" class="settings__bio" placeholder="I'm an awesome person!"></textarea>
                </FormInput>
                <FormInput for-text="city" placeholder="City" :dynamic="false">
                    <input
                        type="text"
                        name="city"
                        v-model="city"
                        autocomplete="city"
                        autocorrect="city"
                        placeholder="New York"
                    />
                </FormInput>
                <FormInput for-text="country" placeholder="Country" :dynamic="false">
                    <input
                        type="text"
                        name="country"
                        v-model="country"
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
    import { useStore } from "vuex";
    import { FormInput } from "@alanmorel/vida";
    import ProgressButton from "@/components/vida/ProgressButton";

    import validation from "@/mixins/validation";

    export default {
        name: "Settings",
        components: {
            FormInput,
            ProgressButton
        },
        mixins: [validation],
        setup() {
            document.title = "Settings | Resaic";

            const store = useStore();
            const user = store.state.user;

            const username = user.username;
            const email = user.email;
            const bio = user.bio || "";
            const city = user.city || "";
            const country = user.country || "";

            return {
                username,
                email,
                bio,
                city,
                country,
                progress: false
            };
        },
        methods: {
            updateSettings() {
                this.progress = true;

                const data = {
                    bio: this.bio,
                    city: this.city,
                    country: this.country
                };

                axios
                    .put("/api/settings", data)
                    .then(response => {
                        this.progress = false;
                        console.log(response.data);
                    })
                    .catch(error => {
                        this.progress = false;
                        console.log(error);
                    });
            }
        }
    };
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
