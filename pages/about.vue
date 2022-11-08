<template>
  <Card>
    <div>
      <Heading class="mb-8" :title="$t('message.about')" :subtitle="$t('message.about_intro')"></Heading>
      <div>
        <h2 class="font-bold mb-2">{{ $t('message.members') }}</h2>
        <ul class="list-disc pl-4" v-for="name in names" :key="name">
          <li>{{ name }}</li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

const names = [
  'Martina Krättli Torrens',
  'Aldán Creo Mariño',
  'Georgina Cortés Pagès',
  'Tiia Maukonen',
  'Alessandro Steccanella',
  'Chiara Biagi'
]

export default Vue.extend({
  name: "About",
  data() {
    return {
      names: names.sort(() => Math.random() - 0.5)
    }
  },

})
</script>