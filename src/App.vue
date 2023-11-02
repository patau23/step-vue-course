<script>
import { mapActions, mapGetters } from "vuex";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data: () => {
    return {
      isShown: false,
      selectedSort: "",
      searchQuery: "",
      limiter: null,
      sortOptins: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      STATE: "STATE",
    }),
    searchedPosts() {},
  },
  watch: {
    selectedSort: {
      handler(value) {
        console.log(this.STATE.posts);
        // this.SORT_POSTS(value);
      },
      deep: true,
    },
  },
  async mounted() {
    await this.GET_POSTS();
    this.limiter = this.STATE.limit;
  },
  methods: {
    ...mapActions({
      GET_POSTS: "GET_POSTS",
      DELETE_POST: "DELETE_POST",
      CREATE_POST: "CREATE_POST",
      SORT_POSTS: "SORT_POSTS",
      SEARCH_POSTS: "SEARCH_POSTS",
      GET_POSTS_BY_PAGE: "GET_POSTS_BY_PAGE",
    }),
    createPost({ title, body }) {
      this.CREATE_POST({ title, body });
    },
    deletePost(id) {
      this.DELETE_POST(id);
    },
    showModal() {
      this.isShown = !this.isShown;
    },
    changeSelectedOption(value) {
      this.selectedSort = value;
    },
    search() {
      this.SEARCH_POSTS({
        search: this.searchQuery,
        sortType: this.selectedSort,
      });
    },
    pagePrev() {
      if (this.STATE.page >= 0) {
        this.GET_POSTS_BY_PAGE(this.STATE.page - 1);
      }
    },
    pageNext() {
      this.GET_POSTS_BY_PAGE(this.STATE.page + 1);
    },
  },
};
</script>

<template>
  <div>
    <button @click="showModal">Создать пост</button>
    <MyModal :show="isShown" :change-show="showModal">
      <PostForm :change-show="showModal" @create-post="createPost" />
    </MyModal>
    <MySelect
      :value="selectedSort"
      :options="sortOptins"
      @change-value="changeSelectedOption"
    />
    <MyInput
      :value="searchQuery"
      :placeholder="'поиск ...'"
      @change-value="(v) => (searchQuery = v)"
    />
    <button @click="search">поиск</button>
    <div class="">
      <button class="btn" :disabled="STATE.page <= 1" @click="pagePrev">
        {{ "<" }}
      </button>
      <MyInput :value="limiter" @change-value="(v) => (limiter = v)" />
      <button class="btn" @click="pageNext">{{ ">" }}</button>
    </div>
    <PostList
      v-if="!STATE.loading"
      :posts="STATE.posts"
      @delete-post="deletePost"
    />
    <h1 v-else>... загрузка</h1>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
  cursor: pointer;
}
</style>
