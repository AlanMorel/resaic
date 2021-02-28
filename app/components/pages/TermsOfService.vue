<template>
    <div class="terms-of-service">
        <Hero image="/assets/background.png">
            <h1>Terms Of Service</h1>
        </Hero>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Hero from "@/components/utility/Hero";

    export default defineComponent({
        name: "TermsOfService",
        components: {
            Hero
        },
        setup() {
            document.title = "Terms Of Service | Resaic";
        }
    });
</script>
