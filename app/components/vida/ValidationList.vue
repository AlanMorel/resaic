<template>
    <VidaValidationList :errors="errors" :successes="successes" />
</template>

<script>
    import { defineComponent } from "vue";

    import { ValidationList as VidaValidationList } from "@alanmorel/vida";

    export default defineComponent({
        name: "ValidationList",
        components: {
            VidaValidationList
        },
        props: {
            errors: {
                type: Array
            },
            successes: {
                type: Array
            }
        }
    });
</script>

<style lang="scss">
    .validation-list {
        font-family: $text-font;
        margin-left: 0.75rem;
    }
</style>
