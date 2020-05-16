<template lang="pug">
  div#hlTable
    el-table.table-box(
      border
      :data="tableList.dataList"
    )
      el-table-column(
        align="center"
        v-for="item in tableList.expandList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sortable"
        :width="item.width"
      )
    div.pagination-box
      el-pagination(
        layout="prev, pager, next"
        :total="1000"
      )
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component({
    name: 'hl-table'
  })
  export default class hlTable extends Vue {
    @Prop()
    private tableList!: {}
  }
</script>