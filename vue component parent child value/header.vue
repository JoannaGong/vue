<template>
    <div>
        <h1>header部分内容</h1>
        <p>传值：{{ name }}</p>
        <input type="text" v-model='name'>
        <hr>
        <app-serve :myName=name @changeParentName="changeName"></app-serve>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    },
    methods: {
        changeName:function(name){
            this.name = name
        }
    }
}
</script>