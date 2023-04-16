import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
// import './css/reset.css';
// import './css/style.css';
import './js/domElement.js';

const app = createApp(App);
app.use(VueCookies);
app.config.productionTip = false;
app.use(VueCookies).use(router).mount('#app');
