<script setup lang='ts'>
    import {axios} from '../server/axios'
    interface Data {
        data : {
            name :string ,
            message : string ,
            date : string
        }
    }
    const {data} = await axios.get<Data>('./data.json')
</script>
<template>
    <div class="name">
        {{ data.name }}
    </div>
    <div class="message">
        {{ data.message }}
    </div>
    <div class="date">
        {{ data.date }}
    </div>
</template>
<style scoped lang='less'>
.class {
        width: 100px;
        height: 100px;
        background-color: white;
    }
    .message {
        width: 100px;
        height: 100px;
        background-color: white;
    }
    .date {
        width: 100px;
        height: 100px;
        background-color: white;
    }
</style>