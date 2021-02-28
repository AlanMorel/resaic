<template>
    <div class="privacy-policy">
        <Hero image="/assets/background.png">
            <h1>Privacy Policy</h1>
        </Hero>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Hero from "@/components/utility/Hero";

    export default defineComponent({
        name: "PrivacyPolicy",
        components: {
            Hero
        },
        setup() {
            document.title = "Privacy Policy | Resaic";
        }
    });
</script>
