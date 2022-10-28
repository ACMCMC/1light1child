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
