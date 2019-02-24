<template>
    <div>
        <p>服务器的状态：{{ status }}</p>
        <p>hello world {{ myName }}</p>
        <button @click="changeStatus">转换</button>
        <button @click="changeParentName">按钮</button>
    </div>
</template>
<script>
export default {
    props: ['myName'],
    data (){
        return {
            status: '运行中'
        }
    },
    methods: {
        changeStatus:function(){
            this.status = '结束了'
        },
        changeParentName: function(){
            this.$emit("changeParentName", "xiaohong")
        }
    }
}
</script>