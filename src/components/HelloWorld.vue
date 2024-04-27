<script setup lang="ts">
import { ref } from 'vue'

const count = ref(false)

</script>

<template>
  <div id="portfolio">
    <h1>dylan briar</h1>
    <div class="portWelcome">
      <br>
      <p>hello there, it looks like you've caught the very first iteration of my portfolio website.</p>
      <p>there's not much to look at here for now, but that's because it's fresh and incomplete; i wanted to have something up and running while i work to achieve the full vision i have for it.</p>
      <p>so while we wait for the next iteration to be deployed, let's check out my portfolio:</p>
    </div>
    <div class="portList">
      <ul>
        <li>
          <a href="https://github.com/oslabs-beta/BuQL" class="portList__name">BuQL</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;BuQL is a lightweight npm package for server-side GraphQL query caching in the Bun runtime environment. </p>
        </li>
      </ul>
    </div>
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