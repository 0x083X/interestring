<script setup lang='ts'> 
import {ref,reactive} from 'vue'

</script>

<template>
    <div class="lN-out"> 
        <a href="#">关注</a>
        <a href="#">综合</a>
        <a href="#">前端</a>
        <a href="#">后端</a>
        <a href="#">安卓</a>
        <a href="#">苹果</a>
        <a href="#">人工智能</a>
        <a href="#">开发工具</a>
        <a href="#">代码人生</a>
        <a href="#">阅读</a>
    </div>
</template>

<style scoped lang='less'>
    div.lN-out{
        margin-right: 20px;
        background-color: var(--bg1-color);
        width: 200px;
        height: fit-content;
        position: sticky;
        top: 5rem;
        display: flex;
        flex-direction: column;
        border: 1px dashed #bbb;
        &>a {
            text-align: center;
            display: block;
            height: 3rem;
            line-height: 3rem;
            border-bottom: 1px solid #aaa;
        }
    }
    
</style>