<template lang="pug">
  div#table-page
    hl-table(
      :tableList="tableList"
    )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import hlTable from '@/components/hl-table/hl-table.vue'
  @Component({
    name: 'UserList',
    components: {
      hlTable
    }
  })
  export default class UserList extends Vue {
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
          id: 0,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 1,
          date: '2016-05-04',
          name: '李小白',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-03',
          name: '千秋',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 3,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 4,
          date: '2016-05-04',
          name: '李小白',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 5,
          date: '2016-05-03',
          name: '千秋',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 6,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 7,
          date: '2016-05-04',
          name: '李小白',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 8,
          date: '2016-05-03',
          name: '千秋',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 9,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 10,
          date: '2016-05-04',
          name: '李小白',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 11,
          date: '2016-05-03',
          name: '千秋',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
</script>