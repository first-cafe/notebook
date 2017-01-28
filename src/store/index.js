import Vue from 'vue';
import Vuex from 'vuex';
import localForage from 'localforage';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    input: '# hello',
    article_title_list: [
      { text: '第一篇文章', url: '#', datetime: '2016-12-10 10:11:30' },
      { text: '第二篇文章', url: '#', datetime: '2016-12-10 10:11:30' },
      { text: '第三篇文章', url: '#', datetime: '2016-12-10 10:11:30' },
      { text: '第四篇文章', url: '#', datetime: '2016-12-10 10:11:30' },
    ],
  },
  mutations: {
    SAVE(state, input) {
      state.input = input;
    },

    INIT(state, data) {
      state.article_list = data.article_title_list;
    },
  },
  actions: {
    save(context, input) {
      context.commit('SAVE', input);
    },

    init(context, data) {
      context.commit('INIT', data);
    },
  },
});

export default store;
