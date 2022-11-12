<template lang='pug'>
div
  h1 {{ msg }}

  h3 navigate
  ul
    li
      <router-link to="/Nutrition-Programm">Программа питания</router-link>
    li
      <router-link to="/Business-Lanchess">Бизнес ланчи</router-link>
    li
      <router-link to="/Gastro-Shop">GastroShop</router-link>
    li
      <router-link to="/about">О нас</router-link>
    li
      <router-link to="/blog">Блог</router-link>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// @import "../variables.scss"
@import '../../styles/index.scss'
h3
  margin: 40px 0 0
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: $error-color
// h1
//   font-family: "Montserrat-Regular", sans-serif

</style>
