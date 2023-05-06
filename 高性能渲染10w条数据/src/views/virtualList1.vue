<script setup lang='ts'>
import { ref, reactive, onMounted, computed, onUpdated } from 'vue'
import {RouterLink} from 'vue-router'
let listData = ref<object[]>(new Array(50).fill(0).map((item, index) => { return { id: index, height: Math.floor(Math.random() * 50 + 100) } })) // => 列表数据
let estimatedItemSize = ref(100) // => 预估高度
let height = ref() // => 容器高度
let screenHeight = ref(500) // => 可视区域高度
let start = ref(0) // => 起始索引
let end = ref(0) // => 结束索引
type positionsDATA = {
    index: number,
    height: number,
    top: number,
    bottom: number
}
let positions = ref<positionsDATA[]>([]) // => 缓存数据

const initPositions = () => { // => 初始化positions
    positions.value = listData.value.map((item, index) => {
        return {
            index,
            height: estimatedItemSize.value,
            top: index * estimatedItemSize.value,
            bottom: (index + 1) * estimatedItemSize.value
        }
    })
}

const list = ref('')
const visibleCount = computed(() => { // => 可视区域元素个数
    return Math.ceil(screenHeight.value / estimatedItemSize.value)
})
onMounted(() => {
    initPositions()
    end.value = start.value + visibleCount.value
})
const items = ref('')
const updateItemSize = () => {
    Array.from(items.value).forEach(item => {
        let rect = (item as any as HTMLElement).getBoundingClientRect() // => 获取dom元素信息
        let height = rect.height
        let index = +(item as any as HTMLElement).id // => 获取 :id 的值
        let oldHeight = positions.value[index].height 
        let dValue = oldHeight - height 
        if(dValue) { // => 如果存在差值,修改positions
            positions.value[index].bottom = positions.value[index].bottom - dValue
            positions.value[index].height = height
            for(let k = index + 1; k < positions.value.length; k++) { // => 更新之前的top和bottom(存在重复赋值,可以优化)
                positions.value[k].top = positions.value[k-1].bottom
                positions.value[k].bottom -= dValue 
            }
        }
    })
}
onUpdated(() => {
    updateItemSize()
    height.value = positions.value[positions.value.length-1].bottom // => 更新总高度
    setStartOffset() // =>更新偏移量
})
type listData = {
    id : number ,
    height : number
}
const visibleData = computed(():listData[] => { // => 可视区域文本
    return listData.value.slice(start.value,end.value) as listData[]
})

const binarySearch = (list: positionsDATA[], value) => { //用二分查找找出起始位置
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);
        let midValue = list[midIndex].bottom;
        if (midValue === value) {
            return midIndex + 1;
        } else if (midValue < value) {
            start = midIndex + 1;
        } else if (midValue > value) {
            if (tempIndex === null || tempIndex > midIndex) {
                tempIndex = midIndex;
            }
            end = end - 1;
        }
    }
    return tempIndex;
}
const getStartIndex = (scrollTop = 0) => {
    return binarySearch(positions.value, scrollTop)
}
const setStartOffset = () => {
    let startOffset = start.value >= 1 ? positions.value[start.value-1].bottom : 0 ;
    (document.querySelector('._content') as HTMLElement).style.transform = `translate3d(0,${startOffset}px,0)`; // => 添加偏移量
}
const scrollEvent = () => { // => 滚动事件
    let scrollTop = (list.value as any as HTMLElement).scrollTop
    start.value = getStartIndex(scrollTop)
    end.value = start.value + visibleCount.value
    // => 获取此时偏移量
    setStartOffset()
}
</script>

<template>
    <RouterLink :to="{name:'index'}">原生渲染</RouterLink>
    <RouterLink :to="{name:'timeSlice'}">  时间分片</RouterLink>
    <RouterLink :to="{name:'virtualList'}">  固定高度的虚拟列表</RouterLink>
    <div class="_main" @scroll="scrollEvent" ref="list">
        <div class="_phantom" :style="{height:height+'px'}"></div>
        <div class="_content">
            <div v-for="(item,index) in visibleData" :key="index" :style="{height:item.height + 'px'}" ref="items" :id="item.id.toString()">
                {{ item }} + {{ index }}
            </div>
        </div>
    </div>
</template>

<style scoped lang='less'>
._main {
    background-color: pink;
    overflow: auto;
    position: relative;
    height: 500px;
}

._phantom {
    height: 10000px;
}
._content {
    position: absolute;
    top: 0;
    left: 0;
}
</style>