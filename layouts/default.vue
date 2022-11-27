<template>
  <div>
    <Navbar />
    <main class="bg-white min-h-screen w-screen pt-32 flex flex-col justify-center items-center md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Card class="mb-16 bg-blue-700 border-solid border-black border-4 text-white">
          <div class="items-start flex flex-col w-full mb-4">
            <font-awesome-icon icon="circle-info" class="text-5xl" />
          </div>
          <p class="font-bold mb-2">{{ $t('message.event_finished') }}</p>
          <p class="mb-2">{{ $t('message.thanks_body') }}</p>
          <p class="font-bold">{{ $t('message.thanks_for_participating') }}</p>
      </Card>
      <Nuxt />
      <div class="mt-12 mb-6 w-full text-black md:text-white text-xs flex flex-col items-center">
        <p>{{ $t('message.copyright_notice') }}</p>
        <NuxtLink class="underline" to="conditions">{{ $t('message.general_conditions_participation') }}</NuxtLink>
        <NuxtLink class="underline" to="data-protection">{{ $t('message.data_protection') }}</NuxtLink>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';

export default Vue.extend({
})
</script>