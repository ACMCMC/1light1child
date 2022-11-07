<template>
  <div class="bg-white text-black grid p-8 rounded-lg md:max-w-md">
    <h1 v-if="error.statusCode === 404" class="font-bold font-display mb-4 text-4xl">404</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="font-bold mt-4">Go to the Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  //layout: 'blog' // you can set a custom layout for the error page
}
</script>