<template lang="pug">
  div#Home
    el-container.home-box
      el-aside(
        width="200px"
      )
        hl-aside
      el-container
        el-header
          hl-header
        el-main
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  import hlHeader from '../../components/hl-header/hl-header.vue'
  import hlAside from '../../components/hl-aside/hl-aside.vue'
  @Component({
    name: 'Home',
    components: {
      hlHeader,
      hlAside
    }
  })
  export default class Home extends Vue {
    @State private base!: { xToken: String }
  }
</script>