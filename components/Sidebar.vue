<template>
  <aside
    v-if="route.path !== '/contact'"
    class="sidebar text-secondary border-start flex-shrink-0 my-4 mx-2 ms-lg-3 p-3"
  >
    <ContentDoc v-if="route.name === 'post-id'" v-slot="{ doc: page }">
      <h4><i class="bi bi-list-ul me-2"></i>目次</h4>
      <ul>
        <li v-for="link of page.body.toc.links">
          <a :href="`#${link.id}`" class="text-secondary text-decoration-none">{{ link.text }}</a>
          <ul v-if="link.children">
            <li v-for="child of link.children">
              <a :href="`#${child.id}`" class="text-secondary text-decoration-none">{{ child.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </ContentDoc>
    <h4><i class="bi bi-folder me-2"></i>カテゴリ</h4>
    <ul class="list-unstyled">
      <li v-for="category of categories">
        <nuxt-link :to="`/category/${category}`">{{ category }}</nuxt-link>
      </li>
    </ul>
    <h4><i class="bi bi-tags me-2"></i>タグ</h4>
    <ul class="list-unstyled">
      <span v-for="tag of tags">
        <nuxt-link :to="`/tag/${tag}`">{{ tag }}</nuxt-link>
        &thinsp;
      </span>
    </ul>
    <h4><i class="bi bi-person me-2"></i>プロフィール</h4>
    <p>
      <img
        src="https://old.hyrorre.com/wp-content/uploads/2018/01/profile-300x300.jpg"
        alt="Profile Image"
        style="width: 150px"
        class="m-2"
      />
    </p>
    <p>hyrorre - すたろあ</p>
    <p>インターネット音ゲーマー 兼 フリーランスWebエンジニア</p>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const posts = await queryContent('post').find()
const categories = new Set(posts.flatMap((post) => post.categories))
const tags = new Set(posts.flatMap((post) => post.tags))
</script>
