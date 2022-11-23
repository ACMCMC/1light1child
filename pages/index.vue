<template>
  <Card component="abc">
    <div>
      <Heading class="px-4" title="One Light, One Child" subtitle="San Salvatore Hike">
        <h2 class="font-bold mt-4 text-xl">📆 {{ $t('message.event_date') }}</h2>
        <h2 class="font-bold mb-4 text-xl">⏰ {{ $t('message.event_time') }}</h2>
      </Heading>
      <img class="mb-4 rounded-lg" src="/background.png" />
      <!--<nuxt-img class="mb-4 rounded-lg" src="/background.png" />-->
      <div class="px-4 mb-8">
        <p class="mb-2 text-sm font-semibold">{{ $t('message.charity_event') }}</p>
        <p class="text-sm">{{ $t('message.all_income_to_charity', { 'link': 'Mary’s Meals' }) }}</p>
      </div>
      <a type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" href="https://www.marysmeals.es/captacion-de-fondos/proyecto/martina-kraettli/one-light-one-child">
        {{ $t('message.find_out_more') }}
      </a>
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

