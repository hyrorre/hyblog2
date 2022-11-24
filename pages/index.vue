<template>
  <div>
    <ContentList v-slot="{ list }" :query="{ path: '/post', sort: { date: -1 } }">
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
useHead({
  title: '',
  titleTemplate: 'HY Techs'
})
</script>
