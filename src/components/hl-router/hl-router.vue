<template lang="pug">
  div#hlRouter
    ul
      li(
        :class="[item.itemPath === base.clickRouter ? 'active' : 'default']"
        v-for="item in routerList"
        :key="item.itemName"
        @click="changeRoute(item)"
      ) {{ item.itemName }}
        i(
          @click.stop="closeRouter(item)"
          class="router-icon el-icon-close"
        )
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator'
  import { Action, State } from 'vuex-class'
  @Component({
    name: 'hl-router'
  })
  export default class hlRouter extends Vue {
    @State private base!: { nowRouter: {}, clickRouter: string };
    
    @Action private ACT_DEL_NOWROUTER!: (value: {itemName: string}) => void;
    private routerList: Array<{ itemName: string, itemPath: string }> = [];
    $router: any

    mounted () {
      this.setRouter()
    }
    @Watch('base.nowRouter', { immediate: true, deep: true })
    private routerChange(): void {
      this.setRouter()
    }
    // 设置路由列表
    setRouter () {
      let _base: { nowRouter: any } = this.base
      this.routerList = Object.keys(_base.nowRouter).map((item: string) => {
        return {
          itemName: item,
          itemPath: _base.nowRouter[item]
        }
      })
    }
    changeRoute ( item: { itemPath: string } ) {
      let list = {
        path: item.itemPath
      }
      this.$router.push(list)
    }
    closeRouter (item: any) {
      this.ACT_DEL_NOWROUTER(item)
      let _base: { nowRouter: any } = this.base
      let _arr = Object.keys(_base.nowRouter)
      this.setRouter()
      this.changeRoute({
        itemPath: _base.nowRouter[_arr[_arr.length - 1]]
      })
    }
  }
</script>
<style lang="less">
@import url('../../less/hl-router.less');
</style>