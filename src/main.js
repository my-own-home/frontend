import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axios from "axios";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import "bootstrap";

import materialKit from "./material-kit";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(createPinia());
app.use(router);
app.use(store);
app.use(materialKit);
app.mount("#app");
