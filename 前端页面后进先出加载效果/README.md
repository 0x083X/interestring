# 前端页面后进先出加载效果  

1. 通过getBoundingClientRect获取dom的实例，在通过视口高度和实例距离视口的距离来判断节点是否需要显示 
2. 通过判断视口底部和页面底部的距离来判断是否添加元素  
3. 容易卡顿 -- 引入节流 + requestAnimationFrame