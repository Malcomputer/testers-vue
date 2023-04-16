import VueCookies from 'vue-cookies';
import {createApp} from 'vue';
import router from './router';
import App from './App.vue';
// import './css/reset.css';
// import './css/style.css';
import './js/domElement.js';

const app = createApp(App);
app.use(VueCookies);
app.config.productionTip = false;
app.use(VueCookies).use(router).mount('#app');
