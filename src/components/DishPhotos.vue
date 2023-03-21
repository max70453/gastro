<template lang='pug'>
.dish-photos
    h2.dish-photos__title Фото блюд
    Slider(:slides="slides", :gallery="true")
          
</template>
        
<script>
import { defineAsyncComponent } from 'vue'
export default {
    name: 'DishPhotosComponent',
    components: {
        Slider: defineAsyncComponent(() => import('@/components/MainSlider.vue')),
    },
    data() {
        return {
            slides: [
                {img: 'dish1.png'},
                {img: 'dish2.png'},
                {img: 'dish3.png'},
                {img: 'dish4.png'},
                {img: 'dish5.png'},
                {img: 'dish6.png'}
            ]
        }
    }
}

</script>
      
<style lang="sass">
@import '../styles/variables'

.dish-photos
    margin-bottom: 150px
    
.dish-photos__title 
    font-family: $font-comfortaa-bold
    font-size: 30px
    line-height: 33px
    text-align: center
    color: #020202
    margin-bottom: 60px


</style>
        