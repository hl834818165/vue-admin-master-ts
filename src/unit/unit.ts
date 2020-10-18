import { router, resetRouter } from '@/router'
import store from '../store'

// 路由 - 懒加载
const _import = (r: string) => (file: (arg0: any) => void) => require.ensure([], () => file(require(`@/views${ r }.vue`)))

// 清空 - 路由
const resetRouterFn = function () {
  resetRouter()
}
/**
 * 筛选 - 路由
 * @param list 用户路由表
 * @param pary 返回整理后的路由
 */
const filterRouter = function (list: Array<any>, pary: Array<any>) {
  list.forEach(item => {
    if (item.children.length) {
      filterRouter(item.children, pary)
    } else {
      pary.push({
        path: item.path ? item.path : item.link,
        name: item.name,
        meta: {
          parentName: item.parentName ? item.parentName : '',
          name: item.name,
          requiresAuth: true
        },
        component: _import(`${ item.link }`)
      })
    }
  })
}
/**
 * 添加 - 路由
 * @param list 用户路由表
 */
const addRouter = function (list: Array<any>) {
  // 开局清空路由记录
  resetRouterFn()
  let routers: Array<any> = []
  filterRouter(list, routers)
  let allRouters = [{
    path: '/Home/Home',
    name: '首页',
    component: _import('/Home/Home'),
    mtea: {
      parentName: '',
      name: '',
      requiresAuth: true,
    },
    children: routers
  }, {
    path: '*',
    redirect: '/NotFound/NotFound'
  }]
  router.addRoutes(allRouters)
}
/**
 * 设置 - 路由
 * @param to 路由 - 信息
 */
const setClickRouter = function (to: {meta: {flag: Boolean}, matched: Array<any>, name: String, path: String}) {
  // let _meat = to.meta
  if (to.meta.flag) {
    return false
  }
  let state: any = store.state
  let limit: Array<any> = state.base.nowLimit
  let list = `{"${to.name}": "${to.path}"}`
  store.dispatch('ACT_NOWROUTER', Object.assign({}, JSON.parse(list)))
  store.dispatch('ACT_CLICKROUTER', to.path)
  store.dispatch('ACT_LISTLIMIT', filterNow(limit, to.matched[to.matched.length - 1].path))
}
/**
 * 树形结构筛选当前路由的 - 信息路径
 * @param limit 路由列表
 * @param now 当前路由
 * @param routerMsg 已经加入的信息 ['用户管理', '用户列表']
 */
const filterNow = function (limit: Array<any>, now: String, routerMsg?: Array<any>): any {
  let arr = routerMsg ? routerMsg : []
  for (let i = 0; i < limit.length; i++) {
    let item = limit[i]
    let arrName = arr.concat()
    arrName.push(item.name)
    if (item.children.length) {
      let res = filterNow(item.children, now, arrName)
      if (res) {
        return res
      }
    }
    if (item.path && item.path == now || item.link == now) {
      return arrName
    }
  }
}
export {
  resetRouterFn,
  filterRouter,
  addRouter,
  setClickRouter
}