<template>
    <div>
        <p>天气情况 {{ weather }}</p>
        <button @click="changeWeather">改变天气</button>
        <button @click="changeName">改变名字</button>
        <p>{{ name }}</p>
    </div>
</template>

<script>
import {EventBus} from '../main.js'
export default {
    props: ['weather'],
    data (){
        return {
            toWeather: this.weather,
            name: 'songzhixiao'
        }
    },
    methods: {
        changeWeather:function(){
            this.$emit('changeWeather', 'cloudy')
        },
        changeName: function(){
            this.name = 'jinzhongguo'
            this.$emit('changeName', this.name)     //不需要改变父组件时，可省略
            EventBus.$emit('changeName', this.name)
        }
    }
}
</script>

<style>

</style>
