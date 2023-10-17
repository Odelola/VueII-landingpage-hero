<template>
  <div id="app">
    <main class="max-w-screen-2xl mx-auto sm:px-[1em] md-max:px-[1.5em] lg-max:px-[1.75em] xl-max:px-[2em]">
      <Hero />
      <ListArticle />
      <div class="mt-24 md-max:pb-8 xl:pb-16 pb-6">
        <Gallery />
      </div>
    </main>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import ListArticle from "./components/ListArticle";
import Gallery from "./components/Gallery.vue";
export default {
  name: "App",

  components: {
    Hero,
    ListArticle,
    Gallery,
  },
};
</script>