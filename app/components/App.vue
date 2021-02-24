<template>
    <div class="app">
        <Vida />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
    import { Vida } from "@alanmorel/vida";

    export default {
        name: "App",
        components: {
            Vida
        }
    };
</script>

<style lang="scss">
    @import "../styles/colors.scss";
    @import "../styles/base.scss";
    @import "../styles/inputs.scss";
</style>
