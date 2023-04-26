<script setup lang='ts'> 
import {ref,reactive} from 'vue'
import headBar from './components/headBar.vue';
</script>

<template>
<headBar></headBar>
<div class="contentBox">
  <div v-for="item in 10" style="height: 200px;">
    {{ item }}
  </div>
</div>
</template>

<style scoped lang='less'>
  .contentBox {
    margin-top: 30px;
  }
</style>