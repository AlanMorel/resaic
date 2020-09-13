<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/signup">Sign Up</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="stylus">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-smoothing: antialiased;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
