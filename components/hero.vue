<template>
  <main class="bg-white md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen flex flex-col justify-center items-center pt-16">
    <!--<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-black grid p-12 rounded-lg text-white">-->
    <div class="bg-white text-black grid p-8 rounded-lg md:max-w-md">
      <div class="px-4">
        <h1 class="font-bold mb-4 text-4xl">One Light, One Child</h1>
        <h2 class="font-bold mb-4">San Salvatore Hike</h2>
        <h2 class="font-bold mb-4">{{ $t('message.event_date') }}</h2>
      </div>
      <img class="mb-4 rounded-lg" src="/background.png"/>
      <h2 class="mb-8 px-4 text-sm font-semibold">{{ $t('message.all_income_to_charity', { 'link': 'Mary’s Meals'}) }}</h2>
      <a type="button"
        class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-0 dark:bg-white dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
        href="https://www.marysmeals.es/captacion-de-fondos/su-cuenta"
      >
        {{ $t('message.find_out_more') }}
      </a>
    </div>
    <p class="mt-12 mb-6 px-auto text-black md:text-white text-xs">{{ $t('message.copyright_notice') }}</p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hero'
})
</script>