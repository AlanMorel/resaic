<template>
    <nav class="nav">
        <div class="nav__logo">
            <router-link to="/">
                <Logo />
            </router-link>
        </div>
        <ul class="nav__menu">
            <li class="nav__item">
                <router-link to="/login" class="nav__link">Login</router-link>
            </li>
            <li class="nav__item">
                <router-link to="/signup" class="nav__link">Sign Up</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Logo from "@/components/core/Logo";

    export default {
        name: "Nav",
        components: {
            Logo
        }
    }
</script>

<style lang="stylus">
    .nav {
        padding: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__menu {
        display: flex;
    }

    .nav__item {
        font-family: $primary-font;
    }

    .nav__link {
        border-radius: 0.25rem;
        display: inline-block;
        padding: 0.375rem 1rem;
        margin: 0 0.5rem;
        transition: background-color 0.15s ease;
        cursor: pointer;

        &:hover,
        &:focus {
            background-color: var(--primary-color);
        }

        &:last-of-type {
            margin-right: 0;
        }
    }
</style>
