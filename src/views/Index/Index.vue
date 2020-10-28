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
  import { getPage } from '../../api/live/index'
  @Component({
    name: 'Index',
    components: {
      MapChart
    }
  })
  export default class Index extends Vue {
    private msg: String = 'index'
    $router: any

    mounted () {
      this.getPage()
    }
    goUser () {
      let _el: any = this.$refs['mapChart']
      _el.drawnReset('china')
    }
    async getPage () {
      let _data = await getPage()
      console.log('_data', _data)
    }
  }
</script>
<style lang="less">
@import url('../../less/index.less');
</style>