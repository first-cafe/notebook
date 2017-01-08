import 'style/main.css';

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Menu from './components/Menu.vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';
import store from './store';

sync(store, router);

const app = new Vue(
  Object.assign({router, store}, App)
).$mount('#app');
