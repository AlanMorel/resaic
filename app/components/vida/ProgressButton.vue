<template>
    <VidaProgressButton :progress="progress" :text="text" />
</template>

<script>
    import { ProgressButton as VidaProgressButton } from "@alanmorel/vida";

    export default {
        name: "ProgressButton",
        components: {
            VidaProgressButton
        },
        props: {
            progress: {
                type: Boolean,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss"></style>
