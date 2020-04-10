<template lang="pug">
  div#hlHeader
    div.title 后台管理系统
    ul.nav-list
      li.nav-home
        i.iconfont &#xe60b;
      li.nav-user
        div.user-img
        div.user-name 管理员
      li.nav-exit
        i.iconfont &#xe603;
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  @Component({})
  export default class hlHeader extends Vue {

  }
</script>