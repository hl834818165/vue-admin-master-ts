<template lang="pug">
  div#hlAside
    el-menu(
      :default-active="base.clickRouter"
      class="hl-aside-menu"
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
  @Component({
    name: 'hl-aside',
    components: {
      hlSubmenu
    }
  })
  export default class hlAside extends Vue {
    @State private base!: { nowLimit: Array<any>, clickRouter: String }
  }
</script>
<style lang="less">
@import url('../../less/hl-aside.less');
</style>