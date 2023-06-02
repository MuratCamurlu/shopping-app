<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Inter&display=swap");
body {
  font-family: "Dancing Script", cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
