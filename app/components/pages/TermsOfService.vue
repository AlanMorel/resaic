<template>
    <div class="terms-of-service">
        <Hero image="/assets/background.png">
            <h1>Terms Of Service</h1>
        </Hero>
    </div>
</template>

<script>
    import Hero from "@/components/utility/Hero";

    export default {
        name: "TermsOfService",
        components: {
            Hero
        },
        created() {
            document.title = "Terms Of Service | Resaic";
        }
    };
</script>
