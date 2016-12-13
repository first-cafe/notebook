<template>
<div id="menu">
<ul>
  <li v-for="(item, index) in items">
    <span v-if="index!==0">|</span>
    <a :href="item.url">{{ item.text }}</a>
  </li>
</ul>
</div>
</template>

<script>
export default {
    name: 'menu',
    data() {
        return {
            items: [
                { text: '新建', url: '#/editor' },
                { text: '保存', url: '#' },
                { text: '首页', url: '#' },
                { text: '列表', url: '#' },
            ],
        };
    }
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
