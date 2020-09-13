<template>
    <Icon viewBox="50 50" class="spinner-icon" :class="'spinner-icon--' + (theme ? theme : 'dark')">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
    </Icon>
</template>

<script>
    import Icon from "@/components/icons/Icon";

    export default {
        name: "SpinnerIcon",
        components: {
            Icon
        },
        props: {
            theme: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .spinner-icon {
        position: absolute;
        top: 50%;
        left: 0.75rem;
        transform: translateY(-50%);
        pointer-events: none;
        z-index: 2;
        width: 1rem;
        height: 1rem;
        display: inline-flex;
        animation: rotate 2s linear infinite;

        & .path {
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
        }

        &--dark .path {
            stroke: black;
        }

        &--light .path {
            stroke: white;
        }
    }

    @keyframes rotate {
        100% {
            transform: translateY(-50%) rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
</style>
