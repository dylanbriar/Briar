<script setup lang="ts">
// import { ref } from 'vue'

// const count = ref(false)

</script>
<!-- window.scrollTo(0, 0) -->
<template>
  <div id="portfolio">
    <h1>dylan briar</h1>
    <div class="portWelcome">
      <br>
      <p>hello there! it looks like you've caught the very first iteration of my portfolio website.<br><br>
      there's not much to look at here for now, but that's because it's fresh and incomplete; I wanted to have something up and running while I work to achieve the full vision I have for it.<br><br>
      so while we wait for the next iteration to be deployed, let's talk about who I am, and what I can do.</p>
    </div>
    <div class="aboutMe">
      <h2>re: dylan</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; I am a software engineer with a passion first and foremost for building and maintaining <b>secure</b> applications. 
        As every engineer's toolbox grows with each library, framework, language, etc., so does the arsenal of hackers. It is my goal to make sure the
        applications I construct are fortified well. <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Beyond that, I am a person with a love for people. <b>Hospitality</b> is a core value of mine; I want others to feel welcome, appreciated, seen, and heard. 
        As a team member, I look for opportunities to mentor and encourage. As an engineer, I look for opportunities to better the UX. Every interaction should be a net positive.
      </p>
    </div>
    <div class="portList">
      <h2>re: portfolio</h2>
      <ul>
        <li>
          <a href="https://github.com/oslabs-beta/BuQL" class="portList__name">BuQL</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;BuQL is a lightweight npm package for server-side GraphQL query-response caching in the Bun runtime environment, with the goal of bettering API management for Bun developers. </p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/Cyber-Stars/tree/dev" class="portList__name">Cyber Stars</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp; Inspired by the New York Times' daily games, Cyber Stars is a daily space trivia quiz powered by NASA's "Astronomy Picture of the Day" (or APOD) API. Guess the title of the image!</p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/coolercards/tree/main" class="portList__name">coolercards</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;As an iteration on a project known as "coolcards", this Quizlet clone includes greater test coverage, bug fixes, and some additional features than the project it spawned from. Create a deck and get studying!</p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/Stock-Game" class="portList__name">Stock Game</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;Created during an age of rampant financial misinformation, this paper trading platform is made to allow those interested in the stock market a practice run before investing real money. </p>
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