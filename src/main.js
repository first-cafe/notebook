import 'style/main.css';
import 'style/markdown.css';

import Vue from 'vue';
import marked from 'marked';
import _ from 'lodash';
import highlight from 'highlight.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  },
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
