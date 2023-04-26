<script setup lang='ts'>
import { initCustomFormatter, onMounted, reactive } from 'vue';

const props = defineProps<{//接收父元素传递的参数
    list: any[]
}>()
const pics = reactive<any[]>([]) //存放每个图片的数组
const init = () => {
    const heightArr: number[] = [] //存放高度的容器
    const width: number = 110 //left偏移量的基准值,比div的width稍大一点
    const n: number = Math.floor(document.body.clientWidth / width) //目前页面的宽度可以放下几列的瀑布图
    for (let i = 0; i < props.list.length; i++) {
        //遍历props中的list，给pics赋值
        if (i < n) { //如果i是给基准瀑布图赋值   
            props.list[i].top = 10
            props.list[i].left = width * i
            heightArr.push(props.list[i].height + 10) //给高度容器赋初值 
            pics.push(props.list[i])
        }
        //往基准瀑布图上添加元素
        else {
            let index: number = 0 //找出高度最小的基准瀑布图
            let current = heightArr[0] //高度最小初始化为第一个元素
            heightArr.forEach((h, inx) => {
                if (h < current) {
                    current = h
                    index = inx
                }
            })
            //找出了最小高度的基准瀑布元素后,将后面一张的瀑布图添加到该瀑布图的下面
            props.list[i].top = heightArr[index] + 20
            props.list[i].left = width * index
            heightArr[index] += props.list[i].height + 20 //重置heightArr[index]的高度
            pics.push(props.list[i])
        }
    }
}
onMounted(() => {
    init()
})
</script>
<template>
    <div class="warp">
        <div class="pic" v-for="(item, index) in pics" key="index"
            :style="{ top: item.top + 'px', left: item.left + 'px', height: item.height + 'px', background: item.background }">
        </div>
    </div>
</template>
<style scoped lang='less'>
.warp {
    height: 100%;
    position: relative;

    .pic {
        position: absolute;
        width: 100px; //宽度固定
    }
}
</style>