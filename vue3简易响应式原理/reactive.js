import { trigger, track } from './effect.js';
const isObject = (target) => target != null && typeof target == 'object'; //设置递归条件 
//导出一个reactive函数
export const reactive = (target) => {
    //vue3中使用了proxy(接收两个参数，object，拦截器handler)
    return new Proxy(target, {
        //handler内置很多方法get\set等
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver);
            track(target, key); //创建结构体，收集副作用函数
            if (isObject(res)) { //监听定义的对象中是否有内置对象
                return reactive(res);
            }
            return res;
        },
        //set返回值类型为boolean
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver);
            trigger(target, key); //调用副作用函数
            return res;
        }
    });
};
