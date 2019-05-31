import Vue from 'vue';
import Vuex from 'vuex';
import jsonp from 'jsonp';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    results: [],
    authUsers: {},
    resultsShow: false
  },
  getters: {
    results(state) {
      console.log(state.resultsShow);
      return state.results.map(item => {
        item.url = 'https://ru.wikipedia.org/wiki/' + item.title;
        return item;
      });
    },
    resultsShow(state) {
      return state.resultsShow;
    }
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    },
    setResultsShow(state, { type }) {
      state[type] = !state[type];
    }
  },
  actions: {
    // my_action({ state, dispatch, commit }, query) {
    //   return state;
    // }

    search({ commit }, query) {
      const url =
        'https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=' +
        query;

      jsonp(url, (error, response) => {
        if (error) {
          throw error;
        }
        const results = response.query.search;

        commit('set', { type: 'results', items: results });
      });
    },
    actionToggleResultsShow({ commit }) {
      commit('setResultsShow', { type: 'resultsShow' });
    }
  }
});

export default store;
