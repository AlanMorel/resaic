<template>
    <header class="header">
        <Nav class="l-container" />
    </header>
</template>

<script>
    import Nav from "@/components/core/Nav";

    export default {
        name: "Header",
        components: {
            Nav
        }
    };
</script>

<style lang="scss">
    .header {
        padding: 0.5rem 0;
    }
</style>
