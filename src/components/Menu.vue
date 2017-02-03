<template>
<div id="menu">
<ul>
  <li v-for="(item, index) in items">
    <span v-if="index!==0">|</span>
    <a :href="item.url">{{ item.text }}</a>
  </li>
  <li v-if="showEditMenu">
    <a v-on:click='save'>保存</a>
  </li>
</ul>
</div>
</template>

<script>
import _ from 'lodash';
import uuidV1 from 'uuid/v1'

import db from '../helpers/db';

let options = {
  profile: 'first-cafe',
  storeName: 'notebook',
};

export default {
  name: 'menu',
  props: ['items', 'showEditMenu'],
  methods: {
    save: function() {
      let data = _.clone(this.$store.state.article);
      if (!data.id) {
        data.id = uuidV1()
      }
      db.save({ options: options, data: data, id: data.id});
    },
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
