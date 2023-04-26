# 主题切换demo  

      1.实现了按钮切换网站的主题(黑暗和光明两种)
      2.实现了初次进入网站识别用户原生主题并将网站设置成相应主题的功能
      3.支持LocalStorage

实现按钮切换网站主题  

- 按钮是用 label + input 来做的将input隐藏,用label来绘制按钮,通过input的checked属性来设置相对应的css样式  
- css黑暗和光明的样式是通过给html设置相对应的class来处理的，使用了css原生的自定义属性和:root和var的语法.更多的做法请看[前端主题切换方案](https://juejin.cn/post/7134594122391748615#heading-8)  

初次进入网站实现用户主题  

- 通过prefers-color-scheme原生样式来处理  

其他点  

1. 鼠标移动到navs上显示下标出现的动画  
2. 布局()