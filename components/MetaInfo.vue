<script setup>
import { useHead } from "@vueuse/head";

const props = defineProps({
  title: String,
  description: String,
});

useHead({
  title: props.title,
  meta: [
    { name: "description", content: props.description },
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
