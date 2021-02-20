import App from "@/components/App";
import { createApp } from "vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router)
    .use(store)
    .mount("#app");
