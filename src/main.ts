import "./assets/main.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import PrimeVue from "primevue/config";
import Noir from "./presets/Noir.js";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
      cssLayer: false,
    },
  },
});

app.use(ToastPlugin);

app.mount("#app");
