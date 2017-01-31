<template>
  <div id="editor">
    <div class="article_info">
      <input :value="article_info" @input="updateArticleInfo "placeholder="[标题],[分类],[标签],[标签]...">
    </div>
    <textarea class="markdown-input" :value="content" @input="updateContent"></textarea>
    <div class="markdown-show" v-html="compiledMarkdown"></div>
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
  computed: {
    content: function() {
      return this.$store.state.article.content;
    },
    article_info: function() {
      let data = _.clone(this.$store.state.article)
      let article_info = data['title']
        if(data['category']){
          article_info += ',' + data['category']
        }
        if(data['label'] && data['label'].length!=0){
          article_info += ',' + data['label'].join(',')
        }
        return article_info
      },
    compiledMarkdown: function () {
      return marked(this.$store.state.article.content);
    },
  },
  methods: {
    updateContent: _.debounce(function (e) {
      let data = _.clone(this.$store.state.article);
      data['content'] = e.target.value;
        this.$store.dispatch('update', data);
    }, 300),
    updateArticleInfo: _.debounce(function(e) {
      let data = _.clone(this.$store.state.article)
      let article_infos = e.target.value.split(',')
      data['title'] = article_infos[0]
      data['category'] = article_infos[1]
      data['label'] = article_infos.slice(2)
      this.$store.dispatch('update', data);
    }, 300),
  },
};

</script>

<style>
#editor>.markdown-input, #editor>.markdown-show {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

.article_info {
  display: block;
  width: 100%;
  height: 35px;
}
.article_info input {
  padding: 0 12px;
  font-size: 1.8em;
  height: auto;
  border-radius: 0;
  border: none;
  font-weight: 700;
  width: 100%;
}

.makrdown pre {
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border-radius: 3px;
}

.markdown code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown table {
  font-size: 11px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
}

.markdown table th {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #dedede;
}

.markdown table td {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}
</style>
