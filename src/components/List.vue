<template>
  <div>
    <my-menu :items="menu" :show-edit-menu="showEditMenu"></my-menu>
    <div id="list">
      <div v-for="(item, index) in items">
        <a :href="'/#/article/' + item.id" >{{ item.title }}</a>
        <span class="tool">
          <a :href="'/#/edit/' + item.id" >edit</a> |
          <a v-on:click="del(item.id)" >del</a>
        </span>
        <span class="datetime">{{item.created_at}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import localForage from 'localforage';
import db from '../helpers/db';

let options = {
  profile: 'first-cafe',
  storeName: 'notebook',
};

export default {
  name : 'list',
  data() {
    return {
      menu: [
        { name: 'title', text: 'home', url: '#' },
        { name: 'list', text: 'list', url: '#/list' },
        { name: 'new', text: 'new', url: '#/edit' },
      ],
      showEditMenu: false,
    }
  },
  methods: {
    del: function(id) {
      db.del(options, id);
    }
  },
  computed: {
    items: function() {
      return this.$store.state.article_list
    }
  },
  components: {
    'my-menu': Menu
  }
}
</script>

<style>
a:link {
    color:#000000;
    text-decoration:none;
}
a:visited {
    color:#000000;
    text-decoration:none;
}
a:hover {
    color:#000000;
    text-decoration:none;
}
a:active {
    color:#000000;
    text-decoration:none;
}

#list {
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 20px;
}

#list div {
    border-bottom: 1px dashed #9a9a9a;
    padding: 3px;
}

#list .datetime {
    float: right;
}

/*
#list>div:nth-child(2n+1) {
    background-color: #eee;
}
*/

#list .tool {
  float: right;
}

</style>
