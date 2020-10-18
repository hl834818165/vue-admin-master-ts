<template lang="pug">
  div#Index
    el-button(
      @click="goUser"
    ) 返回全国
    map-chart(
      ref="mapChart"
    )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import MapChart from './components/MapChart.vue'
  @Component({
    name: 'Index',
    components: {
      MapChart
    }
  })
  export default class Index extends Vue {
    private msg: String = 'index'
    $router: any

    goUser () {
      let _el: any = this.$refs['mapChart']
      _el.drawnReset('china')
    }
  }
</script>
<style lang="less">
@import url('../../less/index.less');
</style>