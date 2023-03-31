<template lang='pug'>
.accordion
    .panel(v-for="(item, index) in accordionData")
        .panel__title(@click="activePanel(index)" :class=" { 'panel__active' :  panel == index } ")
            | {{ item.title }}
        .panel__body(v-show="panel==index")
            | {{ item.content }}
            
</template>
                
<script>
    export default {
        name: 'AccordionComponent',
        props: {
            accordionData: Array
        },
        data() {
            return {
                sel: 0,
                panel: null,
            }
        },
        methods: {
            activePanel(i){
                if(this.panel === i){
                    this.panel = null;
                }
                else{
                     this.panel = i;
                }
            }
        }
    }
</script>

<style lang="sass">
@import '../styles/variables'

.panel__active.panel__title
    background: #64D370 
    color: #F5FAFF
    transition: 0.8s ease-in

.panel__active.panel__title::before
    filter: invert(100%) sepia(33%) saturate(2441%) hue-rotate(178deg) brightness(103%) contrast(103%)
    transform: rotate(90deg)
    transition: 0.2s ease-in

.accordion
    width: 100%

.panel    
    width: 100%
    background: #F5FAFF
    box-shadow: 0px 0px 20px rgba(86, 86, 86, 0.2)
    border-radius: 20px
    background-color: #64D370   
    &:hover
        .panel__title
            background-color: transparent
            color: #F5FAFF
            transition: 0.2s ease-in
        .panel__title::before
            filter: invert(100%) sepia(33%) saturate(2441%) hue-rotate(178deg) brightness(103%) contrast(103%)

.panel:not(:last-child)
    margin-bottom: 20px 

.panel__title
    padding: 10px 20px
    position: relative
    font-size: 16px
    line-height: 133.8%
    letter-spacing: 0.025em
    background: #F5FAFF
    color: #020202
    border-radius: 190px
    &::before
        content: ''
        display: block
        position: absolute
        width: 10px
        height: 15px
        right: 20px
        top: 13px
        background: url('../assets/Arrow.svg') no-repeat center
        background-size: contain

.panel__body
    color: #F5FAFF
    font-family: $font-family-base
    font-size: 12px
    line-height: 133.8%
    letter-spacing: 0.025em
    padding: 5px 35px 25px 20px

</style>
                