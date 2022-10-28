<template>
  <main class="bg-white md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex items-center justify-center h-screen">
    <!--<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-black grid p-12 rounded-lg text-white">-->
    <div class="bg-white text-black grid p-12 rounded-lg md:max-w-md">
      <div class="px-4">
        <h1 class="font-bold mb-4 text-4xl">One Light, One Child</h1>
        <h2 class="font-bold mb-4">San Salvatore Hike</h2>
        <h2 class="font-bold mb-4">{{ $t('message.event_date') }}</h2>
      </div>
      <img class="mb-4 rounded-lg" src="/background.png"/>
      <a type="button"
        class="ease-in-out text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-0 dark:bg-white dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
        href="https://www.marysmeals.es/captacion-de-fondos/su-cuenta"
      >
        {{ $t('message.find_out_more') }}
      </a>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hero'
})
</script>