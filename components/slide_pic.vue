<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img
          src="/images/6043.jpg"
          alt="1ヶ月目の写真"
          >
      </swiper-slide>

      <swiper-slide>
        <img
          src="/images/IMG_7024.JPG"
          alt="2ヶ月目の写真">
      </swiper-slide>

      <swiper-slide>
        <img
          src="/images/IMG_4060.jpg"
          alt="3ヶ月目の写真">
      </swiper-slide>

      <swiper-slide>
        <img
          src="/images/DSC03702.JPG"
          alt="4ヶ月目の写真">
      </swiper-slide>

      <swiper-slide>
        <img
          src="/images/IMG_5483.JPG"
          alt="5ヶ月目の写真">
      </swiper-slide>

      <swiper-slide>
        <img
          src="/images/2021-01-16.png"
          alt="6ヶ月目の写真">
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        speed: 1000,//スライドの切り替わりスピード
        spaceBetween: 70,//各スライドの余白
        centeredSlides: true,//スライダーを真ん中に
        loop: true, //無限ループ
        autoplay: { //スライドの自動切り替え
          delay: 10000,//スライドの自動切り替えの秒数
          disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 1.2,
            spaceBetween: 0
          }
        }
      }
    }
  }
}
</script>

<style>
img{
  width: 100%;
}
</style>