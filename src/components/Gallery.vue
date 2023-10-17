<template>
  <div class="flex justify-between sm:flex-col sm:gap-y-8 lg-max:gap-x-8 lg-max:overflow-y-scroll no-scrollbar" ref="galleryImageContainer">
    <img :src="GalleryImageOne" class="xl:w-[30%] galleryImage" alt="First Gallery Image" />
    <img :src="GalleryImageTwo" class="xl:w-[30%] galleryImage" alt="Second Gallery Image" />
    <img :src="GalleryImageThree" class="xl:w-[30%] galleryImage" alt="Third Gallery Image" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import GalleryImageOne from "../assets/images/galleryImages/gallery1.png";
import GalleryImageTwo from "../assets/images/galleryImages/gallery2.png";
import GalleryImageThree from "../assets/images/galleryImages/gallery3.png";

export default {
  name: "Gallery",
  data: function () {
    return {
      GalleryImageOne,
      GalleryImageTwo,
      GalleryImageThree
    };
  },
  mounted() {
    const animationTimelIne = gsap.timeline();
    animationTimelIne.from(this.$refs.galleryImageContainer, {
      display: "none"
    }, "=+2.4") 
    animationTimelIne.from(".galleryImage", { 
      scale: 1.4,
      duration: .8,
      y: "100",
      filter: 'blur(4px)',
    })
  }
};
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.galleryImage{
transform: scale(1)
}
</style>