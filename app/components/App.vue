<template>
    <div class="app">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style lang="scss">
    @import "../styles/colors.scss";
    @import "../styles/base.scss";
    @import "../styles/inputs.scss";
    @import "../styles/utility.scss";
</style>
