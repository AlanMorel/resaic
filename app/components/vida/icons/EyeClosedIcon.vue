<template>
    <VidaEyeClosedIcon />
</template>

<script>
    import { defineComponent } from "vue";

    import { EyeClosedIcon as VidaEyeClosedIcon } from "@alanmorel/vida";

    export default defineComponent({
        name: "EyeClosedIcon",
        components: {
            VidaEyeClosedIcon
        }
    });
</script>

<style lang="scss">
    .eye-closed-icon {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
