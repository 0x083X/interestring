export type treeData = { //=> 树组件的数据
    title : string , // => 树的名称
    deep : number , // => 深度
    expend : boolean , // => 是否展开
    children ?: Array<treeData> // => 子节点
}

export type navsData = {
    title : string ,
    index : number ,
    top : number ,
    el : HTMLElement
}