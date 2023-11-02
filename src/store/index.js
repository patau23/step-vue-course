import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      posts: [],
      loading: false,
      page: 0, 
      limit: 10,
      
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
    SORT_POSTS: (state, data) => {
      state.posts = state.posts.sort((a, b) => {
        return a[data]?.localeCompare(b[data]);
      });
    },
    SEARCH_POSTS_BY_QUERY: (state, data) => {
      state.posts = state.posts.filter((post) => {
        return post.title.toLowerCase().includes(data.toLowerCase());
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
      }, 500);
    },
    CREATE_POST: ({ commit }, payload) => {
      commit("CHANGE_LOADING");
      setTimeout(() => {
        commit("CREATE_NEW_POST", payload);
        commit("CHANGE_LOADING");
      }, 500);
    },
    SEARCH_POSTS: ({ commit, dispatch }, { search, sortType }) => {
      commit("CHANGE_LOADING");
      setTimeout(() => {
        commit("SEARCH_POSTS_BY_QUERY", search);
        dispatch("SORT_POSTS", sortType);
        commit("CHANGE_LOADING");
      }, 500);
    },
    SORT_POSTS: ({ commit }, payload) => {
      commit("CHANGE_LOADING");
      setTimeout(() => {
        commit("SORT_POSTS", payload);
        commit("CHANGE_LOADING");
      }, 500);
    },
  },
});
