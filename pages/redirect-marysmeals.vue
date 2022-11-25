<template>
  <Card class="md:max-w-2xl w-4/5">
    <div>
      <Heading class="mb-8" :title="$t('message.warning')" :subtitle="$t('message.warning_redirect_marysmeals')"></Heading>
      <div>
        <img src="/marysmeals_espanol.png" class="mb-8 rounded-lg" />
      </div>
      <NuxtLink to="/perform-redirect-marysmeals" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
        {{$t('message.got_it')}}
      </NuxtLink>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "MarysMealsRedirect",
})
</script>