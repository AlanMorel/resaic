<template>
    <VidaStrengthIndicator :strength="strength" />
</template>

<script>
    import { StrengthIndicator as VidaStrengthIndicator } from "@alanmorel/vida";

    export default {
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
    };
</script>
