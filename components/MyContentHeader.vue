<template>
  <div class="content-header px-1">
    <div class="me-2">
      <i class="bi bi-calendar me-2"></i>
      {{ new Date(page.date).toLocaleDateString('sv-SE') }}
    </div>
    <div class="d-flex flex-wrap">
      <div v-if="page.categories" class="me-2">
        <i class="bi bi-folder me-2"></i>
        <nuxt-link v-for="category in page.categories" :key="category" :to="`/category/${category}`" class="me-2">
          {{ category }}
        </nuxt-link>
      </div>
      <div v-if="page.tags" class="me-2">
        <i class="bi bi-tags me-2"></i>
        <nuxt-link v-for="tag in page.tags" :key="tag" :to="`/tag/${tag}`" class="me-2">
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: specify type
defineProps({
  page: Object
})
</script>
