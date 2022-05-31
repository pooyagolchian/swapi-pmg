import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    starShips: [],
    loading: false,
  },
  getters: {
    getFilms: (state) => state.films,
    getStarShips: (state) => state.starShips,
    getLoading: (state) => state.loading,
  },
  mutations: {
    SET_FILMS(state, films) {
      state.films = films;
    },
    SET_STAR_SHIP(state, starShips) {
      state.starShips = starShips;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchFilms({ commit }, payload) {
      await commit("SET_FILMS", payload);
    },
    async fetchStarShips({ commit }, payload) {
      await commit("SET_STAR_SHIP", payload);
    },
    async loading({ commit, state }, payload) {
      await commit("SET_LOADING", (state.loading = payload));
    },
  },
});
