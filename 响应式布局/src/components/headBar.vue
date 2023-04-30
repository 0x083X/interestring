<script setup lang='ts'>
import { ref, reactive } from 'vue';
</script>

<template>
    <header>
        <div class="out">
            <a href="#" class="logo">
                <!-- <img src="" alt=""> -->
                <span class="logo1">这里是logo</span>
                <span class="logo2" style="display: none;">lg</span>
            </a>
            <ul class="nav-list">
                <li class="main-nav-list">
                    <i style="display: none; cursor: pointer;"  >#</i>
                    <ul class="cu">
                        <li><a href="#">首页</a></li>
                        <li><a href="#">沸点</a></li>
                        <li><a href="#">课程</a></li>
                        <li><a href="#">直播</a></li>
                        <li><a href="#">活动</a></li>
                        <li><a href="#">竞赛</a></li>
                        <li><a href="#">商城</a></li>
                    </ul>
                </li>
                <div class="block"></div>
                <ul class="right-side-nav">
                    <li><a href="#">11</a></li>
                    <li><a href="#">22</a></li>
                    <li><a href="#">中心</a></li>
                    <li><a href="#">vip</a></li>
                    <li><a href="#">消息</a></li>
                    <li><a href="#">用户</a></li>
                </ul>
            </ul>
        </div>
    </header>
</template>

<style scoped lang='less'>
header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 4rem;
    font-size: 1.2rem;
    border-bottom: 1px dashed #000;
    .out {
        margin: 0 auto;
        max-width: 1440px;
        height: 4rem;
        display: flex;
        align-items: center;

        .logo {
            width: 100px;
            margin: 0 24px 0 16px;
        }

        .nav-list {
            width: 100%;
            display: flex;

            li.main-nav-list>ul {
                display: flex;
               
                li {
                    margin: 0 10px;
                }
            }

            div.block {
                flex: 1;
            }

            .right-side-nav {
                display: flex;

                li {
                    margin: 0 10px;
                }
            }
        }
    }
}</style>