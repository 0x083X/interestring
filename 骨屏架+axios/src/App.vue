<script setup lang="ts">
    import {ref,reactive,defineAsyncComponent} from 'vue'
    import skeleton from './components/skeleton.vue';
    const SyncVue = defineAsyncComponent(()=>import('./components/sync.vue')) //导入异步组件
</script>

<template>
  <!--
    导入异步组件一定要用Suspense
    提供两个插槽，一个是展示的组件
    一个是加载的时候展示的东西(骨屏架)
  -->
  <Suspense>
    <!--展示的组件  -->
    <template #default>
      <SyncVue></SyncVue>
    </template>
    <!--加载的时候展示的组件-->
    <template #fallback> 
      <skeleton></skeleton>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
