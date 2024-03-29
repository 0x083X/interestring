# 树形组件  
树形组件的主要难点在于  
    
- 数据集的定义  
- 树形组件的展开和收回的逻辑判断  
- 用css来凸显树形组件  
- 组件如何递归使用  

进阶:  

    模拟vue,uniapp官网API文档那种三分化布局,最左边为树形组件,中间为文章内容,右边为文章目录的布局并实现  

中间文章部分  
    
- 我是直接使用vue-router,用路由来表示中间文章的显示  

右侧的文章目录的实现  

- 一开始我是想用emit在每个子路由onMounted生命周期函数中向父组件传递该文章有的文章目录结构,但是后来写的时候感觉每一个子路由都需要这样写,耦合度太高了.就直接换下一种写法  
- 在父组件中定义一个自定义指令,将自定义指令加给router-view,每次切换路由的时候自定义指令就会被触发,通过比较前后两次自定义指令中的value值(自己传的)是否改变,判断是否需要重新渲染文章目录结构。  

    - 注意  
    1.给router-view添加自定义指令,router-view改变的时候不会触发自定义指令的updated生命周期函数   
    2.我们通过DOM操作来选中路由中的节点时,在切换路由的时候会选中之前路由的节点,**这是因为路由切换会改变页面上的组件，但是不会重新加载整个页面。这意味着，如果你在一个组件中使用了DOM操作来选中一个节点，当路由切换到另一个组件时，这个节点可能仍然存在于DOM树中，但不再可见。**我们可以通过给router-view添加:key 来解决这个问题。 **当你给 router-view 添加一个唯一的 key 值时，每次路由切换时，都会强制重新渲染路由组件。这样，之前的DOM操作就不会影响到新的路由组件了。**

- 获取到了文章的目录结构后需要实现点击目录实现跳转以及滑动滚动条进行选中目录的切换  
- 对于点击目录进行跳转有多种实现方法  
    
    1.通过element.scrollToView来跳转到element的位置.我们需要在获取文章目录结构的时候存下对应的element  
    2.通过window.srollTo({top:?})来指定移动到距离窗口顶部距离为top的位置，这需要我们在获取文章目录结构的时候存下每个目录距离窗口顶部的距离 -- offsetTop  '
    
- 实现滑动滚动条进行选中目录的切换。通过给window添加scroll事件.每当滑动的时候获取scrollY,也就是距离顶部的距离，通过将scrollY和文章目录距离窗口顶部的距离(从大到小)进行比较,如果超过了，就代表选中的文章目录就是它，并退出循环。**可以使用节流进行优化**

    - 注意  
    1.当我们点击了目录实现跳转的时候会触发Window.scroll事件,会执行事件中的判断条件,有时候它和点击目录实现跳转的结果会不一样，这就需要我们debug了。   
    2.scrollY是有小数的,**需要我们使用Math.ceil对它进行向上取整**.如果使用Math.floor或者不使用Math.ceil容易出现(1)中说的问题。因为在存储每个目录距离窗口顶部的距离的时候会默认的对它进行Math.ceil向上取整?  

优化  

    1.使用Transition对路由、组件进行淡入、淡出的美化
     

      
    

