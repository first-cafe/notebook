import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Editor from '../components/Editor.vue';
import List from '../components/List.vue';
import Article from '../components/Article.vue';


export default new Router({
  routes: [
    { path: '/editor', component: Editor },
    { path: '/list', component: List },
    { path: '/article/:title', component: Article },
  ]
})