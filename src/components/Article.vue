<template>
  <div id="article">
     <h1>{{title}}</h1>
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
  name: 'article',
  data() {
    return {
      content: this.$store.state.article['content'],
      title: this.$store.state.article['title']
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content);
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
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
      this.$data.content = this.$store.state.article['content'];
      this.$data.title = this.$store.state.article['title'];
    }
  }
};

</script>

<style>
#article {
  margin-left: 80px;
  margin-top: 20px;
}

.makrdown pre {
  padding: 16px;
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
