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
  @Component({})
  export default class hlRouter extends Vue {
    @State private base!: { nowRouter: {}, clickRouter: String }
    private routerList: Array<{ itemName: string, itemPath: string }> = []
    
    mounted () {
      this.setRouter()
    }
    @Watch('base.nowRouter', { immediate: false, deep: true })
    private routerChange(): void {
      this.setRouter()
    }
    // 设置路由列表
    setRouter () {
      let _base: any = this.base
      this.routerList = Object.keys(_base.nowRouter).map((item: string) => {
        return {
          itemName: item,
          itemPath: _base.nowRouter[item]
        }
      })
    }
    changeRoute ( item: { itemPath: any } ) {
      let list = {
        path: item.itemPath
      }
      this.$router.push(list)
    }
  }
</script>