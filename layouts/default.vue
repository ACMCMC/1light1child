<template>
  <div>
    <Navbar />
    <main class="bg-white min-h-screen w-screen pt-32 flex flex-col justify-center items-center md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Nuxt />
      <p class="mt-12 mb-6 px-auto text-black md:text-white text-xs">{{ $t('message.copyright_notice') }}</p>
    </main>
  </div>
</template>