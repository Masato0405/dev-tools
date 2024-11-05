<template>
  <MetaInfo
    title="IP Checker - Dev Tools"
    description="Quickly check and copy your public IP address with our IP Checker. Perfect for network troubleshooting and verification."
  />
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">IP Checker</h1>

      <div class="space-y-6">
        <div v-if="loading" class="text-center py-8">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"
          ></div>
          <p class="mt-4 text-gray-600">Fetching your IP address...</p>
        </div>

        <div
          v-else-if="error"
          class="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <p class="text-red-600">{{ error }}</p>
          <button
            @click="fetchIp"
            class="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Try Again
          </button>
        </div>

        <div v-else-if="ipAddress" class="text-center">
          <div class="bg-gray-50 rounded-lg p-6 mb-4">
            <p class="text-sm text-gray-600 mb-2">Your IP Address is:</p>
            <p class="text-2xl font-mono font-bold text-gray-800">
              {{ ipAddress }}
            </p>
          </div>
          <button
            v-if="ipAddress"
            @click="copyResult"
            :disabled="isCopyingResult"
            class="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-75"
          >
            {{ copyResultButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ipAddress = ref<string>("");
const loading = ref<boolean>(true);
const error = ref<string>("");

const isCopyingResult = ref(false);
const copyResultButtonText = computed(() =>
  isCopyingResult.value ? "Copied!" : "Copy to Clipboard"
);

const fetchIp = async () => {
  loading.value = true;
  error.value = "";

  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) throw new Error("Failed to fetch IP address");

    const data = await response.json();
    ipAddress.value = data.ip;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "An error occurred";
  } finally {
    loading.value = false;
  }
};

// Fetch IP on component mount
onMounted(() => {
  fetchIp();
});

const copyResult = async (): Promise<void> => {
  try {
    await navigator.clipboard.writeText(ipAddress.value);
    isCopyingResult.value = true;
    setTimeout(() => {
      isCopyingResult.value = false;
    }, 1000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
};
</script>
