// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  target: "static",

  head: {
    link: [
      { rel: 'dns-prefetch', href: 'https://fonts.cdnfonts.com' },
      { rel: 'preconnect', href: 'https://fonts.cdnfonts.com' },
      // { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/lato' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/roboto' },
    ]
  },
})