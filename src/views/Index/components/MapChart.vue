<template lang="pug">
  div(ref="mapChart" :style="{ width: '100%', height: '500px' }")
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import echarts from "echarts"
const china = require('../../../assets/json/china.json')
const provinceArr = require('../../../assets/json/hl-province.json')
@Component({
  name: "MapChart",
})
export default class MapChart extends Vue {
  private provinceArr: Array<any> = provinceArr
  private options: any = {
    tooltip: {},
    legend: {
      orient: "vertical",
      left: "left",
      data: [""]
    },
    visualMap: {
      min: 0,
      max: 100,
      text: ["高", "低"],
      calculable: true,
      color: ["#67C23A", "#31A40E"]
    },
    selectedMode: "single", // 默认关闭  选中状态 single 单选 multiple 多选
    layoutSize: 100,
    label: {
      align: "center",
      verticalAlign: "middle"
      // formatter: "{b} - {@score} 人"
    },
    series: [
      {
        name: "充电数量",
        type: "map",
        mapType: "china",
        zoom: 1.2, // 缩放级别
        roam: false, // 是否开启鼠标缩放
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          }
        },
        showLegendSymbol: false, //
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          }
        },
        data: []
      },
    ],
  }
  created () {
    let self = this
    // 注册中国地图
    self.registerMap({
      name: 'china',
      path: china
    })
    // 注册 各省地图
    self.provinceArr.forEach(e => {
      require([`../../../assets/json/province/${e.path}.json`], res => {
        self.registerMap({
          name: e.name,
          path: res
        })
      })
    })
  }
  mounted () {
    this.drawnInit()
  }

  // 重新绘制
  drawnReset (name: String) {
    this.$set(this.options.series[0], 'mapType', name)
    this.drawnInit()
  }
  // 生成随机数
  randomData(): number {
    return Math.floor(Math.random() * 30)
  }
  registerMap (pary: {path: string|any, name: string}) {
    let _name = pary.name
    let _path = pary.path
    echarts.registerMap(_name, _path)
  }
  // 初始绘制
  drawnInit() {
    let self = this
    let _el: any = self.$refs['mapChart']
    let _mapChart = echarts.init(_el);
    self.options.series[0].data = []
    _mapChart.setOption(self.options)
    // 监听 - 点击事件
    _mapChart.on('click', function (param: any) {
      self.drawnReset(param.name)
    })
  }
}
</script>