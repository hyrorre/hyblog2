// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | HY Tech',
      meta: [{ name: 'description', content: 'インターネット音ゲーマー 兼 フリーランスWebエンジニアによる雑記ブログ' }]
    }
  },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'nord'
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
