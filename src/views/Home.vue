<template>
  <div class="
    w-full
    h-screen
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate
  ">
    <h1 class="text-center text-4xl font-mono font-bold p-12 text-white">Hello!</h1>
  </div>

</template>

<script>

export default {
  name:"Home",

}
</script>

<style>
  body {
    font-family: "Inter", sans-serif;
  }

  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>