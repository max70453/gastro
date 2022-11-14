<template lang='pug'>
Header
.innerContainer
  .locale
    ul.locale__list
      li(v-for="locale, index in localeBtn", :key="index").locale__item
        LocaleBtn(:text="locale")

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomePage',
  components:{
    Header: defineAsyncComponent(() => import('@/components/Header.vue')),
    LocaleBtn: defineAsyncComponent(() => import('@/components/base/LocaleBtn.vue'))
  },
  data() {
    return {
      localeBtn: ['RU', 'UA', 'EN']
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/index.scss'

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
