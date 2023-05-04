import babel from 'rollup-plugin-babel'
export default {
    input : './button.js' ,
    output : {
        dir : 'dist',
        format: 'amd',
    } ,
    plugins: [
        babel({
            exclude  :'node_modules/**',
        }),
    ],
}