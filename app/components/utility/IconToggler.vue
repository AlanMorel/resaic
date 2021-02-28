<template>
    <span class="icon-toggler" @click="toggle">
        <component :is="on + 'Icon'" v-if="!modelValue" />
        <component :is="off + 'Icon'" v-else />
    </span>
</template>

<script>
    import { defineComponent } from "vue";

    import EyeClosedIcon from "@/components/vida/icons/EyeClosedIcon";
    import EyeOpenedIcon from "@/components/vida/icons/EyeOpenedIcon";

    export default defineComponent({
        name: "IconToggler",
        components: {
            EyeClosedIcon,
            EyeOpenedIcon
        },
        props: {
            modelValue: {
                type: Boolean,
                required: true
            },
            on: {
                type: String,
                required: true
            },
            off: {
                type: String,
                required: true
            }
        },
        methods: {
            toggle() {
                this.$emit("update:modelValue", !this.modelValue);
            }
        }
    });
</script>

<style lang="scss">
    .icon-toggler {
        user-select: none;
        margin-left: 0.5rem;
        cursor: pointer;
        position: absolute;
        right: 0.75rem;
        top: 25%;

        & + input[name="password"] {
            padding-right: 2.5rem;
        }
    }
</style>
