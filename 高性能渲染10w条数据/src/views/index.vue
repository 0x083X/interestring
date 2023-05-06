
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
let startTime = ref(), endTime1 = ref(), endTime2 = ref()
onMounted(() => {
    startTime.value = new Date().getTime() // => 获取开始时间
    let divs = document.querySelectorAll('div')
    let ul = document.querySelector('ul') // => 获取ul
    for (let i = 0; i < 100000; i++) {
        let li = document.createElement('li')
        li.innerText = (~~(Math.random() * i)).toString()
        ul?.append(li)
    }
    endTime1.value = new Date().getTime() // => 获取js结束的时间
    setTimeout(() => {
        endTime2.value = new Date().getTime() // => 渲染结束的时间
    }, 0);
})
</script>

<template>
    <div>Hello!</div>
    <div>js解析结束时间{{ endTime1 - startTime }}</div>
    <div>渲染结束时间 {{ endTime2 - startTime }}</div>
    <RouterLink :to="'/'">to index</RouterLink>
    <ul>

    </ul>
</template>

<style scoped lang='less'></style>