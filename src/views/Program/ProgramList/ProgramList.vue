<template lang="pug">
  div#ProgramList
    hl-table(
      :tableList="tableList"
    )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import hlTable from '@/components/hl-table/hl-table.vue'
  @Component({
    name: 'ProgramList',
    components: {
      hlTable
    }
  })
  export default class ProgramList extends Vue {
    private tableList: {} = {
      // 扩展列表
      expandList: [
        {
          prop: 'date',
          label: '日期',
          sortable: true,
          width: 'auto'
        },
        {
          prop: 'name',
          label: '姓名',
          sortable: true,
          width: 'auto'
        },
        {
          prop: 'address',
          label: '地址',
          sortable: true,
          width: 'auto'
        }
      ],
      // 列表数据
      dataList: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
</script>