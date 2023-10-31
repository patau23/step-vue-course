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
    <MyInput
      class="input"
      placeholder="Название"
      :value="title"
      @change-value="(v) => (title = v)"
    />
    <MyInput
      class="input"
      placeholder="Описание"
      :value="body"
      @change-value="(v) => (body = v)"
    />
    <MyButton class="" @click.prevent="sendPostEntity"> Создать </MyButton>
  </form>
</template>

<style scoped>
.close-button {
  background-color: red;
}
</style>
