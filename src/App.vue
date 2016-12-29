<template>
  <div id="app">
    <my-menu></my-menu>
    <div id="sidebar"></div>
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    'my-menu': Menu
  }
};
</script>
<style></style>
