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
useHead({
  meta: [
    { property: 'og:title', content: 'Profile | HY Techs' },
    { property: 'og:url', content: 'https://hyrorre.com/profile' },
  ]
})
</script>
