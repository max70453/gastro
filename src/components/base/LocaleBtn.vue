<template lang='pug'>
div 
  button.locale-btn {{ text }}
</template>
    
<script>
export default {
  name: 'LocaleBtn',
  props: {
    text: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
    
<style lang="sass" scoped>
@import '../../styles/index.scss'    

.locale-btn
  border: none
  display: flex
  justify-content: center
  align-items: center
  width: 35px
  height: 35px
  border-radius: 50%
  font-family: $font-family-base
  font-size: 15px
  background: $color-background-base
  color: $base-text-color
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  &:hover,
  &:focus
    background: $base-btn-color
    cursor: pointer
    color: $color-background-base

</style>
    