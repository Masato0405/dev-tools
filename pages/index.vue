<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Dev Tools</h1>
        <p class="text-gray-600 text-lg mb-2">
          A collection of useful tools for your daily development tasks.
        </p>
        <p class="text-gray-500">
          Enhance your development workflow with these convenient utilities.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <NuxtLink to="/WordCounter" class="block">
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-3">
              <span class="text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </span>
              <h2 class="text-xl font-semibold text-gray-800 ml-2">
                Word Counter
              </h2>
            </div>
            <p class="text-gray-600">
              Count characters in text with options for spaces and line breaks.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink to="/UrlEncoderDecoder" class="block">
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-3">
              <span class="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101"
                  />
                </svg>
              </span>
              <h2 class="text-xl font-semibold text-gray-800 ml-2">
                URL Encoder/Decoder
              </h2>
            </div>
            <p class="text-gray-600">
              Encode and decode URLs, handling special characters with ease.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink to="/jsonFormatter" class="block">
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-3">
              <span class="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              <h2 class="text-xl font-semibold text-gray-800 ml-2">
                JSON Formatter
              </h2>
            </div>
            <p class="text-gray-600">
              Format and beautify JSON data with customizable indentation.
            </p>
          </div>
        </NuxtLink>
      </div>

      <footer class="mt-8 text-center text-gray-500 text-sm">
        <p>For a better development experience</p>
      </footer>
    </div>
  </div>
</template>
