<template>
    <header class="header">
        <Nav class="l-container" />
    </header>
</template>

<script>
    import { defineComponent } from "vue";

    import Nav from "@/components/core/Nav";

    export default defineComponent({
        name: "Header",
        components: {
            Nav
        }
    });
</script>

<style lang="scss">
    .header {
        padding: 0.5rem 0;
    }
</style>
