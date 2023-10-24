<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: this.$store.state.title,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-wrapper {
  max-width: 60%;
  margin: auto;
  text-align: left;
}
</style>
