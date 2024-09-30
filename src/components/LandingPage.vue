<script setup lang="ts">

</script>
<!-- window.scrollTo(0, 0) -->
<template>
    <br>
    <div id="pic">
      <h3 id="helloThere">hello there! welcome on in, <br>make yourself at home!</h3>
      <img src="../../assets/me.jpg" width="30%" height="auto" alt="me, a 20 something Caucasian male with a strawberry blonde manbun and red-tinted beard to match wearing a black shirt dotted with flowers, smiling at camera">
    </div>
    <div>
        <p>Were you just looking for a resume? <a href="/assets/resume.pdf" download="/assets/resume.pdf">Got it right here for you!</a></p>
    </div>
</template>


<style scoped>

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