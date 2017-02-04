<template>
  <div id="editor_page">
    <my-menu :items="menu" :show-edit-menu="showEditMenu"></my-menu>
    <div id="editor">
      <div class="article_info">
        <input v-model="article_info" @input="updateArticleInfo "placeholder="[标题],[分类],[标签],[标签]...">
      </div>
      <textarea class="markdown-input" :value="content" @input="updateContent"></textarea>
      <div class="markdown-show" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import _ from 'lodash';
import highlight from 'highlight.js';

import Menu from './Menu.vue';

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
      article_info: this.getArticleInfo(),
      menu: [
        { name: 'title', text: 'home', url: '#' },
        { name: 'list', text: 'list', url: '#/list' },
        { name: 'new', text: 'new', url: '#/edit' },
      ],
      showEditMenu: true,
    }
  },
  computed: {
    content: function() {
      return this.$store.state.article.content;
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
    getArticleInfo: function() {
      let data = _.clone(this.$store.state.article)
      let article_info = data['title'] + ','
      if(data['category']){
        article_info += data['category'] + ','
      }
      if(data['label'] && data['label'].length!=0){
        article_info += data['label'].join(',')
      }

      return article_info;
    },
    updateArticleInfo: function(e) {
      let data = _.clone(this.$store.state.article);
      let article_infos = e.target.value.split(',');
      if (article_infos[article_infos.length-1] == '') {
        article_infos.pop()
      }

      data['title'] = article_infos[0]
      data['category'] = article_infos[1]
      data['label'] = article_infos.slice(2)

      this.$store.dispatch('update', data);
    },
  },
  beforeCreate: function() {
    let article;
    if (this.$route.params.id) {
      this.$store.state.article_list.forEach((value) => {
        if (value.id === this.$route.params.id) {
          article = value;
        }
      });
      this.$store.dispatch('update',  article);
    } else {
      article = {
        content: '# hello',
        title: 'Title',
        category: 'test',
        label: [],
      };
      this.$store.dispatch('update',  article);
    }
  },
  watch: {
    '$route' (to, from) {
      let article;
      if (to.params.id) {
        this.$store.state.article_list.forEach((value) => {
          if (value.id === this.$route.params.id) {
            article = value;
          }
        });
        this.$store.dispatch('update',  article);
      } else {
        article = {
          content: '# hello',
          title: 'Title',
          category: 'test',
          label: [],
        };
        this.$store.dispatch('update',  article);
      }
      this.$data.article_info = this.getArticleInfo()
    }
  },
  components: {
    'my-menu': Menu
  }
};

</script>

<style>
#editor_page {
  height: 100%;
}

#editor {
  background-color: rgb(246, 246, 239);
}

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
