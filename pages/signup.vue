<template>
  <!--<Card>
  <div>
    <Heading title="Redirect" />
    <p>Redirecting to <a href="https://www.marysmeals.es/captacion-de-fondos/proyecto/martina-kraettli/one-light-one-child">Mary's Meals</a></p>
  </div>
  </Card>-->
  <Card>
    <div class="flex flex-col">
      <NuxtLink to="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-4">
        {{$t('message.information')}}
      </NuxtLink>
      <NuxtLink to="/redirect-marysmeals" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
        {{$t('message.sign_up')}}
      </NuxtLink>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "SignUp",
  //middleware: 'redirect',
})
</script>