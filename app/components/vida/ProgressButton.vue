<template>
    <VidaProgressButton :progress="progress" :text="text" />
</template>

<script>
    import { defineComponent } from "vue";

    import { ProgressButton as VidaProgressButton } from "@alanmorel/vida";

    export default defineComponent({
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
    });
</script>

<style lang="scss"></style>
