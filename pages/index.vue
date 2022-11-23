<template>
  <Card component="abc">
    <div>
      <Heading class="px-4" title="One Light, One Child" subtitle="San Salvatore Hike">
        <h2 class="font-bold mt-4 text-xl">📆 {{ $t('message.event_date') }}</h2>
        <h2 class="font-bold text-xl">⏰ {{ $t('message.event_time') }}</h2>
        <h2 class="font-bold text-xl">📍 <NuxtLink to="/itinerary" class="underline text-blue-700">{{ $t('message.departure_place')}}</NuxtLink></h2>
        <h2><span class="font-bold text-xl mb-8">💰 {{$t('message.free')}}</span> <span class="text-sm">({{$t('message.donate_as_much_as_you_want')}})</span></h2>
        <h2 class="font-bold text-xl mb-8">🍕🚰 {{$t('message.free')}}</h2>
      </Heading>
      <img class="mb-4 rounded-lg" src="/background.png" />
      <!--<nuxt-img class="mb-4 rounded-lg" src="/background.png" />-->
      <div class="px-4 mb-8">
        <p class="mb-2 text-sm font-semibold">{{ $t('message.charity_event') }}</p>
        <p class="text-sm">{{ $t('message.all_income_to_charity', { 'link': 'Mary’s Meals' }) }}</p>
      </div>
      <NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" to="/redirect-marysmeals">
        {{ $t('message.sign_up') }}
      </NuxtLink>
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

