<script setup lang="ts">
</script>

<template>
  <Transition appear name="abt">
  <div>
    <img src="../../assets/cfPres.jpg" id="pres1">
    <h2>Who I Am</h2>
    <h3>I am a software engineer with a passion first and foremost for <b>people</b>.</h3>
      <p>Before my career as an engineer, I spent years in customer service and event management. Bad customer service or hospitality always bothers me, and that includes digitally. Inconsiderate UI/UX can ruin someone's day, driving business way, which ruins my day. Let's fix that.
      <br><br> This also shows itself in how I perform as a team member. I hear the term "empathetic engineering," thrown around, but how often is it applied in its truest sense? Superiors, teammates, and those that look to me for leadership will feel welcome, 
      appreciated, seen, and heard.</p>
    <h3 style="margin-top: 6%;">Beyond that, I am an engineer characterized by <b>curiosity</b>.</h3>
      <p>I am not satisfied with the surface level. <br><br>
        I don't use React because it's popular, or because it's what I was taught (actually I'm not even a big fan of React, but that's for another time). It is a tool, and I use it only when I have a problem that it solves.<br><br>
        It seems that AI has encouraged some engineers to abandon fundamentals, reaching for a framework because "that's just what you do." While I love using them, I'm not satisfied with just knowing frameworks, or even languages; I want to know why they work. <br><br>
        I don't want to stop at "under the hood," I want to dive down into the pistons of the engine.
      </p><br>
  </div>
  </Transition>
</template>

<style scoped>

.abt-leave-from,
.abt-enter-from {
  opacity: 0;
}
.abt-leave-to,
.abt-enter-to {
  opacity: 1;
}
.abt-leave-active,
.abt-enter-active {
  transition: opacity 1s;
}

p {
  font-size: 1.1em;
}

h3 {
  font-size: 1.4em;
  font-weight: 500;
}

#pres1 {
  width: 90%;
  opacity: 0.9;
  padding-top: 5%;
}
</style>