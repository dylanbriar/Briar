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
    <router-link to="/about">about</router-link>
  <p id="bars">|</p>
    <router-link to="/portfolio">portfolio</router-link>
  <p id="bars">|</p>
    <router-link to="/blog">blog</router-link>
    <!--  -->
  </div>
  <router-view></router-view>
  <div id="portSignOff">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To hear about updates to this website, or updates from my engineering journey in general, check out my <a id="socialsTemp" href="https://twitter.com/DylanBriar">profile on X</a> or <a id="socialsTemp" href="https://www.linkedin.com/in/dylanbriar/">LinkedIn.</a></p>
      <p id="comingSoon">Coming Soon: <br> Socials Dropdown Button <br> Blog posts <br> Fancy Styling <br> (i'm technically fullstack but i'm definitely more comfy on the backend) <br> (don't laugh at me)</p>
  </div>
</template>

<style scoped>

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
