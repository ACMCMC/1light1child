<template>
  <div class="mb-4">
      <h1 class="font-bold font-display mb-2 text-4xl transition-all decoration-indigo-500/[.33] hover:decoration-indigo-500 animate-focus-in-expand">{{ title }}</h1>
      <h2 v-if="subtitle" class="font-bold mb-2 text-xl">{{ subtitle }}</h2>
      <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Heading',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  }
})
</script>