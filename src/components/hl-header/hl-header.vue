<template lang="pug">
  div#hlHeader
    div
      el-breadcrumb(
        separator="/"
      )
        el-breadcrumb-item(
          to="/Index/Index"
        ) 系统
        transition-group(
          name="hl-breadcrumb"
          mode="out-in"
        )
          el-breadcrumb-item(
            v-for="(item, index) in base.listLimit"
            :key="item"
            :index="index"
          )
            span.no-redirect {{ item }}
    ul.nav-list
      li.nav-home.handleDefault(
        @click="goHome"
      )
        i.iconfont &#xe60b;
      li.nav-user
        div.user-img
        div.user-name 管理员
      li.nav-exit.handleDefault(
        @click="goExit"
      )
        i.iconfont &#xe603;
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { State, Action } from 'vuex-class'
  import { resetRouterFn } from '../../unit/unit'

  @Component({
    name: 'hl-header'
  })
  export default class hlHeader extends Vue {
    @State private base!: { firstPath: String, navActiveColor: String }
    @Action private ACT_STATE_INT!: () => void
    $router: any
    private styleColor: String = ''
    mounted () {
      let _base: { navActiveColor: String } = this.base
      this.$set(this, 'styleColor', _base.navActiveColor)
    }
    goHome () {
      let path: any = this.base.firstPath
      this.$router.push({
        path: path
      })
    }
    goExit () {
      this.ACT_STATE_INT()
      resetRouterFn()
      this.$router.push({
        path: '/'
      })
    }
  }
</script>
<style lang="less">
@import url('../../less/hl-header.less');
</style>