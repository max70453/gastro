<template lang='pug'>
.home
  .container
    Header
    section.home-section
      .home-section__aside
        ul.home-section__menuBtnList
          li(v-for="btnItem, index in menuBtnImage", :key="index").home-section__btnItem
            MenuButton(:image="btnItem.src", :btnText="btnItem.text")
      .home__slider
        Slider(:slides="slides", :gallery="false")
    Benefits
    section.programs
      .innerContainer
        Programs
  DishPhotos
  .innerContainer
    section.home__form-questions.flex.flex-between
      .home__form-questions-circle
      .home__form-questions-circle2
      Checkout
      .home__faq
        .home__faq-title Часто задаваемые вопросы
        Accordion(:accordionData="accordion")
  .main-screen-ellipse
  .benefits-elipse
  Footer
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'HomePage',
  components:{
    Header: defineAsyncComponent(() => import('@/components/Header.vue')),
    Slider: defineAsyncComponent(() => import('@/components/MainSlider.vue')),
    MenuButton: defineAsyncComponent(() => import('@/components/base/MenuBtn.vue')),
    Benefits: defineAsyncComponent(() => import('@/components/Benefits.vue')),
    Programs: defineAsyncComponent(() => import('@/components/Programs.vue')),
    DishPhotos: defineAsyncComponent(() => import('@/components/DishPhotos.vue')),
    Checkout: defineAsyncComponent(() => import('@/components/Сheckout.vue')),
    Accordion: defineAsyncComponent(() => import('@/components/Accordion.vue')),
    Footer: defineAsyncComponent(() => import('@/components/Footer.vue'))
  },
  data() {
    return {
      menuBtnImage: [
        {src: 'ccal.png', text: 'Ccal'},
        {src: 'fish.png', text: 'Fish'},
        {src: 'carrot.png', text: 'Carrot'},
        {src: 'bottle.png', text: 'Bottle'},
        {src: 'meat.png', text: 'Meat'},
        {src: 'table.png', text: 'Table'},
      ],
      slides: [
        { 
          text: `Detox программа – <span class="title_accent">вкусное очищение</span> организма`,
          subText: `8 бутылочек <span class="title_accent">натуральных</span> смузи и фрешей.`,
          btnText: 'Заказать',
          priceText: 'Пробный день всего:',
          price: '427 грн',
          img: 'slide-img1.png'
        },
        {
          text: `Сервис правильного питания. <span class="title_accent">Худей быстро!</span>`,
          subText: ``,
          btnText: 'Заказать',
          priceText: 'Пробный день всего:',
          price: '-30 %',
          img: 'slide-img2.png'
        },
        {
          text: `<span class="title_accent">Доверьтесь профессионалам.</span> Я Кобылинский Кирилл - основатель.`,
          subText: `
            <span class="title_accent"> Мастер спорта </span> Украины по тяжелой атлетике.
            <span class="title_accent"> Высшее образование </span> института физкультуры(НуфвсУ).`,
          btnText: 'Мой инстаграм',
          priceText: 'Всегда открыт для клиентов',
          price: '',
          img: 'slide-img3.png'
        },
        {
          text: `Кето питание - <span class="title_accent">вкусное и экстремальное</span> быстрое похудение`,
          subText: `4 приема пищи.`,
          btnText: 'Заказать',
          priceText: 'Пробный день',
          price: 'от 490 грн',
          img: 'slide-img4.png'
        },
      ],
      accordion: [
        { 
          title: "Как осуществляется доставка правильного питания?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Можно ли менять время доставки  место?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Как и в чем приезжает еда?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Когда Вы готовите?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Какие продукты Вы используете?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Я буду есть одно и то же?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "У меня аллергия и непереносимость определенных продуктов", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "В какой очередности все есть?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },
        { 
          title: "Можно ли замораживать программу?", 
          content: "Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан." 
        },

      ]
    }
  }
}
</script>

<style lang="sass">
@import '../../styles/variables'

.home
  width: 100%
  position: relative
  overflow: hidden

.main-screen-ellipse
  width: 950px
  height: 1065px
  display: block
  position: absolute
  top: 0
  right: 0
  background: url("../../assets/background/Ellipse100.png") no-repeat 0 0
  z-index: -10

// .benefits-elipse 
//   width: 544px
//   height: 544px
//   position: absolute
//   display: block
//   background: url("../../assets/background/Ellipse115.png") no-repeat

.home-section__aside
  display: flex
  flex-direction: column

.home-section__menuBtnList

.home-section__btnItem

.home-section
  width: 100%
  display: flex
  justify-content: space-between
  margin-bottom: 8%

.home__slider
  width: 100%
  min-width: 0
  max-width: 1515px 

.home__form-questions
  position: relative
  height: 750px

.home__form-questions-circle
  width: 603px
  height: 603px
  position: absolute
  top: -48%
  right: -39%
  border-radius: 50%
  background: rgba(38, 240, 58, 0.1)

.home__form-questions-circle2
  width: 519px
  height: 519px
  position: absolute
  bottom: 4%
  left: -60%
  border-radius: 50%
  border: 30px solid rgba(38, 240, 58, 0.1)

.home__faq
  width: 100%
  max-width: 680px

.home__faq-title
  font-family: $font-comfortaa-bold
  font-size: 25px
  line-height: 28px
  text-align: center
  color: #020202
  margin-bottom: 35px
  
</style>
