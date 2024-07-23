<script setup lang="ts">

</script>
<!-- window.scrollTo(0, 0) -->
<template>
  <div id="portfolio">
    <div class="portWelcome">
      <br>
      <div id="pic">
        <h3 id="helloThere">hello there! it looks like you've caught one of the first iterations of my portfolio website.</h3>
        <img src="../../assets/meSmall.jpg" alt="me, a 20 something Caucasian male with a strawberry blonde manbun and red-tinted beard to match wearing a black shirt dotted with flowers, smiling at camera">
      </div>
      <p>there's not much to look at here for now, but that's because it's fresh and incomplete; I wanted to have something up and running while I work to achieve the full vision I have for it.<br><br>
      so while we wait for the next iteration to be deployed, let's talk about who I am, and what I can do.</p>
    </div>
    <div class="aboutMe">
      <h2>re: dylan</h2>
      <h3>I am a software engineer with a passion first and foremost for <b>people</b>.</h3>
        <p>Before my career as an engineer, I spent years in the customer service industry. Bad customer service always bothers me, and that includes digitally. Inconsiderate UI/UX can ruin someone's day. Let's fix that.
        <br><br> This also shows itself in how I perform as an employee. I hear the term "empathetic engineering," thrown around often, but how often is it applied in its truest sense? I want others to feel welcome, 
        appreciated, seen, and heard.<br> </p>
      <h3>Beyond that, I am an engineer characterized by <b>curiosity</b>.</h3>
        <p>I am not satisfied with the surface level. <br><br>
          I don't use React because it's popular, or because it's what I was taught (actually I'm not even a big fan of React, but that's for another time). It is a tool, and I use it only if and when I need THAT tool.<br><br>
          Engineering is facing a crisis in which newer engineers are often abandoning fundamentals, reaching for a framework because "that's just what you do." I'm not satisfied with frameworks, or even languages; I want to know why they work. 
        </p><br>
        <p style="text-align: center;">For a more technical view, <a href="/assets/resume.pdf" download="/assets/resume.pdf">download my resume.</a></p>
    </div>
    <div class="portList">
      <h2>re: portfolio</h2>
      <ul style="list-style-type: none;">
        <br>
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
          <a href="https://github.com/dylanbriar/The-Stockyards" class="portList__name">The Stockyards</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;Created by two Texans and a couple out-of-towners, this paper trading platform is made to allow those interested in the stock market a practice run before investing real money. </p>
        </li>
      </ul>
    </div>
    <div id="portSignOff">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To hear about updates to this website, or updates from my engineering journey in general, check out my <a href="https://twitter.com/DylanBriar">profile on X</a> or <a href="https://www.linkedin.com/in/dylanbriar/">LinkedIn.</a></p>
      <p id="comingSoon">Coming Soon: <br> Socials Dropdown Button <br> Separate Pages (including a blog!)</p>
    </div>
  </div>
</template>


<style scoped>

#portfolio {
  display: flex;
  flex-direction: column;
}

#pic {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#helloThere {
  max-width: 50%;
}

.portList__name {
  font-size: 1.7em;
}

#portSignOff {
  text-align: center;
  font-size: .9em;
}

#comingSoon{
  text-align: center;
  font-size: 1.1em;
  opacity: 0.5;
}

p {
  font-size: 1.2em;
}

h3 {
  font-size: 1.4em;
  font-weight: 500;
}

ul {
  padding-inline-start: 5%;
  padding-inline-end: 3%;
  overflow-y: scroll;
  max-height: 400px;
  background-color: #7a7a7a36;
  border-radius: 4%;
  /* border-left: 8px double rgb(107, 107, 107) */
}

</style>