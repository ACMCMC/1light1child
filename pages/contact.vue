<template>
  <Card>
    <div>
      <Heading class="mb-8" :title="$t('message.contact')" :subtitle="$t('message.reach_out_to_us')"></Heading>
      <div>
        <p><a class="underline text-blue-700" href="mailto:1light1child@gmail.com">1light1child@gmail.com</a></p>
        <p>WhatsApp: <a class="underline text-blue-700" href="https://api.whatsapp.com/send/?phone=393495519737">(+39) 34 95 51 97 37</a></p>
      </div>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Contact",
})
</script>