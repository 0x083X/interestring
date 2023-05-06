

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import {RouterLink} from 'vue-router'
let len = 20
onMounted(()=>{
    Dfs(0)
})
function Dfs(num, total = 100000) {
    let ul = document.querySelector('ul')
    if (num >= total)
        return
    // => settimeout
    window.requestAnimationFrame(() => {  // => window.requestAnimationFrame来代替settimeout
        let fragment = document.createDocumentFragment() // => 创建fragment对象
        for (let i = num; i < num + len; i++) {
            let li = document.createElement('li')
            li.innerHTML = (~~(Math.random() * i)).toString()
            fragment.append(li)
            // ul.append(li)
        }
        ul?.append(fragment)
        Dfs(num + 20) // => 递归调用函数,用多个settimeout来多次渲染
    });
}
</script>

<template>
    <div></div>
    <RouterLink to="/">返回index</RouterLink>
    <ul></ul>
</template>

<style scoped lang='less'></style>