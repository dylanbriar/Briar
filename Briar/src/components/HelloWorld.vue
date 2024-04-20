<script setup lang="ts">
import { ref } from 'vue'

const count = ref(false)
</script>

<template>
  <h1>dylan briar</h1>

  <div class="card">
    <button type="button" @click="count = count ? false : true">count is {{ count }}</button>
    <p>
      This button will be for light/dark mode eventually
    </p>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>


<!-- keeping this here as an example for later
<style scoped>
.read-the-docs {
  color: #cd1313;
}
</style> -->