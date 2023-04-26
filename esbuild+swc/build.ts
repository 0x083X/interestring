//打包代码
import esbuild from 'esbuild'
import swc from '@swc/core'
import fs from 'node:fs'

//配置 esbuild,esbuild通过go的多线程写的需要 await
await esbuild.build({
    entryPoints : ['./main.ts'], //入口文件
    bundle : true, //模块单独打包
    loader: {
        '.js' : 'js' ,
        '.ts' : 'ts' ,
        '.jsx' : 'jsx' ,
        '.tsx' : 'tsx'
    },
    treeShaking : true,
    define : {
        'process.env.NODE_ENV' : '"production"'
    },
    //加入 swc
    plugins : [
        {
            name : 'swc-loader' ,
            setup(build){
                build.onLoad({filter : /\.(js|ts|tsx|jsx)$/ }, (args)=> {
                    //args就是读取的js,ts,tsx,jsx文件的信息(1.path,2.namespace,3.suffix,4.pluginData)
                    // console.log(args)
                    //读取文件信息
                    const content = fs.readFileSync(args.path, "utf-8")
                    //将es6转换成es5
                    const {code} = swc.transformSync(content,{
                        filename : args.path
                    })
                    console.log(code)
                    return {
                        contents: code
                    }
                })
            }
        }
    ],
    //打包到哪里
    outdir : "dist"
})
