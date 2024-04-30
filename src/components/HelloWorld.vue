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
        <li>
          <a href="https://github.com/dylanbriar/Cyber-Stars/tree/dev" class="portList__name">Cyber Stars</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp; Inspired by the New York Times' daily games, Cyber Stars is a daily space trivia quiz powered by NASA's "Astronomy Picture of the Day" (or APOD) API.</p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/coolercards/tree/main" class="portList__name">coolercards</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;As an iteration on a project known as "coolcards", this Quizlet clone includes greater test coverage, bug fixes, and some additional features. </p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/Stock-Game" class="portList__name">Stock Game</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;Created during an age of rampant financial misinformation, this paper trading platform is made to allow a paper-trading practice run before investing real money. </p>
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