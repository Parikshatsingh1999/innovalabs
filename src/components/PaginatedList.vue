<template>
  <div class="pagination-list">
    <h3>{{ name }}</h3>
    <div class="list">
      <ul class="single-item" v-for="item in paginatedData" :key="item.id">
        <li>
          <h5>{{ item.title }}</h5>
          <p>{{ item.body }}</p>
        </li>
      </ul>
      <div class="pagination" v-if="dataList.length > limit">
        <div
          class="page-action"
          :class="`${currentPage === pageCount ? 'disabled' : ''}`"
          @click="currentPage != pageCount && currentPage++"
        >
          <b>Next ></b>
        </div>
        <div
          class="page-number"
          v-for="num in pageCount"
          :key="num"
          :class="`${num == currentPage ? 'selected' : ''}`"
          @click="changePage(num)"
        >
          <div>{{ num }}</div>
        </div>
        <div
          class="page-action"
          :class="`${currentPage === 1 ? 'disabled' : ''}`"
          @click="currentPage != 1 && currentPage--"
        >
          <b>{{ "<" }} Prev</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Paginated List",
      currentPage: 1,
      limit: 10,
    };
  },
  computed: {
    dataList() {
      return this.$store.getters.getList || [];
    },
    paginatedData() {
      let result = JSON.parse(JSON.stringify(this.dataList));
      if (result.length) {
        const start = (this.currentPage - 1) * this.limit;
        result = result.slice(start, start + this.limit);
      }
      return result;
    },
    pageCount() {
      return Math.ceil((this.dataList?.length || 0) / 10);
    },
  },
  mounted() {
    this.$store.dispatch("getList");
  },
  methods: {
    changePage(value) {
      this.currentPage = value;
    },
  },
};
</script>

<style>
.pagination-list {
  margin: 4% 0;
}
.pagination {
  display: flex;
  margin-top: 4%;
}
.pagination > div {
  margin-right: 2%;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 12px;
}
.page-number {
  cursor: pointer;
}
.page-action.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.page-action {
  cursor: pointer;
}
.page-number.selected {
  background-color: lightskyblue;
  color: white;
}
</style>
