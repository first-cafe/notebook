import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Editor from '../components/Editor.vue';
import List from '../components/List.vue';
import Article from '../components/Article.vue';
import Setting from '../components/Setting.vue';

export default new Router({
  routes: [
    { path: '/', component: List },
    { path: '/edit', component: Editor },
    { path: '/edit/:id', component: Editor },
    { path: '/setting', component: Setting },
    { path: '/list', component: List },
    { path: '/article/:id', component: Article },
  ],
});
