import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";
import router from "./router";
import './assets/tailwind.css'

createApp(App).use(router).mount("#app");
