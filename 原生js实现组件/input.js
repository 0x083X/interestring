class kInput extends HTMLElement {
    constructor() {
        super()
        document.querySelector('div').innerHTML = `k-input的value属性值是 ----${this.getAttribute('value')}`
        let root = this // => 记录组件本身
        let tem = document.querySelector('template') // => 获取template
        let shadowRoot = this.attachShadow({mode:'closed'}) // => 设置影子dom
        let cont = tem.content.cloneNode(true) // => 克隆一份template的content,防止污染
        this._input = cont.querySelector('input') // => 获取template中的input
        this._span = cont.querySelector('span') // => 获取template中的span
        shadowRoot.append(cont) // => 将tempalte中的内容添加到影子dom中
        this._input.addEventListener('input',function(){ // => 给input添加事件
            let val = this.value // => 获取input中的val
            root.setAttribute('value',val) // => 将input中的val赋值给组件的value
            root._span.innerHTML = val
            document.querySelector('div').innerHTML = `k-input的value属性值是 ----${val}`
        })
    }
    static get observedAttributes() {
        return ['value'] // => 监听组件的value属性
    }
    attributeChangedCallback(name,oldValue,newValue) {
        this._input.value =  newValue  // => 将value属性传给input
    } 
}
window.customElements.define('k-input',kInput)