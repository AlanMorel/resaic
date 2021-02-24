<template>
    <div class="progress-button" :class="{ progress: progress }">
        <SpinnerIcon theme="light" v-if="progress" />
        <input type="submit" :value="text" class="progress-button__input" @click="$emit('click')" />
    </div>
</template>

<script>
    import { SpinnerIcon } from "@alanmorel/vida";

    export default {
        name: "ProgressButton",
        components: {
            SpinnerIcon
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

<style lang="scss">
    .progress-button {
        position: relative;
        display: inline-block;
        transition: filter 0.25s ease;

        &.progress {
            filter: brightness(75%);

            &:hover,
            &:focus {
                cursor: not-allowed;
            }
        }
    }

    .progress-button__input {
        color: white;
        font-weight: bold;
        min-width: 8rem;
        padding: 0.75rem 2.5rem 0.75rem 2.5rem;
        border: 0;
        font-size: 0.95rem;
        margin-bottom: 0;
        transition: background-color 0.25s ease;
        background-color: var(--primary-color);

        &:hover,
        &:focus {
            background-color: var(--primary-color);
        }
    }
</style>
