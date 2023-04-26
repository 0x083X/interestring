//一定要导出，不然打包打不了


//获取canvas标签(类型断言)

export namespace A {
    const canvas: HTMLCanvasElement = document.querySelector('.canvas') as HTMLCanvasElement
    //创建2d
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    //设定画布的宽高
    canvas.height = screen.availHeight
    canvas.width = screen.availWidth
    //设置下落的单词
    const strs: string[] = 'KGX2134SADSADSADW13123'.split('')
    //获取宽度(一个单词占10px)
    let arr = Array(Math.ceil(canvas.width / 10)).fill(0)
    const rain = () => {
        //设置背景颜色
        ctx.fillStyle = "rgba(0,0,0,0.05)"
        //设置画布
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        //设置文字颜色
        ctx.fillStyle = "#0f0"
        //绘制文本(一次绘制arr数组长度个)
        arr.forEach((item, index) => {
            ctx.fillText(strs[Math.floor(Math.random() * strs.length)], index * 10, item + 10)
            arr[index] = arr[index] >= canvas.height || arr[index] >= 10000 * Math.random() ? 0 : arr[index] + 10
        })
    }
    setInterval(rain, 40)
}

/**
 * 思路来源 https://www.bilibili.com/video/BV1wR4y1377K?p=8
 */

