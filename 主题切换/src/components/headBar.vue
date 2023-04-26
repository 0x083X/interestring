<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
onMounted(() => {
    let mode
    mode = localStorage.getItem('mode')
    if (mode == 'dark') { // => 如果是黑暗模式
        (document.querySelector('#CButton') as HTMLInputElement).checked = true // =>checkbox设置为checked
        cBgc() // => 修改颜色
    }
    if (!mode) { // => 如果没有缓存
        console.log(2)
        mode = window.matchMedia("(prefers-color-scheme: light)").matches ? 'light' : 'dark'
        localStorage.setItem('mode', `${mode}`)
        if (mode == 'dark') { // => 如果用户默认是黑暗模式
            (document.querySelector('#CButton') as HTMLInputElement).checked = true // =>checkbox设置为checked
            cBgc() // => 修改颜色
        }
    }
})
const cBgc = () => {
    let input: HTMLInputElement = document.querySelector('input#CButton') as HTMLInputElement
    let html = document.documentElement
    if (input.checked) { // 选中是黑暗模式
        localStorage.setItem('mode', 'dark')
        html.classList.add('dark')
    }
    else {
        localStorage.setItem('mode', 'light')
        html.classList.remove('dark')
    }
}
</script>

<template>
    <div class="out">
        <div class="blogMsg">
            <img src="#" alt="#">
            <span>Home</span>
        </div>
        <div class="expend"></div>
        <div class="themeChange">
            <input type="checkbox" id="CButton" @click="cBgc">
            <label for="CButton" class="label"></label>
        </div>
        <div class="tags">
            <div>我最短</div>
            <div>我中等长度</div>
            <div>我是最长的哈哈哈</div>
        </div>
    </div>
</template>

<style scoped lang='less'>
.out {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    .expend {
        flex: 1;
    }

    .themeChange {
        #CButton {
            display: none;

            &:checked+.label::after {
                // => 小球运动
                transform: translateX(100%);
            }

            &:checked+.label:active::after {
                // => 让黑暗模式下小球被选中的时候宽度改变的时候往左边位移？？
                left: -7px;
            }
        }

        .label {
            cursor: pointer;
            width: 40px;
            height: 20px;
            border-radius: 20px;
            position: relative;
            display: block;
            background-color: var(--label-bgc);
            transition: all 0.3s;

            &::after {
                content: '';
                position: absolute;
                top: 1px;
                left: 2px;
                display: block;
                width: 18px;
                height: 18px;
                border-radius: 18px;
                background-color: var(--ball-bgc);
                transition: all 0.2s;
            }

            &:active:after {
                background: pink;
                width: 22px;
            }
        }
    }

    .tags {
        display: flex;
        align-items: center;

        &>div {
            cursor: pointer;
            position: relative;
            width: fit-content;
            margin: 0 5px;

            &::after {
                content: '';
                transition: all 0.4s;
                position: absolute;
                bottom: 0;
                left: 50%;
                display: block;
                height: 2px;
                width: 0;
                background-color: pink;
            }

            &:hover::after {
                width: 100%;
                left: 0;
            }
        }
    }
}
</style>