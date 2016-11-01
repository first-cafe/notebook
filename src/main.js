import Vue from 'vue';
import marked from 'marked';
import _ from 'lodash';
import 'style/main.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

new Vue({
  el: '#editor',
  data: {
    input: '# hello',
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input);
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
});
