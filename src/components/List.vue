<template>
 <div id="list">
   <div v-for="(item, index) in items">
     <a :href="item.url">{{ item.title }}</a>
     <span class="datetime">{{item.created_at}}</span>
   </div>
  </div>
</template>

<script>
export default {
    name : 'list',
    computed: {
        items: function() {
          return this.$store.state.article_list
        }
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

#list .datetime {
    float: right;
}

#list>div:nth-child(2n+1) {
    background-color: #eee;
}

</style>
