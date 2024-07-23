<script setup lang="ts">
import LandingPage from './components/LandingPage.vue';
import DarkMode from './components/DarkMode.vue';
</script>

<template>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <h1>dylan briar</h1>
    <div style="margin: auto 0 21px;">
      <DarkMode/>
    </div>
  </div>
  <!-- <div style="display: flex; justify-content: space-around;">
    <a id="test">about</a>
    <a>portfolio</a>
    <a>blog</a>
  </div> -->
  <LandingPage/>
</template>

<style scoped>

#test {
  font-size:blueviolet;
}

</style>
