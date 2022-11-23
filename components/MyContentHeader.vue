<template>
  <div class="content-header px-1 text-secondary">
    <div class="me-2">
      <i class="bi bi-calendar me-2"></i>
      {{ new Date(post.date).toLocaleDateString('sv-SE') }}
    </div>
    <div class="d-flex flex-wrap">
      <div v-if="post.categories" class="me-2">
        <i class="bi bi-folder me-2"></i>
        <nuxt-link v-for="category in post.categories" :key="category" :to="`/category/${category}`" class="me-2">
          {{ category }}
        </nuxt-link>
      </div>
      <div v-if="post.tags" class="me-2">
        <i class="bi bi-tags me-2"></i>
        <nuxt-link v-for="tag in post.tags" :key="tag" :to="`/tag/${tag}`" class="me-2">
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    date: string
    categories: Array<string>
    tags: Array<string>
  }
}>()
</script>
