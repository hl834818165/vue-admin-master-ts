<template lang="pug">
  div#hlTable
    div.table-box(ref="table-box")
      el-table(:height="tableHeight", border, stripe, :data="tableList.dataList" v-loading="tableList.loading")
        el-table-column(
          align="center",
          v-for="item in tableList.expandList",
          :key="item.prop",
          :prop="item.prop",
          :label="item.label",
          :sortable="item.sortable || false",
          :width="item.width || 'auto'"
        )
          template(
              slot-scope="scope"
          )
            template(
              v-if="!item.render"
            )
              span {{ scope.row[item.prop] }}
            template(
              v-else
            )
            render-dom(
              :cols="item"
              :rows="scope.row"
            )
    .pagination-box
      el-pagination(layout="prev, pager, next", :total="tableList.total")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
Vue.component('render-dom', {
  props: {
    cols: {
      type: Object,
      required: true
    },
    rows: {
      type: Object,
      required: true
    }
  },
  render (h: any): any {
    if (typeof this.cols.render != 'function') return false
    return this.cols.render(h, this.rows)
  }
})
@Component({
  name: "hl-table"
})
export default class hlTable extends Vue {
  @Prop()
  private tableList!: {};
  private tableHeight: number = 0;
  private timeout: any = null;
  mounted() {
    this.timeout = setTimeout(() => {
      this.tableH();
    }, 300);
    window.onresize = this.tableH;
  }
  destroyed() {
    clearTimeout(this.timeout);
  }
  // 获取 - table高度
  tableH() {
    let tableH: any = this.$refs["table-box"];
    this.$set(this, "tableHeight", tableH.offsetHeight);
  }
}
</script>
<style lang="less">
@import url("../../less/hl-table.less");
</style>