<template>
    <div class="changelog">
        <Hero image="/assets/background.png">
            <h1>Changelog</h1>
        </Hero>
        <ul class="changelog__list l-container">
            <Log version="1.0.0" date="December 31st, 2020">
                <ul>
                    <li>Resaic has launched.</li>
                </ul>
            </Log>
        </ul>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import Hero from "@/components/utility/Hero";
    import Log from "@/components/utility/Log";

    export default defineComponent({
        name: "Changelog",
        components: {
            Hero,
            Log
        },
        setup() {
            document.title = "Changelog | Resaic";
        }
    });
</script>

<style lang="scss">
    .changelog__list {
        width: 30rem;
        margin: 2rem auto;
    }
</style>
