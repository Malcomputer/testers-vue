import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'
// import './css/reset.css';
// import './css/style.css';
import './js/domElement.js';

Vue.use(VueCookies);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
