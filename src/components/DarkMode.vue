<script setup lang="ts"> 
import { ref, computed} from 'vue'

const dark = ref(true);

const lightTheme = {
  '--bg-color': '#ffffff',
  '--text-color': '#333333',
}

const darkTheme = {
  '--bg-color': '#333333',
  '--text-color': '#ffffff',
}

const currentTheme = computed<Record<string, string>>(() => (dark.value ? darkTheme : lightTheme))

</script>

<template>
  <div class="darkButton" :style="currentTheme">
      <button type="button" @click="dark = dark ? true : false"> Dark mode is {{ dark }} </button>
      <p>
        This button will be for light/dark mode eventually
      </p>
  </div>
</template>

<style scoped>
.darkButton {
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>