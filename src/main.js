import 'style/main.css';

import Vue from 'vue';
import Editor from './components/Editor.vue';
import Menu from './components/Menu.vue';
import List from './components/List.vue';
import Article from './components/Article.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/editor', component: Editor },
    { path: '/list', component: List },
    { path: '/article/:title', component: Article },
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
