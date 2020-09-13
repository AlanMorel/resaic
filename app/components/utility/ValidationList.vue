<template>
    <ul class="validation-list" v-if="(errors && errors.length) || (successes && successes.length)">
        <li v-for="error in errors" class="validation-list__item validation-list__item--error" :key="error">
            {{ error }}
        </li>
        <li v-for="success in successes" class="validation-list__item validation-list__item--success" :key="success">
            {{ success }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ValidationList",
        props: {
            errors: {
                type: Array
            },
            successes: {
                type: Array
            }
        }
    }
</script>

<style lang="stylus">
    .validation-list {
        font-family: $text-font;
        margin-bottom: 0.5rem;
        margin-top: -0.75rem;
        margin-left: 0.75rem;
    }

    .validation-list__item {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        font-weight: bold;
        height: 1.75rem;

        &:before {
            width: 1.25rem;
        }

        &--error {
            &:before {
                content: "×";
                color: red;
                font-size: 1.5rem;
            }
        }

        &--success {
            &:before {
                content: "✓";
                color: green;
                font-size: 1rem;
            }
        }
    }
</style>
