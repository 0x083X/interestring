//使用rollup打包工具
//解析ts的工具
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import { fileURLToPath } from 'url'
const metaUrl = fileURLToPath(import.meta.url)
const dirName = path.dirname(metaUrl)
console.log(dirName + '\\index.js')
export default {
    input: './index.ts',
    output: {
        file: path.resolve(dirName + '\\index.js')
    },
    plugins: [
        ts()
    ]
}