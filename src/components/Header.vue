<template lang='pug'>
.header
  .innerContainer    
    .header-logo
      .header-logo__wrap
        img(:src="require('../assets/logo/Website_banner 4.png')").header-logo__img
      .header-logo__title {{ title }}
    .header-nav__wrap
      nav.header-nav__navigate
        ul.header-nav__list
          li(v-for="link, index in navItems", :key="index").header-nav__listItem
            router-link(:to="link.path").header-nav__linkItem {{link.text}}
      .header-phone
        .header-phone__number {{ number }}
    .locale
      ul.locale__list
        li(v-for="locale, index in localeBtn", :key="index").locale__item
          LocaleBtn(:text="locale")    

</template>
    
<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HeaderComponent',
  components: {
    LocaleBtn: defineAsyncComponent(() => import('@/components/base/LocaleBtn.vue'))
  },
  data() {
    return {
      navItems: [
        {path: '/Nutrition-Programm', text: 'Программа питания'},
        {path: '/Business-Lanchess', text: 'Бизнес-ланчи'},
        {path: '/Gastro-Shop', text: 'Gastro Shop'},
        {path: '/about', text: 'О нас'},
        {path: '/blog', text: 'Блог'},
      ],
      number: '+38 (068) 949 - 49 -19',
      title: 'healthy ration',
      localeBtn: ['RU', 'UA', 'EN']
    }
  }
}
</script>
    
<style lang="sass">
@import '../styles/variables'

.header
  padding-top: 3.3%
  margin-bottom: 35px

.header-logo
  position: absolute
  left: 330px
  top: -55px  
  width: 264px
  height: 264px
  background: $color-background-base
  display: flex
  flex-direction: column
  justify-content: center
  box-shadow: 0px 0px 40px rgb(86 86 86 / 30%)
  border-radius: 50%
  text-align: center
  z-index: 1000

.header-logo__wrap
  width: 100%

.header-logo__img
  width: 100%

.header-logo__title
  font-family: $font-comfortaa
  font-size: 14px
  color: $base-text-color
  margin-top: -10px

.header-nav__wrap
  display: flex
  margin-bottom: 20px

.header-nav__navigate
  width: 75%
  text-align: end
  padding: 17px 40px
  background: $color-background-base
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 190px
  margin-right: 20px
  position: relative

.header-nav__list
  margin: 0

.header-nav__listItem
  font-family: $font-family-base
  font-style: normal
  font-weight: 400
  font-size: 14px
  line-height: 133.8%
  display: inline-block
  margin-right: 40px
  &:last-child
    margin-right: 0

.header-nav__linkItem
  color: $base-text-color
  &:hover
    color: $base-btn-color
  &:active
    color: $active-color-link

.header-phone
  padding: 15px 30px
  background: $color-background-base
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 190px
  align-self: center

.header-phone__number
  color: $base-btn-color
  font-family: $font-family-bold

.locale
  display: flex
  justify-content: start
  width: 50%
  margin: 0 auto

.locale__list
  padding: 0
  display: flex
  margin: 0 7.5px

.locale__item
  padding: 0 7.5px

</style>
    