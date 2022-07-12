<template>
  <div>
    <ContentList v-slot="{ list }">
      <article v-for="post in list" :key="post._path" class="py-4 border-bottom">
        <nuxt-link :to="post._path" class="link-dark text-decoration-none">
          <h2 class="pb-4">{{ post.title }}</h2>
        </nuxt-link>
        <ContentDoc :path="post._path" excerpt class="content-doc"></ContentDoc>
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
