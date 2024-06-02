<script setup lang="ts">

</script>
<!-- window.scrollTo(0, 0) -->
<template>
  <div id="portfolio">
    <div class="portWelcome">
      <br>
      <p>hello there! it looks like you've caught one of the first iterations of my portfolio website.<br><br>
      there's not much to look at here for now, but that's because it's fresh and incomplete; I wanted to have something up and running while I work to achieve the full vision I have for it.<br><br>
      so while we wait for the next iteration to be deployed, let's talk about who I am, and what I can do.</p>
    </div>
    <div class="aboutMe">
      <h2>re: dylan</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; I am a software engineer with a passion first and foremost for building and maintaining <b>secure</b> applications. 
        As every engineer's toolbox grows with each library, framework, language, etc., so does the arsenal of hackers. It is my goal to make sure the
        applications I construct are fortified well. To see some talks I did on security, check out my <a href="https://youtube.com/@Dylan_Briar?si=9_rzJNRIbPfEy5W-">YouTube channel. </a> <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Beyond that, I am a person with a love for people. <b>Empathy</b> is key in my communication, even in criticism; I want others to feel welcome, appreciated, seen, and heard. 
        As a team member, I look for opportunities to mentor and encourage. As an engineer, I look for opportunities to better the UX. Every interaction should be a net positive. <br><br>
        For a more technical view, <a href="/assets/resume.pdf" download="/assets/resume.pdf">download my resume.</a>
      </p>
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
  font-size: 1.5em;
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