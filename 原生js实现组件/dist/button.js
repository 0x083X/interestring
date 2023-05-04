define((function () { 'use strict';

    class kBtn extends HTMLElement {
      type = {
        primary: '',
        warning: 'warning',
        danger: 'danger'
      };
      constructor() {
        super();
        let shadowRoot = this.attachShadow({
          mode: 'open'
        }); // => 影子dom的创建
        let tem = document.querySelector('template'); // => 获取template
        let cont = tem.content.cloneNode(true); // => 克隆一份template的内容,防止污染
        this._btn = cont.querySelector('button'); // => 获取template中的按钮
        shadowRoot.append(cont);
      }
      connectedCallback() {
        console.log("我被加载了");
      }
      static get observedAttributes() {
        // => 返回attributeChangedCallback监听的属性
        return ['type'];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        this.render(this.type[newValue]); // => 向render函数传递参数
        this.querySelector('span').innerHTML = newValue;
      }
      render(str) {
        this._btn.className = str != '' ? `k-btn-${str}` : 'k-btn';
      }
    }
    window.customElements.define('k-btn', kBtn);

}));
