<template>
    <div class="changelog">
        <Hero image="/assets/background.png">
            <h1>Changelog</h1>
        </Hero>
        <ul class="changelog__list l-container">
            <Log version="1.0.0" date="December 31st, 2020">
                <ul>
                    <li>Resia has launched.</li>
                </ul>
            </Log>
        </ul>
    </div>
</template>

<script>
    import Hero from "@/components/utility/Hero";
    import Log from "@/components/utility/Log";

    export default {
        name: "Changelog",
        components: {
            Hero,
            Log
        },
        created() {
            document.title = "Changelog | Resia";
        }
    }
</script>

<style lang="stylus">
    .changelog__list {
        width: 30rem;
        margin: 2rem auto;
    }
</style>
