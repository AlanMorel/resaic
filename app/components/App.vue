<template>
    <div class="app">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style lang="stylus">
    @import "../styles/colors.styl";
    @import "../styles/base.styl";
    @import "../styles/inputs.styl";
    @import "../styles/utility.styl";
</style>
