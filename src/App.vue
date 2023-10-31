<script>
import axios from "axios";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data: () => {
    return {
      isLoading: false,
      posts: [],
      isShown: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" },
      ],
    };
  },
  computed: {},
  watch: {},
  async mounted() {
    this.isLoading = true;
    await this.fetchPosts();
    console.log(1);
    this.isLoading = false;
  },
  methods: {
    createPost({ title, body }) {
      const newPost = {
        id: Date.now(),
        title,
        body,
      };
      this.posts.push(newPost);
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    showModal() {
      this.isShown = !this.isShown;
    },
    async fetchPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      this.posts = response.data;
    },
    // changeOption(value) {},
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
      :options="sortOptions"
      @change-value="(v) => (selectedSort = v)"
    />
    <PostList v-if="!isLoading" :posts="posts" @delete-post="deletePost" />
    <div v-else>... загрузка</div>
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
}
</style>
