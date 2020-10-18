<template lang="pug">
  div#NotFound
    div.left
      img(
        src="@/assets/404.png"
      )
    div.right
      div.title NOT FOUND PAGE
      div.info All rights reserved ZHL
      div.header This is a website with soul
      div.info Please check that the URL you entered is correct or click the button below to find your soul
      el-button.btn(
        type="active"
        round
        @click="goRouter"
      ) 回到首页
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    name: 'NotFound'
  })
  export default class NotFound extends Vue {
    $router: any
    goRouter () {
      this.$router.push({
        path: '/Index/Index'
      })
    }
  }
</script>

<style lang="less">
@import url('../../less/not-found.less');
</style>