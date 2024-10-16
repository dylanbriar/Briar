<script setup lang="ts">
// import LandingPage from './components/LandingPage.vue';
import DarkMode from './components/DarkMode.vue';

type ShortcutFunction = (e: KeyboardEvent) => void;

//interface for the shortcuts object
interface Shortcuts {
  [key: string]: ShortcutFunction;
}

const shortcuts: Shortcuts = {
  'ctrl+/': function(e: KeyboardEvent) {
    e.preventDefault();
    console.log('Ctrl+/ was pressed');
  },
};

function handleKeyPress(e: KeyboardEvent): void {
  // Create a string representation of the pressed keys
  const pressed: string[] = [];
  if (e.ctrlKey) pressed.push('ctrl');
  if (e.shiftKey) pressed.push('shift');
  if (e.altKey) pressed.push('alt');
  if (e.metaKey) pressed.push('meta');
  
  // Add the key if it's not a modifier
  if (![16, 17, 18, 91, 93].includes(e.keyCode)) {
    pressed.push(e.key.toLowerCase());
  }
  
  const keyCombo = pressed.join('+');
  
  if (keyCombo in shortcuts) {
    shortcuts[keyCombo](e);
  }
}

document.addEventListener('keydown', handleKeyPress);

</script>

<template>
  <Transition appear name="topBar">
    <div> <!--this div serves no purpose other than to make the transition work. kind of sloppy. ill fix when i "get good" -->
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
        <router-link to="/about">about</router-link>
        <p id="bars">|</p>
        <router-link to="/portfolio">portfolio</router-link>
        <p id="bars">|</p>
        <router-link to="/blog">blog</router-link>
        <!--  -->
      </div>
    </div>
  </Transition>
  <router-view></router-view> <!--you may be wondering, why not put a transition around this router view instead of each file individually? well for some reason it bugs out-->
  <div id="portSignOff">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To hear about updates to this website, or updates from my engineering journey in general, check out my <a id="socialsTemp" href="https://twitter.com/DylanBriar">profile on X</a> or <a id="socialsTemp" href="https://www.linkedin.com/in/dylanbriar/">LinkedIn.</a></p>
      <p id="comingSoon">Coming Soon: <br> Socials Dropdown Button <br> Blog posts <br> Fancy Styling <br> (i'm technically fullstack but i'm definitely more comfy on the backend) <br> (don't laugh at me)</p>
  </div>
</template>

<style scoped>


.topBar-leave-from,
.topBar-enter-from {
  opacity: 0;
}
.topBar-leave-to,
.topBar-enter-to {
  opacity: 1;
}
.topBar-leave-active,
.topBar-enter-active {
  transition: opacity 1s;
}

#bars {
  margin: 0;
  font-size: 22px;
  font-weight: 600
}

a {
  text-decoration: none;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}

#socialsTemp {
  font-size: 16px;
}

#comingSoon{
  text-align: center;
  font-size: 14px;
  opacity: 0.5;
}

#portSignOff {
  text-align: center;
  font-size: 16px;
}

</style>
