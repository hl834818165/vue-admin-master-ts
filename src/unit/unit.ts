import { router, resetRouter } from '@/router'
import store from '../store'

// 路由懒加载
const _import = (r: string) => (file: (arg0: any) => void) => require.ensure([], () => file(require(`@/views${ r }.vue`)))


export default {
  /**
   * // 清空路由记录
   */
  resetRouterFn () {
    resetRouter()
  },
  /**
   * 筛选路由
   * @param list 用户路由表
   * @param pary 返回整理之后的路由
   */
  filterRouter ( list: Array<any>, pary: Array<any> ) {
    list.forEach( item => {
      if ( item.children.length ) {
        this.filterRouter( item.children, pary )
      } else {
        pary.push({
          path: item.link,
          name: item.linkName,
          meta: {
            parentName: item.parentName ? item.parentName : '',
            name: item.name,
            requiresAuth: true
          },
          component: _import(`${ item.link }`)
        })
      }
    })
  },
  /**
   * 添加路由
   * @param list 用户路由表
   */
  addRouter ( list: Array<any> ) {
    // 开局清空路由记录
    this.resetRouterFn()
    let routers: Array<any> = []
    this.filterRouter( list, routers )
    let allRouters = [
      {
        path: '/Home/Home',
        name: '首页',
        component: _import('/Home/Home'),
        mtea: {
					parentName: '',
					name: '',
					requiresAuth: true,
				},
				children: routers
      },
      {
        path: '*',
        redirect: '/NotFound/NotFound'
      }
    ]
    router.addRoutes( allRouters )
  },
  /**
   * 设置当前点击过的路由 当前的路由
   * @param name 路由名字
   * @param path 路由路径
   */
  setClickRouter ( name: string, path: string ) {
    let list = `{"${name}": "${path}"}`
    store.dispatch('ACT_NOWROUTER', Object.assign({}, JSON.parse(list)))
    store.dispatch('ACT_CLICKROUTER', path)
    // let state: any = store.state
    // console.log(Object.prototype.hasOwnProperty.call(state.base.nowRouter, name))
  }
}