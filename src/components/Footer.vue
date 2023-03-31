<template lang='pug'>
.footer
    .innerContainer
        .footer__content
            .footer__links
                a.footer__link(:href="link.href", v-for="link in links") {{ link.title }}
            .footer__logo-wrap
                .footer__logo
            .footer__info-wrap
                .footer__info-title Условия сотрудничества
                .footer__info-faq FAQ
                .footer__socials
                    .footer__social-pic(v-for="social in socials")
                        img.footer__social-img(:src="require(`../assets/${social.name}`)", :alt="social.alt")
                .footer__number +38 (068) 949 - 49 - 19
                
</template>

<script>
    export default {
        name: 'FooterComponent',
        data() {
            return {
                links: 
                [
                    {title: 'Программы питания', href: "#"}, 
                    {title: 'О нас', href: "#"}, 
                    {title: 'Бизнес-ланчи', href: ""}, 
                    {title: 'Gastro Shop', href: "#"}, 
                    {title: 'Блог', href: "#"}
                ],
                socials: 
                [
                    {name: 'instagram.svg', alt: 'instagram'},
                    {name: 'facebook.svg', alt: 'facebook'},
                    {name: 'viber.svg', alt: 'viber'},
                    {name: 'telegram.svg', alt: 'telegram'}
                ]
            }
        }
    }
</script>

<style lang="sass">
@import '../styles/variables'

.footer
    background: #F5FAFF
    box-shadow: 0px 0px 30px rgba(86, 86, 86, 0.25)
    margin-bottom: 100px
    padding: 41px

.footer__content    
    display: flex
    align-items: center
    justify-content: space-between

.footer__links
    display: flex
    flex-direction: column
    
.footer__link
    font-family: $font-comfortaa-bold
    font-size: 20px
    line-height: 22px
    color: #020202
    margin-bottom: 17px
    &:hover
        color: #64D370

.footer__logo-wrap
    max-width: 422px

.footer__logo
    width: 422px
    height: 179px
    background: url('../assets/logo/footer-logo.png') no-repeat
    margin: 0 auto

.footer__info-wrap
    max-width: 227px
    text-align: right
    font-family: $font-comfortaa-bold
    font-size: 20px
    line-height: 22px
    color: #020202

.footer__info-title
    margin-bottom: 19px

.footer__info-faq
    margin-bottom: 21px

.footer__socials
    display: flex
    justify-content: flex-end
    margin-bottom: 15px

.footer__social-pic
    width: 30px
    height: 30px
    margin-right: 15px
    &:last-child
        margin-right: 0

.footer__social-img
.footer__number
    font-family: $font-family-bold
    font-size: 20px
    line-height: 24px
    color: #64D370

</style>


