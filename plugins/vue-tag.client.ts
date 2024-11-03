import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const GA_ID = process.env.GA_ID;
  if (GA_ID) {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
          id: GA_ID,
        },
      });
      trackRouter(useRouter());
  }
});
