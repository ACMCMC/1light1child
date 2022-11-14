<template>
  <Card>
  <div>
    <Heading title="Conditions of participation" />
    <p>Include the conditions for participating in the event here</p>
  </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Conditions",
})
</script>