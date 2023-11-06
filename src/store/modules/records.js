const name = "RECORDS";
const namespaced = true;
const state = {
  profits: [],
  expenses: [],
};
const getters = {
  STATE: (s) => s,
  EXPENSES: (s) => s.expenses,
  PROFITS: (s) => s.profits,
};
const mutations = {
  SET_ALL_CATEGORIES: (state, payload) => {
    state.allCategories = payload;
  },
  SET_ONE_CATEGORY: (state, payload) => {
    state.allCategories.push(payload);
  },
};
const actions = {
  GET_ALL_CATEGORIES: ({ state, commit }, payload) => {
    let data;
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
