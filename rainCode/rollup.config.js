//typecript编译
import ts from 'rollup-plugin-typescript2'
//path\url模块是nodejs的内置模块
import path from 'path'
import { fileURLToPath } from 'url'
//通过内置模块获取路径
const metaUrl = fileURLToPath(import.meta.url)
const dirName = path.dirname(metaUrl)
console.log(metaUrl, dirName)
export default {
    //入口
    input: 'main.ts',
    output: {
        file: path.resolve(dirName, './dist/index.js')
    },
    //插件
    plugins: [
        ts()
    ]
}