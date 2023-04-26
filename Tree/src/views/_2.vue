<script setup lang='ts'> 
// import { ref, reactive, onMounted,defineEmits } from 'vue'
// const emits = defineEmits(['sendMsg'])
// onMounted(()=>{
//     const navs = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
//     emits('sendMsg',navs)
// })
</script>

<template>
    <div>
        <h1>1内容</h1>
        <div v-for="item in 70">asdadsasdasddas</div>
        <h2>3内容</h2>
        <div v-for="item in 10">asdasdasdasdsa</div>
        <h3>4标题</h3>
        <div v-for="item in 30">dasdasdas</div>
        <h4>我是55</h4>
        <div v-for="item in 50">asdasddasdas</div>
    </div>
</template>

<style scoped lang='less'>

</style>