<template>
  <h1>HY Techs</h1>
  <ContentList v-slot="{ list }">
    <div v-for="post in list" :key="post._path">
      <nuxt-link :to="post._path">
        <h2>{{ post.title }}</h2>
      </nuxt-link>
      <div>{{ post.description }}</div>
    </div>
  </ContentList>
</template>
