<template lang="pug">
  div#Home
    el-container.home-box
      el-aside.home-aside(
        width="200px"
      )
        hl-aside
      el-container
        el-header.home-header
          hl-header
        hl-router.home-router
        el-main.home-main
          router-view
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import hlHeader from '@/components/hl-header/hl-header.vue'
  import hlAside from '@/components/hl-aside/hl-aside.vue'
  import hlRouter from '@/components/hl-router/hl-router.vue'
  @Component({
    name: 'Home',
    components: {
      hlHeader,
      hlAside,
      hlRouter
    }
  })
  export default class Home extends Vue {
  }
</script>