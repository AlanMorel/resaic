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
    import { defineComponent, reactive, toRefs } from "vue";
    import { FormInput } from "@alanmorel/vida";

    import Hero from "@/components/utility/Hero";
    import ProgressButton from "@/components/vida/ProgressButton";

    export default defineComponent({
        name: "ContactUs",
        components: {
            Hero,
            FormInput,
            ProgressButton
        },
        setup() {
            document.title = "Contact Us | Resaic";

            const data = reactive({
                name: "",
                email: "",
                message: "",
                progress: false
            });

            return {
                ...toRefs(data)
            };
        },
        methods: {
            async sendMessage() {
                if (this.progress || !this.name.length || !this.email.length || !this.message.length) {
                    return;
                }

                const payload = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                };

                this.progress = true;

                const response = await axios.post("/api/contact", payload);

                this.progress = false;

                if (response.data.success) {
                    // TODO display success
                    this.name = "";
                    this.email = "";
                    this.message = "";
                } else {
                    // TODO display error
                }
            }
        }
    });
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
