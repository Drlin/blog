import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
