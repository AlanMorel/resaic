<template>
    <div class="logo">
        <span class="logo__text">Resaic</span>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Logo"
    });
</script>

<style lang="scss">
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
