<template>
    <div class="hero">
        <div class="hero__content l-container">
            <slot />
        </div>
        <div class="hero__image">
            <img :src="image" alt="Resia background" draggable="false" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        props: {
            image: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .hero {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        min-height: 30vh;
    }

    .hero__content {
        position: absolute;
        z-index: 1;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        color: white;
        font-family: $primary-font;
        text-align: center;
    }

    .hero__image {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        width: 100%;
    }
</style>
