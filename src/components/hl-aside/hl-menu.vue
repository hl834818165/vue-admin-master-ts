<template lang="pug">
  div
    el-menu-item(
      :index="menuList.link"
    )
      i(
        class="el-icon-menu"
      )
      span(
        slot="title"
      ) {{ menuList.name }}
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  @Component({})
  export default class hlMenu extends Vue {
    @Prop()
    private menuList!: Array<any>
  }
</script>