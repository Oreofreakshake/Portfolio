<template>
  <div class="bg-navy sticky top-0 z-50 transition ease-in-out delay-100 hover:bg-lightnavy duration-500">
  <nav class="container mx-auto text-center text-green p-7 text-2xl font-mono font-semibold">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</div>
</template>

<script>

export default{
  name:"Header",
}
</script>


