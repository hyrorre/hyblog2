<template>
  <div class="d-flex flex-column h-100">
    <Header></Header>
    <main class="container flex-grow-1 d-flex flex-column flex-lg-row align-items-start">
      <NuxtPage class="container flex-grow-1"></NuxtPage>
      <Sidebar></Sidebar>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';

html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}

.link-dark:hover {
  color: $secondary !important;
}

img {
  width: 100%;
}

.sidebar {
  width: 100%;
}

@include media-breakpoint-up(lg) {
  .sidebar {
    width: 330px;
  }
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
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid $gray-300;
  }

  pre {
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    background-color: $gray-900;
  }
}
</style>
