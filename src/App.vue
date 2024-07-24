<script setup lang="ts">
// import LandingPage from './components/LandingPage.vue';
import DarkMode from './components/DarkMode.vue';
</script>

<template>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <router-link id="nameToHome" to="/">dylan briar</router-link>
    <div style="margin: auto 0 -12px;">
      <br>
      <DarkMode/>
    </div>
  </div>
  <br>
  <br>
  <div style="display: flex; justify-content: space-around;">
    <!-- evidently, these cannot be styled in the style section below for some reason -->
    <router-link to="/about">about me</router-link>
    <router-link to="/blog">blog</router-link>
    <!--  -->
  </div>
  <router-view></router-view>
</template>

<style scoped>

a {
  text-decoration: none;
  font-size: 1.3em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}

</style>
