<template>
    <div class="app">
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path" />
        </transition>
    </div>
</template>

<style lang="stylus">
    @import "../styles/colors.styl";
    @import "../styles/base.styl";
    @import "../styles/inputs.styl";
    @import "../styles/utility.styl";
</style>
