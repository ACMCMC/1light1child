<template>
  <Card>
    <div>
      <div class="mb-8">
        <h1 class="font-bold font-display mb-4 text-4xl">{{ $t('message.about') }}</h1>
        <p class="text-sm">{{ $t('message.about_intro') }}</p>
      </div>
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