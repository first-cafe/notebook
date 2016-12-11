import 'style/main.css';
import 'style/markdown.css';

import Vue from 'vue';
import Editor from './components/Editor.vue';
import Menu from './components/Menu.vue';

new Vue({
  el: '#editor',
  render: h => h(Editor),
});

new Vue({
  el: '#menu',
  render: h => h(Menu),
});
