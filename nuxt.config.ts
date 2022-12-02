// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | HY Techs',
      meta: [
        { name: 'description', content: 'インターネット音ゲーマー 兼 フリーランスWebエンジニアによる雑記ブログ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'HY Techs' },
        {
          property: 'og:description',
          content: 'インターネット音ゲーマー 兼 フリーランスWebエンジニアによる雑記ブログ'
        },
        { property: 'og:url', content: 'https://hyrorre.com' },
        { property: 'og:site_name', content: 'HY Techs' },
        { property: 'og:image', content: 'https://hyrorre.com/icon.png' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@hyrorre' }
      ]
    }
  },
  modules: [
    [
      '@nuxt/content',
      {
        highlight: {
          // Theme used in all color schemes.
          theme: 'nord'
        }
      }
    ],
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-1154104535471881',
        analyticsUacct: 'G-FJ56FBFFV9',
        analyticsDomainName: 'hyrorre.com'
      }
    ]
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
