<template>
    <div class="logo">
        <span class="logo__text">Resaic</span>
    </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style lang="stylus">
    .logo {
        display: inline-flex;
        position: relative;
    }

    .logo__text {
        font-size: 2rem;
        font-family: $primary-font;
        letter-spacing: -1.75px;
    }
</style>
