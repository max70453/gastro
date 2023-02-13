<template lang='pug'>
div
  button.menu-btn
    .menu-btn__pic
      img(:src="require(`@/assets/menuButton/${image}`)", :alt="image").menu-btn__img
    .menu-btn__text {{ btnText }}
</template>
        
<script>
export default {
  name: 'MenuBtn',
  props: {
    image: {
      type: String,
      default: 'img button'
    },
    btnText: {
      type: String,
      default: 'menu-btn'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
        
<style lang="sass" scoped>
@import '../../styles/variables'  

.menu-btn__text
  font-size: 0
.menu-btn
  width: 70px
  height: 70px
  display: flex
  align-items: center
  padding: 15px
  margin-bottom: 50px
  border-radius: 50%
  background: $color-background-base
  box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25)  
  cursor: pointer
  
  &:hover
    width: 101px
    border-radius: 190px
    display: block
    display: flex
    align-items: center
    transition: width 0.3s
    .menu-btn__img
      filter: invert(50%) sepia(36%) saturate(2737%) hue-rotate(73deg) brightness(105%) contrast(79%)

  &:focus
    width: 188px
    border-radius: 190px
    .menu-btn__text
      font-family: $font-comfortaa-bold
      font-size: 25px
      margin: 0 auto
      letter-spacing: 0.025em
      color: $base-btn-color
      transition: font-size 0.4s
      
    .menu-btn__pic
      margin-right: auto
      
    .menu-btn__img
      filter: invert(50%) sepia(36%) saturate(2737%) hue-rotate(73deg) brightness(105%) contrast(79%)
    
.menu-btn__pic
  width: 40px
  height: 40px
  margin-right: 40px
  display: flex
  justify-content: center
  align-items: center

</style>
        