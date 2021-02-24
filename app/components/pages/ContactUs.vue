<template>
    <div class="contact-us">
        <Hero image="/assets/background.png">
            <h1>Contact Us</h1>
        </Hero>
        <div class="contact-us__form l-container">
            <form method="POST" class="contact-us__form" @submit.prevent="sendMessage">
                <FormInput for-text="name" placeholder="Name">
                    <input
                        type="text"
                        v-model="name"
                        name="name"
                        autocomplete="name"
                        class="contact-us__name"
                        placeholder="Name"
                        required
                    />
                </FormInput>
                <FormInput for-text="email" placeholder="Email">
                    <input
                        type="email"
                        v-model="email"
                        name="email"
                        autocomplete="email"
                        class="contact-us__email"
                        placeholder="Email"
                        required
                    />
                </FormInput>
                <FormInput for-text="message" placeholder="Message">
                    <textarea
                        v-model="message"
                        name="message"
                        class="contact-us__message"
                        placeholder="Message"
                        required
                    ></textarea>
                </FormInput>
                <ProgressButton text="Send Message" :progress="progress" />
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    import Hero from "@/components/utility/Hero";
    import { FormInput } from "@alanmorel/vida";
    import ProgressButton from "@/components/utility/ProgressButton";

    export default {
        name: "ContactUs",
        components: {
            Hero,
            FormInput,
            ProgressButton
        },
        data: () => ({
            name: "",
            email: "",
            message: "",
            progress: false
        }),
        created() {
            document.title = "Contact Us | Resaic";
        },
        methods: {
            sendMessage() {
                if (this.progress || !this.name.length || !this.email.length || !this.message.length) {
                    return;
                }

                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                };

                this.progress = true;
                axios
                    .post("/api/contact", data)
                    .then(response => {
                        this.progress = false;
                        if (response.data.success) {
                            // TODO display success
                            this.name = "";
                            this.email = "";
                            this.message = "";
                        } else {
                            // TODO display error
                        }
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
    .contact-us__form {
        max-width: 48rem;
        margin: auto;
        padding: 2rem 0;
    }

    .contact-us__message {
        resize: none;
        height: 10rem;
    }
</style>
