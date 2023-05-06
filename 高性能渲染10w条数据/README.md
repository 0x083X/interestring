**运行方式:下载到本地,用浏览器打开index.html页面**

# 高性能渲染10w条数据  

    前言: 我们可以通过index.html中得知,用时长的是页面的渲染,而不是js的解析 

- .时间分片  
    
    1. 通过递归,每次递归在settimeout中处理一定量的数据,将10w条数据通过递归settimeout分开渲染  
    2. 通过用window.requestAnimationFrame来代替settimeout,减小了快速下拉出现白屏的几率  
    3. 通过documentFragment来减少页面的重排和重绘    

- .虚拟列表(列表不同高度)
    
    参考文章 [「前端进阶」高性能渲染十万条数据(虚拟列表)](https://juejin.cn/post/6844903982742110216#heading-4)  
    
    1. 使用positions数组缓存所有list数据的height,top,bottom,在一开始的时候用自定义一个高度来初始化positions数据
    2. 在滑动过程中,通过scrollop来去positions中查找起始位置的信息(二分搜索),然后更新偏移量等等  

            难点在于1.positions数组的更新,2.起始索引的查找