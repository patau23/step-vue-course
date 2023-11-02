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
    };
  },
  computed: {
    ...mapGetters({
      STATE: "STATE",
    }),
  },
  async mounted() {
    await this.GET_POSTS();
  },
  methods: {
    ...mapActions({
      GET_POSTS: "GET_POSTS",
      DELETE_POST: "DELETE_POST",
      CREATE_POST: "CREATE_POST",
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
  },
};
</script>

<template>
  <div>
    <button @click="showModal">Создать пост</button>
    <MyModal :show="isShown" :change-show="showModal">
      <PostForm :change-show="showModal" @create-post="createPost" />
    </MyModal>
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
}
</style>
