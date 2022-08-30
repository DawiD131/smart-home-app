import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import mqtt from "./plugins/mqttClient";

createApp(App).use(router).use(mqtt).mount("#app");
