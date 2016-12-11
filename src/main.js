import 'style/main.css';
import 'style/markdown.css';

import Vue from 'vue';
import Editor from './components/Editor.vue';

new Vue({
  el: '#editor',
  render: h => h(Editor),
});

new Vue({
  el: '#menu',
  data: {
    items: [
      { text: '新建', url: '#' },
      { text: '保存', url: '#' },
      { text: '首页', url: '#' },
      { text: '列表', url: '#' },
    ],
  },
});
