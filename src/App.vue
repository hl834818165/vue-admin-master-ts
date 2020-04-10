<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { allLimit, nowLimit } from './unit/limit'
@Component({})
export default class App extends Vue {
  @Action private ACT_ALLLIMIT!: ( value: Array<any> ) => void
  @Action private ACT_NOWLIMIT!: ( value: Array<any> ) => void
  // @Action private ACT_XTOKEN!: ( value: String ) => void
  created () {
    this.ACT_ALLLIMIT( allLimit )
    this.ACT_NOWLIMIT( nowLimit )
    // this.ACT_XTOKEN( '123' )
  }
}
</script>