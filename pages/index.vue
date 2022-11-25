<template>
  <Card component="abc">
    <div>
      <Heading class="px-4" title="One Light, One Child" subtitle="San Salvatore Hike">
        <div class="container rounded-lg bg-red-600 border-solid border-black border-4 text-white my-8 p-8">
          <div class="content-start flex flex-col w-full mb-4">
            <font-awesome-icon icon="triangle-exclamation" class="text-5xl text-yellow-500" />
          </div>
          <p class="font-bold mb-4">{{ $t('message.join_whatsapp_group') }}</p>
          <div class="flex w-full">
            <a class="text-white hover:text-black bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 w-full" href="https://chat.whatsapp.com/EG7nQM6dbDR5IRzqojgq2O">
              {{ $t('message.join') }}
            </a>
          </div>
        </div>
        <h2 class="font-bold mt-4 text-xl">📆 {{ $t('message.event_date') }}</h2>
        <h2 class="font-bold text-xl">⏰ {{ $t('message.event_time') }}</h2>
        <h2 class="font-bold text-xl mb-8">📍 <NuxtLink to="/itinerary" class="underline text-blue-700">{{ $t('message.departure_place') }}</NuxtLink>
        </h2>
        <h2 class="font-bold text-xl">🍕 {{ $t('message.free') }}</h2>
        <h2 class="font-bold text-xl">🧃 {{ $t('message.free') }}</h2>
        <h2><span class="font-bold text-xl mb-8">💰 {{ $t('message.free') }}</span> <span class="text-sm">({{ $t('message.donate_as_much_as_you_want') }})</span></h2>
      </Heading>
      <img class="mb-4 rounded-lg" src="/background.png" />
      <!--<nuxt-img class="mb-4 rounded-lg" src="/background.png" />-->
      <div class="px-4 mb-8">
        <p class="mb-2 text-sm font-semibold">{{ $t('message.charity_event') }}</p>
        <p class="text-sm">{{ $t('message.all_income_to_charity', { 'link': 'Mary’s Meals' }) }}</p>
      </div>
      <div class="flex flex-row">
        <NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" to="/redirect-marysmeals">
          {{ $t('message.sign_up') }}
        </NuxtLink>
        <NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" to="/contact">
          {{ $t('message.contact') }}
        </NuxtLink>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Home",
})
</script>

