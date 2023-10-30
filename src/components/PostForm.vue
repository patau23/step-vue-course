<script>
export default {
  name: "PostForm",
  props: {
    changeShow: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data: () => {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    sendPostEntity() {
      this.$emit("create-post", { title: this.title, body: this.body });
      this.title = "";
      this.body = "";
      this.changeShow();
    },
  },
};
</script>

<template>
  <form>
    <input type="text" class="input" placeholder="название" v-model="title" />
    <input type="text" class="input" placeholder="описание" v-model="body" />
    <MyButton class="" @click.prevent="sendPostEntity"> Создать </MyButton>
  </form>
</template>

<style scoped>
.close-button {
  background-color: red;
}
</style>
