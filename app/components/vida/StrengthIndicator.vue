<template>
    <VidaStrengthIndicator :strength="strength" />
</template>

<script>
    import { defineComponent } from "vue";

    import { StrengthIndicator as VidaStrengthIndicator } from "@alanmorel/vida";

    export default defineComponent({
        name: "StrengthIndicator",
        components: {
            VidaStrengthIndicator
        },
        props: {
            strength: {
                type: Number,
                required: true
            }
        }
    });
</script>
