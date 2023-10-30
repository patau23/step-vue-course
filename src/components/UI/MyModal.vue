<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    changeShow: {
      type: Function,
      required: true,
    },
  },
  data: () => {
    return {};
  },
};
</script>

<template>
  <div class="modal" v-if="show" @click.stop="changeShow">
    <div class="modal-content" @click.stop>
      <button @click.stop="changeShow">Закрыть</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 200px;
  padding: 20px;
}
</style>
