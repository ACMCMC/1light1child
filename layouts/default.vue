<template>
  <div>
    <Navbar />
    <main class="bg-white min-h-screen w-screen pt-32 flex flex-col justify-center items-center md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Nuxt />
      <div class="mt-12 mb-6 w-full text-black md:text-white text-xs flex flex-col items-center">
        <p>{{ $t('message.copyright_notice') }}</p>
        <NuxtLink class="underline" to="conditions">{{ $t('message.general_conditions_participation') }}</NuxtLink>
        <NuxtLink class="underline" to="data-protection">{{ $t('message.data_protection') }}</NuxtLink>
      </div>
    </main>
  </div>
</template>