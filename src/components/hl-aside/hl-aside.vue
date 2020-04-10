<template lang="pug">
  div#hlAside
    el-menu(
      default-active='1-1'
      class="hl-aside-menu"
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
    components: {
      hlSubmenu
    }
  })
  export default class hlAside extends Vue {
    @State private base!: { nowLimit: Array<any> }
  }
</script>