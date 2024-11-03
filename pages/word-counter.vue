<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">Word Counter</h1>
        
        <div class="space-y-4">
          <div>
            <textarea
              v-model="text"
              class="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your text here..."
            ></textarea>
          </div>
  
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includeWhitespace"
              v-model="includeWhitespace"
              class="rounded text-blue-600"
            >
            <label for="includeWhitespace" class="text-gray-700">
              Include spaces and line breaks
            </label>
          </div>
  
          <div class="text-lg font-medium text-gray-700">
            Character count: {{ characterCount }}
          </div>
  
          <div class="flex space-x-4">
            <button
            @click="copyToClipboard"
            :disabled="isCopying"
            class="px-4 py-2 rounded-lg text-white transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            :class="isCopying ? 'bg-green-500 scale-95' : 'bg-teal-600 hover:bg-teal-700'"
          >
            {{ copyButtonText }}
          </button>
            
            <button
              @click="resetText"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface TextState {
    text: string
    includeWhitespace: boolean
  }
  
  const state = reactive<TextState>({
    text: '',
    includeWhitespace: false
  })
  
  const text = toRef(state, 'text')
  const includeWhitespace = toRef(state, 'includeWhitespace')
  const isCopying = ref(false)
  const copyButtonText = computed(() => isCopying.value ? 'Copied!' : 'Copy to Clipboard')

  
  const characterCount = computed<number>(() => {
    if (includeWhitespace.value) {
      return text.value.length
    }
    return text.value.replace(/[\s\n]/g, '').length
  })
  
  const copyToClipboard = async (): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text.value)
    isCopying.value = true
    setTimeout(() => {
      isCopying.value = false
    }, 1000)
  } catch (err) {
    console.error('Copy failed:', err)
  }
}
  
  const resetText = (): void => {
    text.value = ''
  }
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  </style>