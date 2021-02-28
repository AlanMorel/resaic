<template>
    <VidaEyeOpenedIcon />
</template>

<script>
    import { defineComponent } from "vue";

    import { EyeOpenedIcon as VidaEyeOpenedIcon } from "@alanmorel/vida";

    export default defineComponent({
        name: "EyeOpenedIcon",
        components: {
            VidaEyeOpenedIcon
        }
    });
</script>

<style lang="scss">
    .eye-opened-icon {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
