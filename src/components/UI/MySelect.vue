<script>
// import something from "../../mixin/something.js";
export default {
  name: "MySelect",
  // mixins: [something],
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // this.changesomething();
    // console.log(321);
  },
  methods: {
    // changesomething() {
    //   console.log(true);
    // },
  },
};
</script>

<template>
  <select :value="value" @change="$emit('change-value', $event.target.value)">
    <option disabled value="" selected>Выберите из списка</option>
    <option
      v-for="(option, index) in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped></style>
