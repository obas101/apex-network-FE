<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>
<style>
#App {
  padding: 0;
  margin: 0;
}
</style>