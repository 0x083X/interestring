<script setup lang='ts'> 
import {ref,reactive} from 'vue'
import headBar from './headBar.vue';
import leftNav from './leftNav.vue'
import homeContent from './homeContent.vue'
import rightNav from './rightNav.vue'
</script>


<template>
    <headBar></headBar>
    <div class="hm-content">
        <leftNav></leftNav>
        <div class="timeline-content">
            <homeContent></homeContent>
            <rightNav></rightNav>
        </div>
    </div>
</template>

<style scoped lang='less'>
    .hm-content{
        background-color: var(--bg-color);
        margin: 5rem auto 0;
        display: flex;
        max-width: 1200px;
        .timeline-content{
            flex: 1;
            margin: 0 auto;
            border: 1px solid #000;
            display: flex;
        }
    }
</style>