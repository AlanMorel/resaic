<template>
    <div class="not-found">
        <Hero image="/assets/background.png">
            <h1>404 - Page Not Found</h1>
        </Hero>
        <div class="not-found__content">
            <div class="not-found__message">The page you requested could not be found.</div>
            <router-link to="/" class="not-found__button"> Go Home </router-link>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Hero from "@/components/utility/Hero";

    export default defineComponent({
        name: "NotFound",
        components: {
            Hero
        },
        setup() {
            document.title = "Page Not Found | Resaic";
        }
    });
</script>

<style lang="scss">
    .not-found {
        text-align: center;
    }

    .not-found__message {
        margin-bottom: 1rem;
    }

    .not-found__button {
        padding: 0.5rem 1rem;
        background-color: var(--primary-color);
        border-radius: 0.25rem;
        color: white;
        display: inline-block;
        font-family: $primary-font;
    }
</style>
