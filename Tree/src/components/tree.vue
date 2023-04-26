<script setup lang='ts'>
import { ref, reactive, defineProps, } from 'vue'
import { treeData } from '../utils/type';
import { RouterLink } from 'vue-router'

const props = defineProps<{ // => 定义props参数
    data: Array<treeData>
}>()

</script>

<template>
    <div>
        <div class="out" v-for="(item, index) in data" :key="index">
            <div :style="{ marginLeft: `${item.deep * 30}px`, }">
                <button v-if="item.children != undefined" @click="item.expend = !item.expend">{{ item.expend ? '-' : '+'
                }}</button>
                <RouterLink :to="{ name: item.title }">{{ item.title }}</RouterLink>
            </div>
            <Transition name="nested">
                <tree v-if='item.expend && item.children != undefined' :data="item.children"></tree>
            </Transition>
        </div>
    </div>
</template>

<style scoped lang='less'>
.nested-enter-active,
.nested-leave-active {
    transition: opacity 0.5s ease;
}

.nested-enter-from,
.nested-leave-to {
    opacity: 0;
}
</style>