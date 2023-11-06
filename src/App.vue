<script>
import initializeApp from "./mixin/initializeApp";

export default {
  components: {},
  mixins: [initializeApp],
  data: () => {
    return {};
  },
  mounted() {
    this.initApp();
  },
};
</script>

<template>
  <div></div>
</template>

<style></style>
