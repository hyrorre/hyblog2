<template>
  <div>
    <h1 class="py-4 my-0 border-bottom"><i class="bi bi-tags me-2"></i>タグ検索 {{ route.params.id }}</h1>
    <ContentList v-slot="{ list }" :query="query">
      <article v-for="page in list" :key="page._path" class="py-4 border-bottom">
        <nuxt-link :to="page._path" class="link-dark text-decoration-none">
          <h2>{{ page.title }}</h2>
        </nuxt-link>
        <MyContentHeader :post="page" class="mb-3"></MyContentHeader>
        <ContentDoc :path="page._path" excerpt class="content-doc" :head="false"></ContentDoc>
      </article>
    </ContentList>
    <ul class="pagination justify-content-center mt-4">
      <li class="page-item disabled">
        <a class="page-link" href="#">&laquo;</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">&raquo;</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const query = { path: '/post', where: { tags: { $contains: route.params.id } }, sort: { date: -1 } }

useHead({
  title: `タグ検索 ${route.params.id}`
})
</script>
