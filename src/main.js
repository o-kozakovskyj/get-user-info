import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import NavBar from './components/NavBar.vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);
app.component('NavBar', NavBar)
app.use(router).mount('#app')
