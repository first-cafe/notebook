<template>
<div id="menu">
  <ul>
    <li class="header">first cafe</li>
    <li v-for="(item, index) in items">
      <span v-if="index!==0">|</span>
      <a :href="item.url">{{ item.text }}</a>
    </li>
    <li class="tool" v-if="showSaveMenu">
      <a v-on:click='save'>save</a>
    </li>
    <li class="tool" v-if="showEditMenu">
      <a :href="'/#/edit/' + $route.params.id">edit</a>
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
  props: ['items', 'showSaveMenu', 'showEditMenu'],
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
  color: #222;
  background: #ff6600;
}

#menu ul {
  padding-left: 10px;
  margin: 0px;
}

#menu ul li {
  display: inline-block;
  padding: 3px;
}

#menu a { color: #222; text-decoration:none; font-size: 10pt; cursor: pointer;}
#menu a:link { color:#222; }
#menu a:visited { color:#222; }
#menu a:hover { color:#222; text-decoration:none;}
#menu a:active { color: #222; }

#menu .header {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  font-weight: bold;
}

#menu .tool {
  float: right;
  display: inline-block;
  margin-right: 10px;
}

</style>
