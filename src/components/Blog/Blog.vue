<template>
  <Transition appear name="blog">
    <div>
      <img src="../../../assets/pres3.png" id="pres3">
      <h2>How I Think</h2>
        <h3>coming soon!</h3>
    </div>
  </Transition>
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

</style>