<template>
    <span class="icon-toggler" @click="toggle">
        <component :is="on + 'Icon'" v-if="!value" />
        <component :is="off + 'Icon'" v-else />
    </span>
</template>

<script>
    import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
    import EyeOpenedIcon from "@/components/icons/EyeOpenedIcon";

    export default {
        name: "IconToggler",
        components: {
            EyeClosedIcon,
            EyeOpenedIcon
        },
        props: {
            value: {
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
                this.$emit("input", !this.value);
            }
        }
    }
</script>

<style lang="stylus">
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
