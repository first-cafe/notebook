import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    input: '# hello'
  },
  mutations: {
    SAVE(state, input) {
      state.input = input;
    }
  },
  actions: {
    save(context, input) {
      context.commit('SAVE', input)
    }
  }
});

export default store;
