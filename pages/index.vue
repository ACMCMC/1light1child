<template>
  <Hero></Hero>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/hero.vue';

export default Vue.extend({
    name: "Welcome",
    components: { Hero }
})
</script>

<!--<script lang="ts">
export default {
    head() {
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet">
          }
        ]
      }
    }
  }
</script>-->
