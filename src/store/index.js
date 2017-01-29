import Vue from 'vue';
import Vuex from 'vuex';
import localForage from 'localforage';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    input: '# hello',
    article_list: [
      { title: '第一篇文章', url: '#', content: '#hellow  test', created_at: new Date() },
    ],
  },
  mutations: {
    SAVE(state, input) {
      state.input = input;
    },

    INIT(state, data) {
      state.article_list = data;
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
