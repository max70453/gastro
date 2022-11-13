<template lang='pug'>
.inner-container
  nav.nav
    ul.nav__list
      li(v-for="link, index in navItems", :key="index").nav__listItem
        router-link(:to="link.path").nav__linkItem {{link.text}}
  .nav__phone
    .nav__phoneNumber {{ number }}
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      navItems: [
        {path: '/Nutrition-Programm', text: 'Программа питания'},
        {path: '/Business-Lanchess', text: 'Бизнес-ланчи'},
        {path: '/Gastro-Shop', text: 'Gastro Shop'},
        {path: '/about', text: 'О нас'},
        {path: '/blog', text: 'Блог'},
      ],
      number: '+38 (068) 949 - 49 -19'
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/index.scss'

.inner-container
  width: 100%
  margin: 0 auto
  max-width: 1287px
  display: flex

.nav
  width: 75%
  text-align: end
  padding: 17px 40px
  background: $color-background-base
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 190px
  margin-right: 20px

.nav__list
  margin: 0

.nav__listItem
  font-family: $font-family-base
  font-style: normal
  font-weight: 400
  font-size: 14px
  line-height: 133.8%
  color: $base-text-color
  display: inline-block
  margin-right: 40px
  &:last-child
    margin-right: 0

.nav__linkItem
  &:hover
    color: $base-btn-color
  &:active
    color: $active-color-link

.nav__phone
  padding: 15px 30px
  background: $color-background-base
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 190px
  align-self: center

.nav__phoneNumber
  color: $base-btn-color
  font-family: $font-family-bold

</style>
