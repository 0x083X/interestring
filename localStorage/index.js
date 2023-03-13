//定义时间的枚举类型
// 字典 Dictionaries,expire过期时间key,permanent永久不过期
var Dictionaries;
(function (Dictionaries) {
    Dictionaries["permanent"] = "permanent";
})(Dictionaries || (Dictionaries = {}));

/**
 * 自定义 设置localStorage的函数
 */
class localStorageF {
    //时间的默认值就是永久
    set(key, value, expired = Dictionaries.permanent) {
        //设置data 
        const data = {
            value,
            [Dictionaries.permanent]: expired
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key) {
        //通过key取出localStorage中的data(类型为string或者是null)
        let value = localStorage.getItem(key);
        if (value != null) {
            //将数据变成对象类型
            const data = JSON.parse(value);
            //获取过期时间
            const time = data.permanent;
            //获取现在时间
            const now = new Date().getTime();
            //如果时间过期了就将localStorage删除
            if (time != Dictionaries.permanent && time <= now) {
                this.remove(key);
                return {
                    message: `您的key已经过期${data.value}`,
                    value: null
                };
            }
            else {
                return {
                    message: "成功读取到key",
                    value: data.value
                };
            }
        }
        //如果value是null
        else {
            return {
                message: 'localStorage中无此数据',
                value: null
            };
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { localStorageF };
