import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

const state = {
  counter: 0
};
const getters = {
  counter: state => state.counter
};
const mutations = {
  SET_COUNTER(state, value) {
    state.counter = value;
  }
};
const actions = {
  increment({ commit }, value) {
    commit("SET_COUNTER", value);
  }
};
export default new vuex.Store({
  state,
  mutations,
  actions,
  getters
});
