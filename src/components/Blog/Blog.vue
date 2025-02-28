<template>
  <Transition appear name="blog">
    <div>
      <img src="/cfPres3.jpg" id="pres3">
      <h2>How I Think</h2>
      <p class="blog-date">1/31/25</p>
      <router-link to="/honesty" class="blog-titles">Honesty: My Story and Others</router-link>
    </div>
  </Transition>
  <router-view></router-view>
  <br>
</template>

<style scoped>
.blog-leave-from,
.blog-enter-from {
  opacity: 0;
}
.blog-leave-to,
.blog-enter-to {
  opacity: 1;
}
.blog-leave-active,
.blog-enter-active {
  transition: opacity 1s;
}

h3 {
  text-align: center;
}

#pres3 {
  width: 100%;
  opacity: 0.9;
  padding-top: 5%;
}

.blog-titles {
  font-size: 1.5em;
}

.blog-date {
  font-size: 1.1em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 0%;
}

</style>