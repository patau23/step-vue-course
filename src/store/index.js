import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      posts: [],
      loading: false,
    };
  },
  getters: {
    STATE: (state) => state,
    POSTS: (state) => state.posts,
    APP_LOADING: (state) => state.loading,
  },
  mutations: {
    SET_POSTS: (state, data) => {
      state.posts = data;
    },
    CHANGE_LOADING: (state) => {
      state.loading = !state.loading;
    },
    DELETE_POST_BY_ID: (state, data) => {
      state.posts = state.posts.filter((post) => post.id !== data);
    },
    CREATE_NEW_POST: (state, data) => {
      state.posts.push({
        ...data,
        id: Date.now(),
        userId: 9999,
      });
    },
  },
  actions: {
    GET_POSTS: async ({ commit }) => {
      commit("CHANGE_LOADING");
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      commit("SET_POSTS", data);
      commit("CHANGE_LOADING");
    },
    DELETE_POST: ({ commit }, payload) => {
      commit("CHANGE_LOADING");
      setTimeout(() => {
        commit("DELETE_POST_BY_ID", payload);
        commit("CHANGE_LOADING");
      }, 2000);
    },
    CREATE_POST: ({ commit }, payload) => {
      commit("CHANGE_LOADING");
      setTimeout(() => {
        commit("CREATE_NEW_POST", payload);
        commit("CHANGE_LOADING");
      }, 2000);
    },
  },
});
