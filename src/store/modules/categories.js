const name = "CATEGORIES";
const namespaced = true;
const state = {
  allCategories: [],
};
const getters = {
  STATE: (s) => s,
};
const mutations = {
  SET_CATEGORIES: (state, payload) => {
    state.allCategories = payload;
  },
  SET_ONE_CATEGORY: (state, payload) => {
    state.allCategories.push(payload);
  },
};
const actions = {
  GET_CATEGORIES: ({ commit }) => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    commit("SET_CATEGORIES", categories);
  },
};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
