<template>
  <Card class="md:max-w-2xl w-4/5">
    <div>
      <Heading class="mb-4" :title="$t('message.itinerary')"></Heading>
      <dl class="mb-4">
        <dt class="font-bold">{{ $t('message.departure')}}</dt>
        <dd>Lugano, Ticino</dd>
        <dt class="font-bold">{{ $t('message.arrival')}}</dt>
        <dd>Ciona, Ticino</dd>
      </dl>
      <iframe title="One Light, One Child. Itinerary map." src="https://www.google.com/maps/d/u/0/embed?mid=1OUjhY8n8Kipvw1tKY_nKzJKR7lB-EaU&ehbc=2E312F" class="h-96 w-full"></iframe>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Itinerary",
})
</script>