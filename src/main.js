import 'style/main.css';

import Vue from 'vue';
import Menu from './components/Menu.vue';
import VueRouter from 'vue-router';
import router from './router';

new Vue({
  el: '#menu',
  render: h => h(Menu),
});

const app = new Vue({
  router,
}).$mount('#app');
