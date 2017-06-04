var Toast = {}
Toast.install = (Vue, options) => {
  Vue.prototype.$toast = (content, time) => {
    let ToastTpl = Vue.extend({
      template: `<div class="vue-toast">${content}</div>`
    })
    let tpl = new ToastTpl().$mount().$el
    tpl.style.position = 'fixed'
    tpl.style.top = 0
    tpl.style.left = '50%'
    tpl.style.transform = 'translateX(-50%)'
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, time || 3000)
  }
}
export default Toast
