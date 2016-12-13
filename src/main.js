import 'style/main.css';

import Vue from 'vue';
import Editor from './components/Editor.vue';
import Menu from './components/Menu.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/editor', component: Editor },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#menu',
  render: h => h(Menu),
});

const app = new Vue({
  router,
}).$mount('#app');
