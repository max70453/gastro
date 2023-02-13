<template lang="pug">
swiper.gastro-swiper(:modules="modules" navigation="" :pagination="pagination")
  swiper-slide.gastro-swiper__slide(v-for="(slide, index) in slides", :key="index")
    .gastro-swiper__slide-wrap
      .gastro-swiper__left
        .gastro-swiper__text
          h1.gastro-swiper__title(v-html="slide.text") 
          .gastro-swiper__subtitle(v-html="slide.subText")
          .gastro-swiper__action
            Button(:text="slide.btnText")
            .gastro-swiper__priceText {{ slide.priceText }} 
              .gastro-swiper__price {{ slide.price }}
      .gastro-swiper__right
        .gastro-swiper__pic
          img(:src="require(`@/assets/slider-images/${slide.img}`)", :alt="slide.img").gastro-swiper__img

</template>

<script>
  import { defineAsyncComponent } from 'vue'
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  
// Import Swiper styles
export default {
  name: 'SliderComponent',
  components: {
    Swiper,
    SwiperSlide,
    Button: defineAsyncComponent(() => import('@/components/base/Button.vue')),
  },
  setup() {
    return {
      pagination: {
        type: 'bullets',
        clickable: true,
      },
      modules: [Navigation, Pagination, A11y],
      slides: [
        { 
          text: `Detox программа – <span class="title_accent">вкусное очищение</span> организма`,
          subText: `8 бутылочек <span class="title_accent">натуральных</span> смузи и фрешей.`,
          btnText: 'Заказать',
          priceText: 'Пробный день всего:',
          price: '427 грн',
          img: 'slide-img1.png'
        },
        {
          text: `Сервис правильного питания. <span class="title_accent">Худей быстро!</span>`,
          subText: ``,
          btnText: 'Заказать',
          priceText: 'Пробный день всего:',
          price: '-30 %',
          img: 'slide-img2.png'
        },
        {
          text: `<span class="title_accent">Доверьтесь профессионалам.</span> Я Кобылинский Кирилл - основатель.`,
          subText: `
            <span class="title_accent"> Мастер спорта </span> Украины по тяжелой атлетике.
            <span class="title_accent"> Высшее образование </span> института физкультуры(НуфвсУ).`,
          btnText: 'Мой инстаграм',
          priceText: 'Всегда открыт для клиентов',
          price: '',
          img: 'slide-img3.png'
        },
        {
          text: `Кето питание - <span class="title_accent">вкусное и экстремальное</span> быстрое похудение`,
          subText: `4 приема пищи.`,
          btnText: 'Заказать',
          priceText: 'Пробный день',
          price: 'от 490 грн',
          img: 'slide-img4.png'
        },
      ]
    };
  },
};
</script>
  
<style lang="sass">
@import '../styles/variables'

.gastro-swiper

.gastro-swiper__slide

.gastro-swiper__slide-wrap
  display: flex
  align-items: center
  justify-content: space-between

.gastro-swiper__left
  padding-left: 6%

.gastro-swiper__text
  width: 100%
  max-width: 560px

.gastro-swiper__title
  font-family: $font-comfortaa-bold
  font-size: 40px
  line-height: 45px
  color: $base-text-color
  margin: 0 0 15px

.gastro-swiper__subtitle
  font-family: $font-family-base
  font-size: 20px
  color: $base-text-color
  margin-bottom: 40px

.gastro-swiper__action
  display: flex

.gastro-swiper__priceText
  font-family: $font-family-base
  font-size: 20px
  line-height: 133.8%
  color: $base-text-color

.gastro-swiper__right
  text-align: end

.gastro-swiper__pic
  width: 700px
  height: 700px
  border-radius: 50%
  border: 30px solid $color-background-base

.gastro-swiper__img
  width: 100%
  border-radius: 50%

.gastro-swiper__price
  font-family: $font-family-bold
  font-size: 35px
  line-height: 100%
  color: $base-btn-color

.swiper-horizontal > .swiper-pagination-bullets
  left: -150px

.gastro-swiper .swiper-pagination-bullet
  display: inline-block
  width: 10px
  height: 10px
  border-radius: 50%
  cursor: pointer
  background-color: white
  border: 2px solid $base-btn-color
  opacity: 1
  margin-right: 15px

.gastro-swiper .swiper-pagination-bullet-active
  width: 14px
  height: 14px
  border-radius: 50%

.gastro-swiper .swiper-button-next:after, 
.gastro-swiper .swiper-button-prev:after
  font-size: 18px 
  font-weight: 900
  color: $active-color

.gastro-swiper .swiper-button-next
  left: 43%
  top: 97.5%

.gastro-swiper .swiper-button-prev
  left: 35%
  top: 97.5%

.gastro-swiper .swiper-button-next, 
.gastro-swiper .swiper-button-prev 
  width: 34px
  height: 34px
  z-index: 20
  &:hover
    border-radius: 50%
    background: $base-btn-color
    &:after
      color: $color-background-base 

.title_accent
  color: $base-btn-color

</style>