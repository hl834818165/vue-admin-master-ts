import Vue from 'vue'
import Router from 'vue-router'
import { RawLocation } from 'vue-router'
import { addRouter, setClickRouter } from '@/unit/unit'
import store from './store'
import { Notification } from 'element-ui'
Vue.use(Router)

// 路由懒加载
const _import = (r: string) => (file: (arg0: any) => void) => require.ensure([], () => file(require(`@/views${r}.vue`)))

// 初始路由
const initRouters = [
  {
    path: '/',
    name: 'Login',
    meta: {
      flag: true
    },
    component: _import('/Login/Login')
  },
  {
    path: '/NotFound/NotFound',
    name: 'NotFound',
    meta: {
      flag: true
    },
    component: _import('/NotFound/NotFound')
  }
]
// 添加路由方法
const createRouter = () => new Router({
  routes: initRouters
})

// 添加初始路由
const router: any = createRouter()

// 解决点击同一个路由出现错误的情况
const originalPush: Function = Router.prototype.push
Router.prototype.push = function push(location: RawLocation) {
  return originalPush.call(this, location).catch((err: Error) => err)
}

// 进入路由之前 动态添加路由
let isReplace = true // 控制刷新
router.beforeEach((to: any, from: any, next: any) => {
  let states: any = store.state
  let token: String = states.base.xToken
  let limit: Array<any> = states.base.nowLimit
  if (!token) { // 没有token 并且 进入的不是登录页面  重定向到登录页面
    if (to.path !== '/') {
      next({
        path: '/'
      })
      Notification.error({
        title: '错误',
        message: '您还未登录'
      })
    } else {
      next()
    }
  } else {  // 有token
    if (to.path === '/') { // 有token进入登录页面
      next()
    } else { // 有token进入非登录页面
      if (isReplace && to.path !== from.path) {
        isReplace = false
        addRouter(limit)
        next({
          path: to.path
        })
      } else {
        next()
      }
      if (to.name) setClickRouter(to)
    }
  }
})

// // 重置路由
function resetRouter() {
  const newRouter: any = createRouter()
  router.matcher = newRouter.matcher
}

export {
  router,
  resetRouter
}