<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="page-wrapper">
      <div class="parent-wrap">
        <div>
          <h4>Parent Component</h4>
          <div class="parent">
            <input
              id="parent-input"
              v-model="parent"
              placeholder="Data from Parent"
            />
          </div>
          <button @click="updateData?.('child1', parent)">
            Send to Child 1
          </button>
          <button @click="updateData?.('child2', parent)">
            Send to Child 2
          </button>
        </div>
      </div>
      <div class="child-comps">
        <child-one :updateData="updateData" :value="child1" />
        <child-two :updateData="updateData" :value="child2" />
      </div>
    </div>
  </div>
</template>

<script>
import childOne from "./ChildOne.vue";
import childTwo from "./ChildTwo.vue";

export default {
  components: {
    childOne,
    childTwo,
  },
  data() {
    return {
      name: "Communication Between Components",
      parent: "",
      child1: "",
      child2: "",
    };
  },
  methods: {
    async updateData(key, value) {
      await this.$nextTick();
      this[key] = value;
    },
  },
};
</script>

<style scoped>
.parent-wrap,
.child-comps {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.page-wrapper * {
  font-size: 18px;
}

input {
  margin-bottom: 2%;
}
.page-wrapper {
  padding-left: 2%;
}
</style>
