<template lang='pug'>
.home
  .container
    Header
    section.home-section
      .home-section__aside
        ul.home-section__menuBtnList
          li(v-for="btnItem, index in menuBtnImage", :key="index").home-section__btnItem
            MenuButton(:image="btnItem.src", :btnText="btnItem.text")
      .home__slider
        Slider
    Benefits
    .programs
      .innerCntainer
        Programs 
  .main-screen-ellipse
  .benefits-elipse
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomePage',
  components:{
    Header: defineAsyncComponent(() => import('@/components/Header.vue')),
    Slider: defineAsyncComponent(() => import('@/components/MainSlider.vue')),
    MenuButton: defineAsyncComponent(() => import('@/components/base/MenuBtn.vue')),
    Benefits: defineAsyncComponent(() => import('@/components/Benefits.vue')),
    Programs: defineAsyncComponent(() => import('@/components/Programs.vue')),
  },
  data() {
    return {
      menuBtnImage: [
        {src: 'ccal.png', text: 'Ccal'},
        {src: 'fish.png', text: 'Fish'},
        {src: 'carrot.png', text: 'Carrot'},
        {src: 'bottle.png', text: 'Bottle'},
        {src: 'meat.png', text: 'Meat'},
        {src: 'table.png', text: 'Table'},
      ]
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/variables'

.home
  width: 100%
  position: relative

.main-screen-ellipse
  width: 950px
  height: 1065px
  display: block
  position: absolute
  top: 0
  right: 0
  background: url("../../assets/background/Ellipse100.png") no-repeat 0 0
  z-index: -10

// .benefits-elipse 
//   width: 544px
//   height: 544px
//   position: absolute
//   display: block
//   background: url("../../assets/background/Ellipse115.png") no-repeat

.home-section__aside
  display: flex
  flex-direction: column

.home-section__menuBtnList

.home-section__btnItem

.home-section
  width: 100%
  display: flex
  justify-content: space-between
  margin-bottom: 8%

.home__slider
  width: 100%
  min-width: 0
  max-width: 1515px 
  
</style>
