import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import "./main.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
app.use(createMetaManager());
app.mount("#app");
