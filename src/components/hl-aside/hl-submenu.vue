<template lang="pug">
  div#hlSubmenu
    div(
      v-for="item in submenuList"
      :key="item.id"
    )
      el-submenu(
        v-if="item.children.length"
        :index='item.link'
      )
        div(
          slot="title"
        )
          i.el-icon-location
          span {{ item.name }}
        hl-submenu(
          :submenuList="item.children"
        )
      hl-menu(
        v-else
        :menuList="item"
      )
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import hlMenu from './hl-menu.vue'
  @Component({
    name: 'hl-submenu',
    components: {
      hlMenu
    }
  })
  export default class hlSubmenu extends Vue {
    @Prop()
    private submenuList!: {}
  }
</script>
<style lang="less">
@import url('../../less/hl-aside.less');
</style>