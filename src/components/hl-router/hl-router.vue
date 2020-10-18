<template lang="pug">
  div#hlRouter
    ul
      li(
        :class="[item.itemPath === base.clickRouter ? 'active' : 'default']"
        v-for="item in routerList"
        :key="item.itemName"
        @click="changeRoute(item)"
      ) {{ item.itemName }}
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  @Component({
    name: 'hl-router'
  })
  export default class hlRouter extends Vue {
    @State private base!: { nowRouter: any, clickRouter: string }
    private routerList: Array<{ itemName: string, itemPath: string }> = []
    $router: any

    mounted () {
      this.setRouter()
    }
    @Watch('base.nowRouter', { immediate: false, deep: true })
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
  }
</script>
<style lang="less">
@import url('../../less/hl-router.less');
</style>