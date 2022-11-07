<template>
  <div class="bg-white text-black grid p-8 rounded-lg md:max-w-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
  }
})
</script>