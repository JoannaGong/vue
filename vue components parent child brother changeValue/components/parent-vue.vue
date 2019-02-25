<template>
    <div>
        <h2>今天天气：{{ weather }} & {{ name }}</h2>
        <hr>
        <child-vue :weather="weather" @changeWeather="changeW" @changeName="changeName"></child-vue>
        <hr>
        <brother-vue></brother-vue>
    </div>
</template>

<script>
import child from './child-vue'
import brother from './brother-vue'
export default {
    data (){
        return {
            weather: 'sunny',
            name: 'haha'
        }
    },
    components: {
        "child-vue": child,
        "brother-vue": brother
    },
    methods: {
        changeW:function(toWeather){
            this.weather = toWeather
        },
        changeName: function(name){
            this.name = name
        }
    }
}
</script>

<style>

</style>