<template>
  <div class="py-4">
    <ContentDoc v-slot="{ doc: page }">
      <div class="content-header">
        <h1>{{ page.title }}</h1>
        <div class="me-2">
          <i class="bi bi-calendar me-2"></i>
          {{ new Date(page.date).toLocaleDateString('sv-SE') }}
        </div>
        <div class="d-flex flex-wrap mb-5">
          <div class="me-2">
            <i class="bi bi-folder me-2"></i>
            <nuxt-link v-for="category in page.categories" :key="category" :to="`/category/${category}`" class="me-2">
              {{ category }}
            </nuxt-link>
          </div>
          <div class="me-2">
            <i class="bi bi-tags me-2"></i>
            <nuxt-link v-for="tag in page.tags" :key="tag" :to="`/tag/${tag}`" class="me-2">
              {{ tag }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <ContentRenderer :key="page._id" :value="page" class="content-doc"></ContentRenderer>
    </ContentDoc>
  </div>
</template>
