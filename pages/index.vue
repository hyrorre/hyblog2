<template>
  <ContentList v-slot="{ list }">
    <article v-for="post in list" :key="post._path">
      <nuxt-link :to="post._path">
        <h2>{{ post.title }}</h2>
      </nuxt-link>
      <div>{{ post.description }}</div>
    </article>
  </ContentList>
</template>
