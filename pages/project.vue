<template>
  <Card>
    <Heading class="mb-4" :title="$t('message.project')" :subtitle="$t('message.project_intro')"></Heading>
    <h2 class="mb-4">{{ $t('message.project_description') }}</h2>
    <NuxtLink to="/marys-meals" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">{{ $t('message.find_out_more') }}</NuxtLink>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Project",
})
</script>