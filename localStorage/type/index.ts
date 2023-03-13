/**
 * 定义类型
 */
import {Dictionaries} from '../enum/index'
export type Key = string
//localStorage接收的data类型
export type Data<T> = {
    value : T ,
    [Dictionaries.permanent] : Dictionaries.permanent
}
//get函数返回的数据类型
export type resultDate<T> = {
    message : string ,
    value : T | null
}
export interface localStorageI {
    //有set方法(给localstorage赋值,参数为key,data(任意类型),时间)
    set: <T=any>(key:Key, value:T, expired:Dictionaries.permanent)=>void
    //get方法(参数index)
    get: <T>(key:Key)=>resultDate<T|null>
    //remove方法
    remove: (key:Key)=>void
    //clear方法
    clear: ()=>void
}