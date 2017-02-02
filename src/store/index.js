import Vue from 'vue';
import Vuex from 'vuex';
import localForage from 'localforage';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    article: {
      content: '# hello',
      title: 'Title',
      category: 'test',
      label: [],
    },
    article_list: [],
    menu: [
      { name: 'title', text: '首页', url: '#' },
      { name: 'list', text: '列表', url: '#/list' },
      { name: 'new', text: '新建', url: '#/edit' },
    ],
    showEditMenu: false,
  },
  mutations: {
    UPDATE(state, data) {
      state.article = data;
    },

    INIT(state, data) {
      state.article_list = data;
    },
  },
  actions: {
    update(context, data) {
      context.commit('UPDATE', data);
    },

    init(context, data) {
      context.commit('INIT', data);
    },
  },
});

export default store;
