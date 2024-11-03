<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">JSON Formatter</h1>
        
        <div class="space-y-6">
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">
                Input JSON
              </label>
              <div class="space-x-2">
                <button
                  @click="resetInput"
                  class="text-sm text-gray-500 hover:text-gray-700"
                  :disabled="!inputJson"
                >
                  Clear input
                </button>
                <button
                  @click="formatJson"
                  class="text-sm text-blue-600 hover:text-blue-800"
                  :disabled="!inputJson"
                >
                  Format
                </button>
              </div>
            </div>
            <textarea
              v-model="inputJson"
              class="w-full h-64 p-3 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your JSON here..."
            ></textarea>
          </div>
  
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input
                type="number"
                v-model="indentSize"
                min="1"
                max="8"
                class="w-16 p-1 border rounded"
              >
              <span class="ml-2 text-sm text-gray-700">Indent size</span>
            </label>
          </div>
  
          <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600">{{ error }}</p>
          </div>
  
          <div v-if="formattedJson" class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">
                Formatted JSON
              </label>
              <button
                @click="copyFormatted"
                :disabled="isCopying"
                class="text-sm text-blue-600 hover:text-blue-800 disabled:opacity-75"
              >
                {{ copyButtonText }}
              </button>
            </div>
            <pre
              class="w-full h-64 p-3 bg-gray-50 border rounded-lg overflow-auto font-mono text-sm"
            ><code>{{ formattedJson }}</code></pre>
          </div>
  
          <div class="flex justify-end space-x-3">
            <button
              @click="resetAll"
              class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              :disabled="!inputJson && !formattedJson"
            >
              Reset All
            </button>
            <button
              v-if="formattedJson"
              @click="copyFormatted"
              :disabled="isCopying"
              class="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:hover:bg-teal-700 transition-colors disabled:opacity-75"
            >
              {{ copyButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface JsonState {
    inputJson: string
    formattedJson: string
    error: string
    indentSize: number
  }
  
  const state = reactive<JsonState>({
    inputJson: '',
    formattedJson: '',
    error: '',
    indentSize: 2
  })
  
  const { inputJson, formattedJson, error, indentSize } = toRefs(state)
  const isCopying = ref(false)
  const copyButtonText = computed(() => isCopying.value ? 'Copied!' : 'Copy to Clipboard')
  
  const formatJson = (): void => {
    if (!inputJson.value.trim()) {
      error.value = 'Please enter JSON to format'
      return
    }
  
    try {
      const parsed = JSON.parse(inputJson.value)
      formattedJson.value = JSON.stringify(parsed, null, indentSize.value)
      error.value = ''
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Invalid JSON'
      formattedJson.value = ''
    }
  }
  
  const copyFormatted = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(formattedJson.value)
      isCopying.value = true
      setTimeout(() => {
        isCopying.value = false
      }, 1000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }
  
  const resetInput = (): void => {
    inputJson.value = ''
    formattedJson.value = ''
    error.value = ''
  }
  
  const resetAll = (): void => {
    resetInput()
    indentSize.value = 2
  }
  </script>