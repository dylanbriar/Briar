<template>
  <Transition appear name="port">
    <div class="portList">
      <img src="/cfPres2.jpg" id="pres2">
      <h2>What I Do</h2>
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
  </Transition>
  <br>
</template>

<style scoped>

.port-leave-from,
.port-enter-from {
  opacity: 0;
}
.port-leave-to,
.port-enter-to {
  opacity: 1;
}
.port-leave-active,
.port-enter-active {
  transition: opacity 1s;
}

.portList__name {
  font-size: 1.7em;
}

#pres2 {
  width: 100%;
  opacity: 0.9;
  padding-top: 6%;
}

/* h2 {
  /* lets try to smooth out the transitions 
} */

</style>