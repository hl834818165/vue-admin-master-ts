<template lang="pug">
  div#hlAside
    el-menu(
      :default-active="base.clickRouter"
      class="hl-aside-menu"
      background-color="#545c64"
      text-color="#FFFFFF"
      active-text-color="#10CFDD"
      router
    )
      hl-submenu(
        :submenuList="base.nowLimit"
      )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  import hlSubmenu from './hl-submenu.vue'
  // import { lightenDarkenColor } from '@/unit/unit'
  @Component({
    name: 'hl-aside',
    components: {
      hlSubmenu
    }
  })
  export default class hlAside extends Vue {
    @State private base!: { nowLimit: Array<any>, clickRouter: String, navActiveColor: string }
    private activeColor: string = ''
    mounted () {
      // let _base: { navActiveColor: string } = this.base
      // let _str: string = lightenDarkenColor(_base.navActiveColor, 20)
      // console.log(_str)
    }
  }
</script>
<style lang="less">
@import url('../../less/hl-aside.less');
</style>