<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img src="../../assets/images/html.png" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../../assets/images/react.png" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../../assets/images/vue.png" alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },

        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.banner img {
  width: 100vw;
  height: 200px;
}
</style>