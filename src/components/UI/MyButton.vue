<script>
export default {
  name: "MyButton",
};
</script>

<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.my-button {
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
  cursor: pointer;
}
</style>
