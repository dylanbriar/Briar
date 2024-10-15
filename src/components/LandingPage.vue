<script setup lang="ts">
</script>
<!-- window.scrollTo(0, 0) -->
<template>
  <Transition appear name="lP">
    <div>
    <br>
      <div id="pic">
        <h3 id="helloThere">hello there! welcome on in, <br>make yourself at home! <br><br>My name is Dylan Ezra Briar, and I am a software developer with a heart for people and communication.</h3>
        <img src="../../assets/me.jpg" fetchpriority="high" width="30%" height="auto" alt="me, a 20 something Caucasian male with a strawberry blonde manbun and red-tinted beard to match wearing a black shirt dotted with flowers, sitting on some stairs and smiling at camera">
      </div>
      <br>
      <br>
      <div id="pic">
        <img src="../../assets/meBoat.jpg" fetchpriority="high" width="30%" height="auto" alt="me, a 20 something Caucasian male with a strawberry blonde manbun and red-tinted beard to match wearing a white shirt with a black floral pattern, leaning on the railing of a boat and smiling at camera">
        <p style="max-width: 60%;"> Writing code is always a YouTube tutorial or AI chatbot away, but empathetic software engineering is the next level that I bring to any table I join. <br><br> I'm currently working on a few things, including this website, <a href="https://github.com/oslabs-beta/BuQL">BuQL</a>, and some <router-link to="/blog">blog posts</router-link></p>
      </div>
      <br>
      <div>
        <p>Were you just looking for a resume? <a href="/assets/resume.pdf" download="/assets/resume.pdf">Got it right here for you!</a></p>
      </div>
    </div>
    </Transition>
</template>


<style scoped>

.lP-leave-from,
.lP-enter-from {
  opacity: 0;
}
.lP-leave-to,
.lP-enter-to {
  opacity: 1;
}
.lP-leave-active,
.lP-enter-active {
  transition: opacity 1s;
}

#pic {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#helloThere {
  max-width: 50%;
}


p {
  font-size: 20px;
}

h3 {
  font-size: 24px;
  font-weight: 500;
}

/* ul {
  padding-inline-start: 5%;
  padding-inline-end: 3%;
  overflow-y: scroll;
  max-height: 400px;
  background-color: #7a7a7a36;
  border-radius: 4%;
  border-left: 8px double rgb(107, 107, 107)
} */

</style>