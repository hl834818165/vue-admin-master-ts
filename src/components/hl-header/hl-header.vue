<template lang="pug">
  div#hlHeader
    div.title 后台管理系统
    ul.nav-list
      li.nav-home(
        class="handleDefault"
        @click="goHome"
      )
        i.iconfont &#xe60b;
      li.nav-user
        div.user-img
        div.user-name 管理员
      li.nav-exit(
        class="handleDefault"
        @click="goExit"
      )
        i.iconfont &#xe603;
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { State, Action } from 'vuex-class'
  import unit from '../../unit/unit'

  @Component({})
  export default class hlHeader extends Vue {
    @State private base!: { firstPath: String }
    @Action private ACT_STATE_INT!: ( value: {} ) => void
    
    goHome () {
      let path: any = this.base.firstPath
      this.$router.push({
        path: path
      })
    }
    goExit () {
      let list = {
        allLimit: [],   // 总路由表
        nowLimit: [],   // 当前路由表
        firstPath: '',   // 当前路由表第一个路由
        nowRouter: {},  // 当前点击的路由集合
        clickRouter: '',// 当前点击的路由
        xToken: ''      // 用户token
      }
      this.ACT_STATE_INT(list)
      unit.resetRouterFn()
      this.$router.push({
        path: '/'
      })
    }
  }
</script>