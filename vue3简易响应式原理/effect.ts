//收集副作用函数的函数
let activeEffect:Function //全局变量收集副作用函数
export const effect = (fn:Function) => {
    //使用了闭包
    const _effect = function() {
        activeEffect = _effect
        fn()
    }
    _effect()
}

//实现存储的结构体
const targetMap = new WeakMap() //WeakMap的index是object对应targer,value是一个map
export const track = (target:any,key:any) => {
    let depsMap = targetMap.get(target) //获取WeakMap中的value(Map)
    if(!depsMap) { //如果取不到数据进行初始化
        depsMap = new Map()
        targetMap.set(target,depsMap)
    }
    //depsMap是一个map，index是key,value是一个set(set中存的就是副作用函数)
    let deps = depsMap.get(key) //获取depsMap中的value，也就是set
    if(!deps) { //如果deps为空，进行初始化
        deps = new Set<Function>()
        depsMap.set(key,deps)
    }
    //往set中添加副作用函数
    deps.add(activeEffect)
}

//实现trigger
export const trigger = (target:any,key:any) => {
    //通过target和key获取副作用函数
    const depsMap = targetMap.get(target) //获取Map
    const deps = depsMap.get(key) //获取Set
    deps.forEach(effect => effect())
}