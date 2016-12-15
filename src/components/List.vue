<template>
 <div id="list">
   <ul>
     <li v-for="(item, index) in items">
       <a :href="item.url">{{ item.text }}</a>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
    name : 'list',
    data() {
        return {
            items: [
                { text: '第一篇文章', url: '#'},
                { text: '第二篇文章', url: '#'},
                { text: '第三篇文章', url: '#'},
            ]
        }
    }
}
</script>

<style>
</style>
