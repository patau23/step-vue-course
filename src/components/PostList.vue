<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data: () => {
    return {};
  },
};
</script>

<template>
  <div>
    <h2>Список постов:</h2>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete-post="$emit('delete-post', post.id)"
    />
  </div>
</template>

<style scoped></style>
