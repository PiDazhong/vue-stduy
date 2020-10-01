import Vue from 'vue'

const focus = Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
})

const has = Vue.directive('has', {
  inserted: function (el, binding, vnode) {
    const {value} = binding
    const roles = ['admin', 'editor']
    if(value && value instanceof Array && value.length > 0){
      const permissionRoles = value
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      if(!hasPermission){
        el.parentNode && el.parentNode.removeChild(el)
      }
    }else {
      console.log('格式错误')
    }
  }
})

export {focus, has}
