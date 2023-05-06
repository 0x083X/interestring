<script setup lang='ts'> 
import {ref,reactive,onMounted,computed} from 'vue'
import {RouterLink} from 'vue-router'
let listData = ref(new Array(50).fill(0).map((item,index)=>item + index)) // => 数据
// console.log(listData.value)
let height = ref(50) // => 每个数据的高度(固定)
let itemSize = ref(50) // => 总共有50条数据
let screenHeight = ref(300) // 渲染区域高度
let start = ref(0) // => 起始索引
let end = ref(0) // => 结束索引
let currentOffset = ref(0) // => 偏移量

let listHeight = computed(()=>{ // => 占位元素的高度
    return itemSize.value * height.value
})
let visibleCount = computed(()=>{ // => 渲染区域元素个数
    return Math.ceil(screenHeight.value / height.value)
})
let visibleData = computed(() => { // => 获取渲染区域的元素
    return listData.value.slice(start.value,end.value)
})
const scrollF = (target) => {
    const scrollTop = target.scrollTop
    start.value = ~~(scrollTop / height.value) // => 获取起始索引
    end.value = start.value + visibleCount.value
    currentOffset.value = scrollTop - (scrollTop  % height.value) // => 获取偏移量
    // console.log(scrollTop,start.value,end.value,currentOffset.value)
}
onMounted(()=>{
    start.value = 0
    end.value = start.value + visibleCount.value
    document.querySelector('.main').addEventListener('scroll',function(e){
        scrollF(e.target)
    })
})


</script>

<template>
    <RouterLink :to="'/'">to index</RouterLink>
    <div class="main"> 
        <div class="phantom" :style="{height:listHeight+'px',}"></div> <!--占位元素-->
        <div class="content" :style="{transform:`translate3d(0, ${currentOffset}px, 0)`}"> <!--内容-->
            <div v-for="(item,index) in visibleData" :key="index" :style="{height:height+'px',lineHeight:height+'px',}">
                {{ item }}
            </div>
        </div>
    </div>
    <div>1</div>
</template>

<style scoped lang='less'>
    .main {
        height: 350px;
        background-color: pink;
        overflow: auto;
        position: relative;
    }
    .content {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>