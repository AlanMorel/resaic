<template>
    <div class="hero">
        <div class="hero__content l-container">
            <slot />
        </div>
        <div class="hero__image-container">
            <img :src="image" class="hero__image" alt="Resaic background" draggable="false" />
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Hero",
        props: {
            image: {
                type: String,
                required: true
            }
        }
    });
</script>

<style lang="scss">
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
        text-align: center;
    }

    .hero__image-container {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        width: 100%;
    }

    .hero__image {
        width: 100%;
    }
</style>
