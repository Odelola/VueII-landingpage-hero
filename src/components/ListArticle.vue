<template>
  <div class="flex justify-between items-end md-max:flex-col lg:items-center xl:items-center">
    <article class="mt-16  lg:basis-[45%] xl:basis-[45%]">
      <img :src="ArticleImage" class="lg:w-full xl:w-full articleImage" alt="Article Image" ref="articleImage" />
    </article>
    <article class="flex flex-col gap-y-12  lg:basis-[45%] xl:basis-[45%]">
      <div></div>

      <div v-for="list in articleList" :key="list.id" ref="listItem">
        <h2 class="text-3xl">{{ list.id }}</h2>
        <p class="w-3/4 font-[300]">{{ list.details }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ArticleImage from "../assets/images/articleImages/articleImageOne.png";
const articleList = [
  {
    id: "01",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
  },
  {
    id: "02",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
  },
  {
    id: "03",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
  },
]
export default {
  name: "ListArticle",
  data: function () {
    return {
      articleList,
      ArticleImage,
    };
  },
  mounted() {
    const animationTimelIne = gsap.timeline();
    animationTimelIne.from(this.$refs.listItem, { opacity: 0, y: 100, stagger: .5 }, "=+2")
    animationTimelIne.from(this.$refs.articleImage, { 
      clipPath: "polygon(0 0, 50% 50%, 100% 100%, 50% 50%)"
    }, "=-.6")
  }
};
</script>
<style scoped>
.articleImage {
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
}
</style>