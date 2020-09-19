import { createApp } from "vue";
import App from "@/components/App";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.config.devtools = true;

app.use(router)
    .use(store)
    .mount("#app");

