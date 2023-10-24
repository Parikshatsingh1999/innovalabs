<template>
  <div>
    <h4>Child 1</h4>
    <div class="child1">
      <input
        v-model="input"
        id="child1-input"
        placeholder="Data from child 1"
      />
    </div>
    <button @click="updateData?.('parent', input)">Send to Parent</button>
    <button @click="updateData?.('child2', input)">Send to Child 2</button>
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
