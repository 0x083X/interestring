<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent, onMounted, DirectiveBinding, onUpdated, } from 'vue'
import { treeData, navsData } from './utils/type';
import tree from './components/tree.vue';
import { RouterView, useRoute } from 'vue-router'
import router from './router';
let startTime = new Date().getTime()
onMounted(() => {
  window.addEventListener('scroll', function () { // => 添加滚动事件
    let now = new Date().getTime()
    if (now - startTime >= 100) {
      for (let i = NAVSDATA.value.length - 1; i >= 0; i--) {
        if (Math.ceil(window.scrollY) >= NAVSDATA.value[i].top) {
          selectIndex.value = i
          break
        }
      }
    }
  })
})
const getNavs = (target: NodeListOf<HTMLElement>) => {
  if(target.length == 0) { // => 如果不存在target
    NAVSDATA.value.length = 0
  }
  for (let i = 0; i < target.length; i++) {
    let obj = {
      title: target[i].innerHTML,
      index: i,
      top: target[i].offsetTop,
      el: target[i]
    }
    NAVSDATA.value[i] = obj
  }
}
const TREEDATA = ref<treeData[]>([
  {
    title: '1',
    expend: false,
    deep: 0,
    children: [
      {
        title: '1-1',
        expend: false,
        deep: 1,
        children: [
          {
            title: '1-1-1',
            expend: false,
            deep: 2,
          },
          {
            title: '1-1-2',
            expend: false,
            deep: 2
          }
        ]
      },
      {
        title: '1-2',
        expend: false,
        deep: 1
      },
      {
        title: '1-3',
        expend: false,
        deep: 1
      }
    ]
  },
  {
    title: '2',
    expend: false,
    deep: 0,
    children: [
      {
        title: '2-1',
        expend: false,
        deep: 1
      }
    ]
  },
  {
    title: '3',
    expend: false,
    deep: 0
  }
])
const NAVSDATA = ref<navsData[]>([])
const selectIndex = ref(0) // => 选中的标题
const changeTitle = (index) => { //跳转相应标题的位置
  selectIndex.value = index
  NAVSDATA.value[index].el.scrollIntoView(true)
  // window.scrollTo({
  //   top : NAVSDATA.value[index].top + 1,
  // })
}
let oldValue = ref(0) // => 记录之前的router.id
const vChange = {
  mounted(el:HTMLElement, binding:DirectiveBinding, vnode, prevVnode) {
    if(binding.value != oldValue.value) { // => 如果view-router中的数据变化了
      const navs = document.querySelectorAll('h1,h2,h3,h4,h5,h6') as  NodeListOf<HTMLElement>
      getNavs(navs)
      oldValue.value = binding.value // => 修改oldValue
    }
  },
}
</script>

<template>
  <div class="App-wrap">
    <tree :data="TREEDATA"></tree>
    <div class="content">
      <RouterView v-slot="{ Component, route }" @sendMsg="getNavs" :key="$route.meta.id as string">
        <Transition name="fade">
          <component :is="Component" v-change="route.meta.id"></component>
        </Transition>
      </RouterView>
    </div>
    <div class="navs">
      <div>content</div>
      <div v-for="(item, index) in NAVSDATA">
        <div class="navItem" @click="changeTitle(index)" :style="{ color: selectIndex == index ? 'red' : '', }">{{
          item.title
        }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.App-wrap {
  display: flex;

  &>div.content {
    border-left: 1px dashed #000;
    border-right: 1px dashed #000;
    padding-left: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.navs {
  height: 100px;
  position: sticky;
  top: 0;
  right: 0;

  & .navItem {
    cursor: pointer;

    &:hover {
      color: #aaa;
    }
  }
}</style>