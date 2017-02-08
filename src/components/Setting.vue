<template>
  <div>
    <my-menu :items="menu"></my-menu>
    <table>
      <tbody>
        <tr>
          <th>导入导出</th>
          <td> <button>import</button> <button>output</button> </td>
        </tr>
        <tr>
          <th>远端存储</th>
          <td>
            <select v-model="selected">
              <option>dropbox</option>
              <option>百度云</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>remote-url</th>
          <td> <input type=""> </td>
        </tr>
        <tr>
          <th>token</th>
          <td> <input type=""> </td>
        </tr>
        <tr>
          <td> <button>save</button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Menu from './Menu.vue';

export default {
  name: 'setting',
  data() {
    return {

      menu: [
        { name: 'list', text: 'list', url: '#/list' },
        { name: 'new', text: 'new', url: '#/edit' },
        { name: 'setting', text: 'setting', url: '#/setting' },
      ]
    }
  },
  components: {
    'my-menu': Menu
  }
};
</script>
<style>
table {
  margin: 10px;
}
table th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  text-align: right;
  white-space: nowrap;
}
</style>
