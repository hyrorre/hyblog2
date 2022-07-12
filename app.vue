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
  <footer class="text-center bg-light py-4">© 2020-{{ new Date().getFullYear() }} hyrorre</footer>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';

.link-dark:hover {
  color: $secondary !important;
}

img {
  width: 100%;
}

.content-doc {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: $body-color;
      text-decoration: none;
      pointer-events: none;
    }
  }

  h2 {
    margin-top: 3rem;
  }

  pre {
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    background-color: $gray-900;
  }
}
</style>
