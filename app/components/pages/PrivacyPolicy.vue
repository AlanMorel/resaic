<template>
    <div class="privacy-policy">
        <Hero image="/assets/background.png">
            <h1>Privacy Policy</h1>
        </Hero>
    </div>
</template>

<script>
    import Hero from "@/components/utility/Hero";

    export default {
        name: "PrivacyPolicy",
        components: {
            Hero
        },
        created() {
            document.title = "Privacy Policy | Resia";
        }
    };
</script>
