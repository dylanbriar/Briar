<script setup lang="ts">
import { ref } from 'vue'

const count = ref(false)
</script>

<template>
  <h1>dylan briar</h1>

  <div class="welc-statement">
    <br>
    <p>Hello there! It looks like you've caught the very first iteration of my portfolio website.</p>
    <p>There's not much to look at here for now, but that's because it's fresh and I wanted to make sure I had something up and running while I work on the fully fleshed out version.</p>
    <p>So while we wait for the full version to be deployed, let's check out my portfolio!</p>
  </div>
  <div class="portfolio">
    <ul>
      <li>
        <a href="https://github.com/oslabs-beta/BuQL">BuQL</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;our baby</p>
      </li>
    </ul>
  </div>
  <!-- <div class="card">
    <button type="button" @click="count = count ? false : true">Dark mode is {{ count }}</button>
    <p>
      This button will be for light/dark mode eventually
    </p>
  </div> -->
</template>


<!-- keeping this here as an example for later
<style scoped>
.read-the-docs {
  color: #cd1313;
}
</style> -->