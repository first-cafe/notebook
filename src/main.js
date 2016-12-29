import 'style/main.css';

import Vue from 'vue';
import Menu from './components/Menu.vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';

const app = new Vue(
  Object.assign({router}, App)
).$mount('#app');
