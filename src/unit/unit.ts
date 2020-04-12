import router from '@/router'

// 路由懒加载
const _import = (r: string) => (file: (arg0: any) => void) => require.ensure([], () => file(require(`@/views${ r }.vue`)))

export default {
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
  addRouter ( list: Array<any> ) {
    let routers: Array<any> = []
    this.filterRouter( list, routers )
    let allRouters = [
      {
        path: '/Home/Home',
        name: 'Home',
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
  }
}