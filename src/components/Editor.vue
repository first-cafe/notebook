<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div class="markdown" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
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

export default {
    name: 'edit',
    data() {
        return {
            input: '# hello'
        }
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
};

</script>

<style>
</style>
