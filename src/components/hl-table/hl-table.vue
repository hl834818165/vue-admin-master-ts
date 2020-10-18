<template lang="pug">
#hlTable
  .table-box(ref="table-box")
    el-table(:height="tableHeight", border, :data="tableList.dataList")
      el-table-column(
        align="center",
        v-for="item in tableList.expandList",
        :key="item.prop",
        :prop="item.prop",
        :label="item.label",
        :sortable="item.sortable",
        :width="item.width"
      )
  .pagination-box
    el-pagination(layout="prev, pager, next", :total="1000")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "hl-table",
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