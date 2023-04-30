<script setup lang='ts'> 
import {ref,reactive} from 'vue'

</script>

<template>
    <div class="gmCt-out">
        <header>
            <a href="#">最新</a>
            <a href="#">最热</a>
        </header>
        <main class="main">
            <div class="article" v-for="item in 40">
                <div class="name">321312</div>
                <div class="title">123213</div>
                <div class="others">312321</div>
            </div>
        </main>
    </div>
</template>

<style scoped lang='less'>
    .gmCt-out{
        background-color: var(--bg1-color);
        width: 720px;
        margin-right: 30px;
        header {
            border-bottom: 1px dashed #000;
           &>a{
            color: green;
            margin: 0 8px;
           } 
        }
        main.main{
            &>div.article {
                margin: 1rem 5px 0;
            }
        }
    }
</style>