<template>
  <div class="py-4">
    <ContentDoc v-slot="{ doc: page }">
      <h1>{{ page.title }}</h1>
      <MyContentHeader :post="page" class="mb-5"></MyContentHeader>
      <ContentRenderer :key="page._id" :value="page" class="content-doc"></ContentRenderer>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const page = await queryContent(route.path).findOne()
useHead({
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: `${page.title} | HY Techs` },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: `https://hyrorre.com${route.path}` },
    { property: 'og:image', content: page.cover ?? 'https://hyrorre.com/icon.png' },
    { property: 'twitter:card', content: page.cover ? 'summary_large_image' : 'summary' }
  ]
})
</script>
