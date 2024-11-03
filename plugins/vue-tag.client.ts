import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
const config = useRuntimeConfig()
const GA_ID = config.public.GA_ID
console.log(GA_ID);
  if (GA_ID) {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
          id: GA_ID,
        },
      });
      trackRouter(useRouter());
  }
});
