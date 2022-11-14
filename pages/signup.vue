<template>
  <Card>
  <div>
    <Heading title="Redirect" />
    <p>Redirecting to <a href="https://www.marysmeals.es/captacion-de-fondos/proyecto/martina-kraettli/one-light-one-child">Mary's Meals</a></p>
  </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "SignUp",
  middleware: 'redirect',
})
</script>