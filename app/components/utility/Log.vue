<template>
    <li class="log">
        <h2 class="log__version">Version {{ version }}</h2>
        <h3 class="log__date">{{ date }}</h3>
        <div class="log__contents">
            <slot />
        </div>
    </li>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Log",
        props: {
            version: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        }
    });
</script>

<style lang="scss">
    .log {
        padding: 0.75rem 0;
    }

    .log__version {
        font-family: $primary-font;
        font-size: 1.75rem;
        margin-bottom: -0.25rem;
    }

    .log__date {
        font-family: $primary-font;
        margin-bottom: 0.75rem;
        font-weight: bold;
        margin-top: 0;
        font-size: 1rem;
    }

    .log__contents {
        line-height: 1.25;

        & > * {
            margin-bottom: 0.5rem;
        }

        li {
            list-style: disc;
            margin-left: 1rem;
        }
    }
</style>
