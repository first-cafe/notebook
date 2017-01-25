<template>
<div id="menu">
<ul>
  <li v-for="(item, index) in items">
    <span v-if="index!==0">|</span>
    <a :href="item.url" v-on:click='updateMenu(item.name)'>{{ item.text }}</a>
  </li>
  <li v-if="showEditMenu">
    <a v-on:click='save'>保存</a>
  </li>
</ul>
</div>
</template>

<script>
import localForage from "localforage";

export default {
    name: 'menu',
    data() {
        return {
            items: [
                { name: 'title', text: '首页', url: '#' },
                { name: 'list', text: '列表', url: '#/list' },
                { name: 'new', text: '新建', url: '#/editor' },
            ],
            showEditMenu: false,
        };
    },
    methods: {
      save: function() {
        let article = {
          'title': 'first article',
          'content': this.$store.state.input,
        }
        localForage.setItem('fist article', article, function(error) {
          console.log('save article');
        })
      },
      updateMenu: function(name, event) {
        let items;
        if (name==='title') {
          items = [
            { name: 'title', text: '首页', url: '#' },
            { name: 'list', text: '列表', url: '#/list' },
            { name: 'new', text: '新建', url: '#/editor' },
          ];
          this.showEditMenu = false;
        } else if (name==='list') {
          items = [
            { name: 'title', text: '首页', url: '#' },
            { name: 'list', text: '列表', url: '#/list' },
            { name: 'new', text: '新建', url: '#/editor' },
          ];
          this.showEditMenu = false;
        } else if (name==='new') {
          items = [
            { name: 'title', text: '首页', url: '#' },
            { name: 'list', text: '列表', url: '#/list' },
            { name: 'new', text: '新建', url: '#/editor' },
          ];
          this.showEditMenu = true;
        }

        this.items = items;
      }
    },
};
</script>

<style>
#menu {
  color: #fff;
  background: #222;
}

#menu ul {
  padding-left: 10px;
  margin: 0px;
}

#menu ul li {
  display: inline-block;
  padding: 3px;
}

#menu a { color: #fff; text-decoration:none; }
#menu a:link { color:#fff; }
#menu a:visited { color:#fff; }
#menu a:hover { color:#fff; text-decoration:none; }
#menu a:active { color: #fff; }
</style>
