<template>
  <section class="flex justify-between w-full">
    <div
      class="pt-24 basis-1/3 md-max:basis-full md-max:flex md-max:flex-col md-max:justify-center md-max:items-center lg:basis-full">
      <h1 class="text-[70px] sm:text-[60px] md-max:text-center font-extrabold leading-[90px] sm:leading-none" ref="heroH1">
        Discover <br />
        the power <br />
        of design
      </h1>
      <p class="my-6 font-bold text-[18px] md-max:text-center md-max:w-3/4" ref="heroParagraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
        libero risus semper habitant arcu eget. Et integer facilisi eget
        diam.Lorem ipsum dolor
      </p>
      <button
        class="bg-white text-primary px-8 py-[.75rem] rounded-lg font-bold text-[18px] sm:text-center"
        ref="heroButton">Explore</button>
    </div>
    <div class="flex gap-x-6 h-96 lg:h-64 md-max:hidden lg:w-full">
      <img :src="HeroImageOne" class="h-full hero-image" alt="Hero Image One" />
      <img :src="HeroImageTwo" class="h-full hero-image" alt="Hero Image Two" />
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import HeroImageOne from "../assets/images/heroImages/heroImage1.png";
import HeroImageTwo from "../assets/images/heroImages/heroImage2.png";
export default {
  name: "Hero",
  data: function () {
    return {
      HeroImageOne,
      HeroImageTwo,
    }
  },
  mounted() {
    const animationTimelIne = gsap.timeline();
    animationTimelIne.to(this.$refs.hero, { duration: 1,})
    animationTimelIne.from(".hero-image", {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      opacity: 1,
      x: "7.5",
    }, "=-1")
    animationTimelIne.from(this.$refs.heroH1, { opacity: 0, y: 50 })
    animationTimelIne.from(this.$refs.heroParagraph, { opacity: 0, y: 50 })
    animationTimelIne.from(this.$refs.heroButton, { opacity: 0, y: 50 }, "-=.5")
  }
};
</script>

<style scoped>
.hero-image {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    overflow: hidden;
}
</style>