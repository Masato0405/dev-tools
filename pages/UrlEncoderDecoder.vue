<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">URL Encoder/Decoder</h1>
        
        <div class="space-y-6">
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                v-model="mode"
                value="encode"
                class="form-radio text-blue-600"
              >
              <span class="ml-2 text-gray-700"><strong>Encode</strong><br>(e.g., Hello World → Hello%20World)</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="mode"
                value="decode"
                class="form-radio text-blue-600"
              >
              <span class="ml-2 text-gray-700"><strong>Decode</strong><br>(e.g., Hello%20World → Hello World)</span>
            </label>
          </div>
  
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">
                Input URL
              </label>
              <button
                @click="resetInput"
                class="text-sm text-gray-500 hover:text-gray-700"
                :disabled="!inputUrl"
              >
                Clear input
              </button>
            </div>
            <textarea
              v-model="inputUrl"
              class="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter URL here..."
            ></textarea>
          </div>
  
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">
                {{ mode === 'encode' ? 'Encoded' : 'Decoded' }} Result
              </label>
              <button
                v-if="result"
                @click="copyResult"
                :disabled="isCopyingResult"
                class="text-sm text-blue-600 hover:text-blue-800 disabled:opacity-75"
              >
                {{ copyResultButtonText }}
              </button>
            </div>
            <textarea
              v-model="result"
              readonly
              class="w-full h-32 p-3 border rounded-lg bg-gray-50"
            ></textarea>
          </div>
  
          <div class="flex justify-end space-x-3">
            <button
              @click="resetAll"
              class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              :disabled="!inputUrl && !result"
            >
              Reset All
            </button>
            <button
              v-if="result"
              @click="copyResult"
              :disabled="isCopyingResult"
              class="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-75"
            >
              {{ copyResultButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface UrlState {
    inputUrl: string
    mode: 'encode' | 'decode'
  }
  
  const state = reactive<UrlState>({
    inputUrl: '',
    mode: 'encode'
  })
  
  const inputUrl = toRef(state, 'inputUrl')
  const mode = toRef(state, 'mode')
  const isCopyingResult = ref(false)
  const copyResultButtonText = computed(() => isCopyingResult.value ? 'Copied!' : 'Copy to Clipboard')
  
  const result = computed<string>(() => {
    if (!inputUrl.value) return ''
    
    try {
      if (mode.value === 'encode') {
        return encodeURIComponent(inputUrl.value)
      } else {
        return decodeURIComponent(inputUrl.value)
      }
    } catch (error) {
      return 'Invalid URL'
    }
  })
  
  const copyResult = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(result.value)
      isCopyingResult.value = true
      setTimeout(() => {
        isCopyingResult.value = false
      }, 1000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }
  
  const resetInput = (): void => {
    inputUrl.value = ''
  }
  
  const resetAll = (): void => {
    inputUrl.value = ''
    mode.value = 'encode'
  }
  </script>