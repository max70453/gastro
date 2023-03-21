<template lang='pug'>
.checkout
    h2.checkout__title Оформить заказ
    .checkout__suptitle Обсудите все детали заказа по телефону или сами укажите все подробности онлайн
    form.checkout-form(action='checkout', method="POST", @submit.prevent="submitCeckout")
        .checkout-form__wrap
            label.checkout-form__label.label-invalid(v-if="v$.name.$invalid && v$.name.$error", for="username") Имя
            label.checkout-form__label.label-valid(v-else-if="!v$.name.$invalid && v$.name.$touch", for="username") Имя
            label.checkout-form__label(v-else, for="username") Имя
            input.checkout-form__inp(
                type="text",
                id="username",
                name="username",
                placeholder="Иван",
                v-model="name",
                @focus="colorLabelName = true",
                @blur="colorLabelName = false")
            .checkout-form__valid-marker.invalid(v-if="v$.name.$invalid && v$.name.$error")
            .checkout-form__valid-marker.valid(v-if="!v$.name.$invalid && v$.name.$touch")
        .checkout-form__wrap
            label.checkout-form__label.label-invalid(v-if="v$.phone.$invalid && v$.phone.$error", for="phone") Номер телефона
            label.checkout-form__label.label-valid(v-else-if="!v$.phone.$invalid && v$.phone.$touch", for="phone") Номер телефона
            label.checkout-form__label(v-else, for="phone") Номер телефона
            input.checkout-form__inp(
                type="phone",
                id="phone",
                name="phone",
                placeholder="0972140632",
                v-model="phone",
                @focus="colorLabelPhone = true",
                @blur="colorLabelPhone = false")
            .checkout-form__valid-marker.invalid(v-if="v$.phone.$invalid && v$.phone.$error")
            .checkout-form__valid-marker.valid(v-if="!v$.phone.$invalid && v$.phone.$touch")
        .checkout-form__wrap-radio
            label.checkout-form__label-radio
                input.checkout-form__radio(type="radio", name="discount", value="")
                span.checkout-form__custom-radio
                | Тест-день! Получить скидку -30%?
        .checkout-form__wrap-radio
            label.checkout-form__label-radio 
                input.checkout-form__radio(type="radio", name="agreement", value="")
                span.checkout-form__custom-radio
                | Согласен с 
                span.text-accent условиями сотрудничества 
        .checkout-form__btn-wrap
            button.checkout-form__btn.base-btn(type="submit") Заказ по телефону
        span.checkout-form__or или
        .checkout-form__btn-wrap
            button.base-btn(type="submit") Онлайн заказ
        
</template>
            
<script>
// import { defineAsyncComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
    export default {
        name: 'CheckoutComponent',
        components: {
            // Button: defineAsyncComponent(() => import('@/components/base/Button.vue')),
            // Slider: defineAsyncComponent(() => import('@/components/MainSlider.vue')),
        },
        data() {
            return {
                v$: useVuelidate(),
                colorLabelName: false,
                colorLabelPhone: false,
                activeClass: 'color-label',
                inputName: null,
                name: '',
                phone: '',
            }
        },
        validations () {
            return {
                name: {required},
                phone: {required, minLength: minLength(10)},
            }
        },
        methods: {
            async submitCeckout(){
                const isFormCorrect = await this.v$.$validate()
                // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
                if (!isFormCorrect){ 
                    return
                    // actually submit form
                }
            }
        }
    }
</script>

<style lang="sass">
@import '../styles/variables'

.checkout
    max-width: 418px
    text-align: center

.checkout__title
    font-family: $font-comfortaa-bold
    font-size: 30px
    line-height: 33px
    text-align: center
    color: #020202
    margin-bottom: 2px

.checkout__suptitle
    font-family: $font-family-base
    font-size: 16px
    line-height: 133.8%
    text-align: center
    letter-spacing: 0.025em
    color: #020202
    margin-bottom: 30px

.checkout-form
.checkout-form__or
    display: inline-block
    font-family: $font-comfortaa-bold
    font-size: 22px
    line-height: 133.8%
    text-align: center
    letter-spacing: 0.025em
    color: #020202
    margin: 10px 0

.checkout-form__wrap
    display: flex
    flex-wrap: wrap
    position: relative
    margin-bottom: 30px

.checkout-form__wrap-radio
    display: flex
    align-items: center
    margin-bottom: 15px
    &:nth-child(4)
        margin-bottom: 30px

.checkout-form__label
    font-family: $font-comfortaa-bold
    font-size: 18px
    line-height: 133.8%
    letter-spacing: 0.025em
    color: #020202
    margin-bottom: 5px
    padding-left: 20px

.checkout-form__label-radio
    display: flex
    align-items: center
    justify-content: start
    padding-left: 14px
    font-family: $font-comfortaa-bold
    font-size: 16px
    color: #020202

.checkout-form__inp
    background: #DEE6EE
    border-radius: 190px
    width: 418px
    height: 40px
    border: none
    padding-left: 20px
    outline: none
    &:hover, &:focus, &:active 
        border: 1px solid #64D370

.checkout-form__radio
    width: 0
    height: 0
    position: absolute
    opacity: 0
    &:checked + .checkout-form__custom-radio::before
        transform: translate(-50%, -50%) scale(1)

.checkout-form__custom-radio
    display: block
    position: relative
    width: 26px
    height: 26px
    background: #DEE6EE
    border-radius: 50%
    margin-right: 20px
    &::before
        content: ''
        position: absolute
        display: block
        width: 12px
        height: 12px
        background: #64D370
        border-radius: 50%
        left: 50%
        top: 50%
        transform: translate(-50%, -50%) scale(0)
        transition: 0.2s ease-in
    &:hover:before
        width: 6px
        height: 6px
        background: #64D370
        transform: translate(-50%, -50%) scale(1)
        transition: 0.2s ease-in

.checkout-form__btn-wrap
    width: 298px
    font-size: 22px
    margin: 0 auto

.checkout-form__btn

.color-label, .checkout-form__text-color
    color: #64D370

.checkout-form__valid-marker
    border-radius: 50%
    position: absolute
    top: 41px
    right: 20px
    width: 14px
    height: 14px

.valid
    background: #64D370

.invalid
    background: #F87676

.label-valid
    color: #64D370

.label-invalid
    color: #F87676

</style>
            