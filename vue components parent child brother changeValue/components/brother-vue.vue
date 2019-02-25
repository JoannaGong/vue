<template>
    <div>
        <h3>宋智孝：{{ name }}</h3>
    </div>
</template>

<script>
import {EventBus} from '../main.js'
export default {
    data (){
        return {
            name: 'songzhixiao'
        }
    },
    created(){
        EventBus.$on('changeName', (name)=>{
            this.name = name
        })
    }
}
</script>

<style>

</style>

