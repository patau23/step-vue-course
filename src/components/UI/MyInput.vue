<script>
export default {
  name: "MyInput",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <input
    type="text"
    :value="value"
    @input="$emit('change-value', $event.target.value)"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
  width: 100%;
}
</style>
