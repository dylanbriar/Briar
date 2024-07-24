<script setup lang="ts">

</script>
<!-- window.scrollTo(0, 0) -->
<template>
  <div id="portfolio">
    <div class="portWelcome">
      <br>
      <div id="pic">
        <h3 id="helloThere">hello there! nice to meet you. <br>this is me --></h3>
        <img src="../../assets/meSmall.jpg" alt="me, a 20 something Caucasian male with a strawberry blonde manbun and red-tinted beard to match wearing a black shirt dotted with flowers, smiling at camera">
      </div>
      <p>there's not much to look at here for now, but this thing is still fresh and incomplete; I wanted to have something up and running while I work to achieve the full vision I have for it.<br><br>
      so while we wait for the next iteration to be deployed, feel free to peruse at your leisure.</p>
    </div>
    <div>
        <p style="text-align: center;">Think I'm a pretty neat guy? <a href="/assets/resume.pdf" download="/assets/resume.pdf">Take a peek at my resume!</a></p>
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
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;As an iteration on a website known as "coolcards", this Quizlet clone includes greater test coverage, bug fixes, and some additional features than the project it spawned from. Create a deck and get studying!</p>
        </li>
        <li>
          <a href="https://github.com/dylanbriar/The-Stockyards" class="portList__name">The Stockyards</a>
          <p class="portList__desc">&nbsp;&nbsp;&nbsp;&nbsp;Created by two Texans and a couple out-of-towners, this paper trading platform is made to allow those interested in the stock market a practice run before investing real money. </p>
        </li>
      </ul>
    </div>
    <div id="portSignOff">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To hear about updates to this website, or updates from my engineering journey in general, check out my <a href="https://twitter.com/DylanBriar">profile on X</a> or <a href="https://www.linkedin.com/in/dylanbriar/">LinkedIn.</a></p>
      <p id="comingSoon">Coming Soon: <br> Socials Dropdown Button <br> Blog posts <br> Fancy Styling <br> (i'm technically fullstack but i'm definitely more comfy on the backend) <br> (don't laugh at me)</p>
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