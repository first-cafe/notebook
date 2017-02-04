<template>
  <div id="app">
    <div id="sidebar"></div>
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
};
</script>
<style>
#app {
  background-color: rgb(246, 246, 239);
}
</style>
