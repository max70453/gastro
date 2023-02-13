<template lang='pug'>
.home-benefits
  .innerContainer
    ul.home-benefits__list
      li(v-for="benefit, index in benefits", :key="index").home-benefits__item
        .home-benefits__pic
          img(:src="require(`@/assets/benefits/${benefit.img}`)", :alt="benefit.img").home-benefits__img
        p.home-benefits__title {{ benefit.title }}
</template>
  
<script>
export default {
  name: 'BenefitsComponent',
  data() {
    return {
      benefits: [
        { img: 'eco.png', title: 'Бережём природу. Эко-тара и проборы.' },
        { img: 'dish.png', title: '28 дней без повторения, более 300 блюд!' },
        { img: 'time.png', title: 'Бесплатно заменяем блюда и ингредиенты.' },
        { img: 'night.png', title: 'Готовим ночью, упаковываем и отправляем Вам!' },
        { img: 'auto.png', title: 'Ежедневная удобная и бесплатная доставка с 6:00 до 10:00' },
        { img: 'clock.png', title: 'Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!' },
      ]
    }
  }
}
</script>
  
<style lang="sass">
@import '../styles/variables'
  
.home-benefits
  max-width: 1286px
  padding: 42px 0
  margin: 0 auto
  margin-bottom: 5.6%
  background: rgba(245, 250, 255, 0.8)
  border-radius: 30px

.home-benefits__list
  display: flex

.home-benefits__item
  max-width: 235px
  padding: 0 15px

.home-benefits__item:last-child
  margin-right: 0

.home-benefits__pic
  width: 60px
  margin: 0 auto
  margin-bottom: 20px

.home-benefits__img
  width: 100%

.home-benefits__title
  font-family: $font-family-medium
  font-weight: $font-weight-medium
  font-size: 12px
  line-height: 130.22%
  text-align: center
  color: $base-text-color
    
</style>
  