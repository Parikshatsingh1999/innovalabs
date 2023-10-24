<template>
  <div>
    <h4>Child 2</h4>
    <div class="child2">
      <input
        v-model="input"
        id="child2-input"
        placeholder="Data from child 2"
      />
    </div>
    <button @click="updateData?.('parent', input)">Send to Parent</button>
    <button @click="updateData?.('child1', input)">Send to Child 1</button>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    updateData: Function,
  },
  data() {
    return {
      input: "",
    };
  },
  watch: {
    value(newValue) {
      this.input = newValue;
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 2%;
}
.page-wrapper * {
  font-size: 18px;
}
</style>
