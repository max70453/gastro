<template lang='pug'>
div 
  button.base-btn {{ text }}
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    text: {
      type: String,
      default: 'button'
    },
    btnWidth: {
      type: String,
      default: '280px'
    }
  },
  data() {
    return {
      width: ''
    }
  },
  mounted(){
    this.width = this.$props.btnWidth;
  }
}
</script>
    
<style lang="sass" scoped>
@import '../../styles/variables'  

.base-btn
  width: v-bind(width)
  height: 60px
  background: $base-btn-color
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 190px
  font-family: $font-comfortaa-bold
  font-size: 24px
  text-align: center
  margin-right: 30px
  letter-spacing: 0.05em
  color: $color-background-base
  transition: background 0.3s ease-in-out
  &:hover
    border: 3px solid $base-btn-color
    background: $color-background-base
    filter: drop-shadow(0px 0px 40px rgba(86, 86, 86, 0.3))
    border-radius: 190px
    color: $base-btn-color
    transition: background 0.3s ease-in-out

</style>