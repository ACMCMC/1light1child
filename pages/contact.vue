<template>
  <Card>
    <div>
      <Heading class="mb-8" :title="$t('message.contact')" :subtitle="$t('message.reach_out_to_us')"></Heading>
      <div>
        <div class="container rounded-lg bg-red-600 border-solid border-black border-4 text-white my-8 p-8">
          <div class="items-start flex flex-col w-full mb-4">
            <font-awesome-icon icon="triangle-exclamation" class="text-5xl text-yellow-500" />
          </div>
          <p class="font-bold mb-4">{{ $t('message.join_whatsapp_group') }}</p>
          <div class="flex w-full">
            <a class="text-white hover:text-black bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 w-full" href="https://chat.whatsapp.com/EG7nQM6dbDR5IRzqojgq2O">
              {{ $t('message.join') }}
            </a>
          </div>
        </div>
        <p>WhatsApp: <a class="underline text-blue-700" href="https://api.whatsapp.com/send/?phone=393495519737">(+39) 34 95 51 97 37</a></p>
        <p><a class="underline text-blue-700" href="mailto:1light1child@gmail.com">1light1child@gmail.com</a></p>
        <p>
          <font-awesome-icon icon="instagram" /><a class="underline text-blue-700" href="https://www.instagram.com/1light1child/">Instagram</a>
        </p>
        <p>
          <!--<font-awesome-icon icon="fa-solid fa-brands fa-facebook" />--><a class="underline text-blue-700" href="https://www.facebook.com/1light1child">Facebook</a>
        </p>
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