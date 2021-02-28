<template>
    <div class="home">
        <Hero image="/assets/background.png">
            <h1>Resaic</h1>
        </Hero>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Hero from "@/components/utility/Hero";

    export default defineComponent({
        name: "Home",
        components: {
            Hero
        }
    });
</script>
