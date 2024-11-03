<template>
  <header class="bg-vueGreen text-white shadow-md py-4 px-8 flex justify-between items-center">
    <div class="text-2xl font-semibold"><a href="/" class="hover:text-vueDarkGreen">Dev Tools</a></div>
    <nav>
      <ul class="flex space-x-6">
        <li><a href="/WordCounter" class="hover:text-vueDarkGreen">Word Counter</a></li>
        <li><a href="/UrlEncoderDecoder" class="hover:text-vueDarkGreen">URL Encoder/Decoder</a></li>
        <li><a href="/JsonFormatter" class="hover:text-vueDarkGreen">JSON Formatter</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.bg-vueGreen {
  background-color: #42b883;
}
.hover\:text-vueDarkGreen:hover {
  color: #35495e;
}
</style>
