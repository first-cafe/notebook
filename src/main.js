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
  profile: 'notes-db',
  storeName: 'notes-db_1',
};

db.findAll({ options: options }).then((data) => {
  store.dispatch('init', data);
}).catch((err) => {
  console.error(err);
});

const app = new Vue(
  Object.assign({ router, store }, App)
).$mount('#app');
