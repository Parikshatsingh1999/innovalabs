<template>
  <div class="main-page">
    <div v-for="(route, index) in routes" :key="`route-${index}`">
      <h2>
        <router-link :to="route.path">{{ route.name }} </router-link>
      </h2>
      <p>{{ route.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$store.getters.getRoutes,
    };
  },
};
</script>

<style scoped>
.main-page p {
  font-size: 18px;
}
.main-page > div {
  margin-bottom: 4%;
}
</style>
