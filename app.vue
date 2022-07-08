<template>
  <header class="navbar navbar-dark bg-dark">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">HY Techs</nuxt-link>
      <ul class="navbar-nav flex-row gap-4">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/profile">Profile</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
  <main class="container">
    <NuxtPage></NuxtPage>
  </main>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

img {
  width: 100%;
}
</style>
