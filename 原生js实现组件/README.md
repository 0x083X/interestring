# Web Components初体验  
*Web Component有三要点*  

    1.custom Elements
    2.shadow Dom
    3.template

1.button组件  

*思路*    
1. 自定义一个kBtn组件并在window上注册挂载  
2. 通过 observedAttributes监听组件attribute的变化,然后通过attributeChangedCallback来修改组件的class.  

2.input组件  

    完成了简易的v-model?  

*思路*  

1. 依旧是使用了custom的api