import Vue from "vue";
import App from "./components/App.vue";
import router from "./core/router";
import store from "./core/store";

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App)
});

app.$mount("#app");
