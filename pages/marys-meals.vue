<template>
  <Card>
    <div>
      <Heading class="mb-8" title="Mary's Meals" :subtitle="$t('message.marys_meals_intro')"></Heading>
      <div>
        <h2 class="mb-2">{{ $t('message.marys_meals_description') }}</h2>
      </div>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "MarysMeals",
})
</script>