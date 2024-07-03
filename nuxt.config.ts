// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["dotlottie-player"].includes(tag),
    },
  },
  compatibilityDate: "2024-07-04",
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  runtimeConfig: {
    public: {
      TELE_TOKEN: process.env.NUXT_TELEGRAM_TOKEN,
      TELEGRAM_ID_TARGET: process.env.NUXT_TELEGRAM_ID_TARGET,
    },
  },
  // components: [{ path: "~/components/Partials", extensions: ["vue"] }],
});
