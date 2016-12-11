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
                { text: '新建', url: '#' },
                { text: '保存', url: '#' },
                { text: '首页', url: '#' },
                { text: '列表', url: '#' },
            ],
        };
    }
};
</script>
<style></style>
