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
  <Transition appear name="page">
    <div> <!--this div serves no purpose other than to make the transition work. kind of sloppy. ill fix when i "get good" -->
      <div id="title-and-switcher">
        <router-link id="name-to-home" to="/">dylan briar</router-link>
        <div style="margin: auto 0 -12px;">
          <br>
          <DarkMode/>
        </div>
      </div>
      <br>
      <br>
      <nav style="display: flex; justify-content: space-around;">
        <router-link to="/about" class="nav-link">about</router-link>
        <p id="bars">|</p>
        <router-link to="/portfolio" class="nav-link">portfolio</router-link>
        <p id="bars">|</p>
        <router-link to="/blog" class="nav-link">blog</router-link>
        <!--  -->
      </nav>
    </div>
  </Transition>
  <router-view></router-view> <!--you may be wondering, why not put a transition around this router view instead of each file individually? well for some reason it bugs out-->
  <div id="portSignOff">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To hear about updates to this website, or updates from my engineering journey in general, check out my <a id="socialsTemp" href="https://twitter.com/DylanBriar">profile on X</a> or <a id="socialsTemp" href="https://www.linkedin.com/in/dylanbriar/">LinkedIn.</a></p>
      <p id="comingSoon">Coming Soon: <br> Socials Dropdown switcher <br> Blog posts <br> Fancy Styling <br> (i'm technically fullstack but i'm definitely more comfy on the backend) <br> (don't laugh at me)</p>
  </div>
</template>

<style scoped>

#title-and-switcher {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
}

.page-leave-from,
.page-enter-from {
  opacity: 0;
}
.page-leave-to,
.page-enter-to {
  opacity: 1;
}
.page-leave-active,
.page-enter-active {
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

@media (max-width: 350px) {
  #title-and-switcher {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #name-to-home {
    margin-bottom: 9%;
  }
}

/* if your screen is this skinny, please contact me I have so many questions for you */
@media (max-width: 214px) {
  #name-to-home {
    display: none;
    visibility: hidden;
  }
}

</style>
