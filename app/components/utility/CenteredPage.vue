<template>
    <section class="centered-page">
        <div class="centered-page__content">
            <div class="centered-page__logo">
                <router-link to="/">
                    <Logo />
                </router-link>
            </div>
            <div class="centered-page__inner">
                <div class="centered-page__prompt">
                    <slot name="prompt" />
                </div>
                <slot name="content" />
            </div>
            <div class="centered-page__footer">
                <slot name="footer" />
            </div>
        </div>
        <div class="centered-page__background">
            <slot name="background" />
        </div>
    </section>
</template>

<script>
    import { defineComponent } from "vue";

    import Logo from "@/components/core/Logo";

    export default defineComponent({
        name: "CenteredPage",
        components: {
            Logo
        }
    });
</script>

<style lang="scss">
    .centered-page__content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 32rem;
        max-width: calc(100% - 2rem);
        z-index: 1;
    }

    .centered-page__logo {
        margin-bottom: 1rem;
    }

    .centered-page__inner {
        border-radius: 0.5rem;
        padding: 1.25rem;
        background-color: rgba(255, 255, 255, 0.85);
    }

    .centered-page__prompt {
        margin-top: 0.25rem;
        margin-bottom: 1.5rem;
        font-family: $primary-font;
        font-size: 1.5rem;
        text-align: center;
    }

    .centered-page__footer {
        margin-top: 0.5rem;
        text-align: center;
        font-family: $primary-font;
        font-size: 1.25rem;

        a {
            color: white;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }

    .centered-page__background {
        position: relative;
        height: 100vh;
    }

    .centered-page__background-image {
        filter: brightness(0.85);
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .centered-page__error {
        font-weight: bold;
        margin: 1rem 0;
        text-align: center;
        color: white;
        background-color: var(--primary-color);
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
    }

    .centered-page__button-container {
        text-align: right;
    }
</style>
