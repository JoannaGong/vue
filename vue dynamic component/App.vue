<template>
    <div>
        <button @click = "selectCom = 'myTitle'">title</button>
        <button @click = "selectCom = 'myAuthor'">author</button>
        <button @click = "selectCom = 'myArt'">art</button>
        <hr>
        <p>{{ selectCom }}</p>
        <keep-alive> // keep-alive 组件动态切换时，可避免组件反复渲染
            <component :is="selectCom"></component>
        </keep-alive>
        
    </div>
</template>
<script>
import title from "./components/title.vue"
import author from "./components/author.vue"
import art from "./components/art.vue"

export default {
    data (){
        return {
            selectCom: "my-title"
        }
    },
    components: {
        myTitle: title,
        myAuthor: author,
        myArt: art
    }
}
</script>
<style>
    
</style>
