<template lang='pug'>
.home-programs
  .innerContainer
    .home-programs__btns
      button.home-programs__btn(
        v-for="(button, indexBtn) in buttons",
        :key="indexBtn",
        @click="activeButton(indexBtn)", 
        :class=" { 'home-programs__active' : activeBtn === indexBtn } "
      ) {{ button.textBtn }}
    ul.home-programs__list
      li.home-programs__item(
        v-for="(item, indexTitle) in programs", 
        :key="indexTitle",
        @click="activeLink(indexTitle, 'Program')", 
        :class=" { 'home__link-active' : activeProgram === indexTitle }"
        )
        .home-program__title {{ item.title }}
        .home-program__calories {{ item.calories }}
    .home-programs__section(v-for="(item, indexItem) in programs", :key="item.title")
      .home-programs__wrap(v-if="activeProgram === indexItem")
        .home-programs__description
          .home-programs__descriptionWrap
            .home-programs__descriptionTitle  {{ item.title }}
            .home-programs__descriptionCcal {{ item.calories }}
          .home-programs__descriptionText {{ item.description }}
        .home-programs__prices
          ul.home-programs__priceList
            li.home-programs__priceItem(v-for="(price, programIndex) in programsDaysPrice", :key="programIndex")
              .home-programs__day {{ price.day }}
              .home-programs__oldPrice {{ price.oldPrice }}
              .home-programs__currentPrice {{ price.price }}
        .home-programs__btnWrap
          Button(:text="baseBtnText")
      .home-programs__daysWrap(v-if="activeProgram === indexItem")
        .home-programs__days
          ul.home-programs__daysList
            li.home-programs__daysItem(v-for="(itemDay, i) in item.days", :key="i",
            @click="activeLink(i, 'Day')",
            :class=" { 'home__link-active' : activeDay === i } ") {{ itemDay.title }}       
        .home-programs__timetable
          ul.home-programs__timetableList
            li.home-programs__timetableItem(v-for="(i, itemDay) in item.days[activeDay].menuList", :key="itemDay")
              .home-programs__timetableWrap
                .home-programs__timetableTitle {{ i.title }}
                .home-programs__timetableTime {{ i.time }}
              ul.home-programs__timetableDescrList
                li.home-programs__timetableDescrItem(v-for="(j, index) in i.descr", :key="j") 
                  .home-programs__1 {{ j.text }}
                  .home-programs__timetablePrice {{ j.calor }}гр

</template>
    
<script>
import { defineAsyncComponent } from 'vue'
import axios from 'axios';
export default {
  name: 'ProgramsComponent',
  components: {
    Button: defineAsyncComponent(() => import('@/components/base/Button.vue')),
  },
  data() {
    return {
      activeProgram: 0,
      activeDay: 0,
      activeBtn: 0,
      programs: [],
      buttons: [ 
        { textBtn: 'Программы питания'},
        { textBtn: 'Специальные программы'} 
      ],
      programsDaysPrice: [
        { day: 'Тестовый день', oldPrice: '510 грн', price: '357 гр' },
        { day: '1 день', oldPrice: '', price: '510 грн' },
        { day: 'от 7 дней', oldPrice: '510 грн', price: '490 грн' },
        { day: 'от 14 дней', oldPrice: '510 грн', price: '470 грн' },
        { day: 'от 30 дней', oldPrice: '510 грн', price: '445 грн' },
        { day: 'Завтрак и ужин', oldPrice: '-15%', price: '433 грн' },
      ],
      baseBtnText: 'Заказать',
  }
},
methods: {
  activeButton(i){
    this.activeBtn = i;
  },
  activeLink(i, str){
    if(str === 'Program')
      this.activeProgram = i;
    else
      this.activeDay = i;
  },
  indexDay(index){
    console.log(index)
  }
},
created(){
  const programsUrl = 'https://gist.githubusercontent.com/max70453/d51f980565c79a18cb476796e6763b94/raw/b2fac3717c2df33164f8958f3f8ecd7251ba2ddc/Programs.json';
    try {
      axios({
        method: 'get',
        url: programsUrl
      }).then(response => {
        response.data.map(element => {
          this.programs.push(element);
        })
      })
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
  
<style lang="sass">
@import '../styles/variables'

.home-programs
  margin-bottom: 120px

.home-programs__btns
  display: flex
  justify-content: space-between
  margin-bottom: 70px

.home-programs__btn
  width: 580px
  background: #DEE6EE
  border-radius: 190px
  padding: 18px 0
  font-family: $font-comfortaa
  font-size: 25px
  line-height: 28px
  color: $text-color
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out
  &:hover
    background: $base-btn-color
    color: $color-background-base
    box-shadow: 0px 0px 10px rgba(86, 86, 86, 0.3)
    transition: background 0.5s ease-in-out, color 0.2s ease-in-out

.home-programs__active
  background: $base-btn-color
  color: $color-background-base
  box-shadow: 0px 0px 10px rgba(86, 86, 86, 0.3)
  transition: background 0.5s ease-in-out, color 0.2s ease-in-out

.home-programs__list
  display: flex
  justify-content: space-between
  margin: 0 -40px
  margin-bottom: 50px

.home-programs__item
  padding: 0 40px
  text-align: center
  color: black
  &:hover
    color: $base-btn-color
    cursor: pointer

.home__link-active
  color: $background-circle-color !important

.home-program__title
  margin-bottom: 7px
  font-family: $font-comfortaa-bold
  font-size: 18px
  line-height: 20px
  text-transform: uppercase

.home-program__calories
  font-family: $font-family-base
  font-size: 14px
  line-height: 17px
  text-transform: uppercase

.home-programs__section
  display: flex

.home-programs__wrap
  margin-right: 20px

.home-programs__description
  width: 380px
  background: #64D370
  padding: 30px 50px
  box-shadow: 0px 0px 40px rgba(86, 86, 86, 0.3)
  border-radius: 30px
  margin-bottom: 50px

.home-programs__descriptionWrap
  display: flex
  align-items: end
  margin-bottom: 17px

.home-programs__descriptionTitle
  font-family: $font-comfortaa-bold
  font-size: 25px
  text-transform: uppercase
  color: $color-background-base
  margin-right: 20px

.home-programs__descriptionCcal
  font-family: $font-family-medium
  font-size: 18px
  line-height: 22px
  color: $color-background-base 
  text-transform: none

.home-programs__descriptionText
  font-family: $font-family-medium
  font-size: 16px
  line-height: 20px
  color: $color-background-base

.home-programs__prices
  width: 380px
  padding: 0 20px
  margin-bottom: 30px
  font-family: $font-family-base
  font-size: 15px
  line-height: 18px
  color: $text-color

.home-programs__priceList

.home-programs__priceItem
  display: flex

.home-programs__day
  margin-right: auto
  margin-bottom: 15px

.home-programs__oldPrice
  margin-right: 45px
  text-decoration-line: line-through

.home-programs__currentPrice

.home-programs__btnWrap
  width: 380px
  text-align: center

.home-programs__daysWrap

.home-programs__days
  margin-bottom: 20px

.home-programs__daysList
  width: 780px
  display: flex
  justify-content: space-between
  padding: 18px 50px 11px
  background: #F5FAFF
  box-shadow: 0px 0px 40px rgb(86 86 86 / 30%)
  border-radius: 30px

.home-programs__daysItem
  font-family: $font-comfortaa-bold
  font-size: 25px
  line-height: 28px
  text-align: center
  text-transform: uppercase
  color: $text-color
  cursor: pointer
  &:hover
    color: $base-btn-color

.home-programs__timetable
  display: flex
  width: 780px
  background: #F5FAFF
  box-shadow: 0px 0px 40px rgb(86 86 86 / 30%)
  border-radius: 30px
  padding: 30px 50px

.home-programs__timetableList
  width: 100%

.home-programs__timetableItem
  display: flex
  justify-content: space-between
  margin-bottom: 45px
  &:last-child
    margin-bottom: 0

.home-programs__timetableWrap
  width: 17.8%

.home-programs__timetableTitle
  font-family: $font-family-base
  font-size: 20px
  line-height: 24px
  color: $text-color
  margin-bottom: 5px

.home-programs__timetableTime
  font-family: $font-family-light
  font-size: 18px
  line-height: 22px
  color:  $text-color

.home-programs__timetableDescrList
  width: 74%
  list-style-type: '- '
  list-style-position: inside

.home-programs__timetableDescr
  width: 61.7%
  font-family: $font-family-light
  font-size: 18px
  line-height: 22px
  color: $text-color

.home-programs__timetablePrice
  width: 8%
  font-family: $font-family-light
  font-size: 18px
  line-height: 22px
  color: $text-color
  white-space: nowrap
  margin-left: auto

.home-programs__timetableDescrItem
  display: flex

.home-programs__timetableDescrItem::before
  content: "-"
  width: 10px

.home-programs__1
  width: 83.5%
</style>
    