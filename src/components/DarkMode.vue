<script setup lang="ts"> 
// import { ref, computed} from 'vue'

// const dark = ref(true);

// const lightTheme = {
//   '--bg-color': '#ffffff',
//   '--text-color': '#333333',
// }

// const darkTheme = {
//   '--bg-color': '#333333',
//   '--text-color': '#ffffff',
// }

// const currentTheme = computed<Record<string, string>>(() => (dark.value ? darkTheme : lightTheme))

</script>

<template>
  <div class="switcher switcher-1">
    <input type="checkbox" id="switcher-1">
    <label for="switcher-1"></label>
  </div>
</template>

<style scoped>

/* provides fading, very subtle */
div.switcher.switcher-1 input {
  transition: 0.25s -0.1s;
} 
div.switcher.switcher-1 input:checked:before {
  color: var(--white);
  transition: color 0.6s -0.2s;
}
/* provides a fading background */
div.switcher.switcher-1 input:not(:checked) {
  background: var(--black);
  transition: 0.6s -0.1s;
}
/* defines the inner moving shape */
div.switcher {
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 25px;
}
div.switcher label {
  z-index: 1;
  position: absolute;
  top: 10px;
  bottom: 5px;
  border-radius: 20px;
}
/* defines outer shape */
div.switcher input {
  appearance: none;
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 25px;
  background-color: var(--black);
  outline: none;
  font-family: Garamond, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
/* defines light/dark text position/color */
div.switcher input:before,
div.switcher input:after {
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--white);
}
/* defines existance of light/dark text respectively  */
div.switcher input:before {
  content: 'Light';
  left: 20px;
}
div.switcher input:after {
  content: 'Dark';
  right: 20px;
}
/* defines outer shape color from default black to white after "checked" (light<--dark) */
div.switcher.switcher-1 input:checked {
  transition: 0.6s -0.1s;
  background-color: var(--white);
}
/* defines inner shape color from light<--dark */
div.switcher.switcher-1 input:checked + label {
  left: 15px;
  right: 90px;
  background: var(--black);
  transition: left 0.6s, right 0.4s 0.2s;
}
/* changes 'Dark' text to grey during light */
div.switcher.switcher-1 input:checked:after {
  color: var(--grey);
  transition: color 0.6s;
}
/* changes 'Light' text to grey during dark */
div.switcher.switcher-1 input:not(:checked):before {
  color: var(--grey);
  transition: color 0.6s;
}
/* changes 'Dark' text to black during dark */
div.switcher.switcher-1 input:not(:checked):after {
  color: var(--black);
  transition: color 0.6s 0.2s;
}
/* defines inner shape color from light-->dark */
div.switcher.switcher-1 input:not(:checked) + label {
  left: 100px;
  right: 10px;
  background: var(--white);
  transition: left 0.4s 0.2s, right 0.6s, background 0.35s -0.1s;
}

</style>