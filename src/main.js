import 'style/main.css';

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Menu from './components/Menu.vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';
import store from './store';
import db from './helpers/db';
import localforage from 'localforage';

sync(store, router);

let options = {
  profile: 'first-cafe',
  storeName: 'notebook',
};

db.findAll({ options: options }).then((data) => {
  store.dispatch('init', data);

  const app = new Vue(
    Object.assign({ router, store }, App)
  ).$mount('#app');
}).catch((err) => {
  console.error(err);
});
