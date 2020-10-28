<template lang="pug">
  div#table-page
    div(
      class="operate-box"
    )
      el-form(
        class="operate-form"
        :model="tableList.form"
      )
        el-form-item(
          prop="keyword"
        )
          el-input(
            type="text"
            v-model="tableList.form.query.keyword"
          )
        el-form-item
          el-button(
            type="primary"
          ) 搜索
    hl-table(
      :tableList="tableList"
    )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import hlTable from '@/components/hl-table/hl-table.vue'
  import { getPage, insertPage } from '../../api/live/index'
  @Component({
    name: 'Live',
    components: {
      hlTable
    }
  })
  export default class Live extends Vue {
    private tableList: {
      expandList: Array<any>,
      dataList: Array<any>,
      total: Number,
      form: {
        pageNo: Number,
        pageSize: Number,
        query: {
          role: Number,
          keyword: String
        }
      }
    } = {
      // 扩展列表
      expandList: [{
        prop: 'id',
        label: 'ID',
        render: false,
      }, {
        prop: 'live_pic',
        label: '直播封面',
        render: (h: any, row: any) => {
          return h('img', {
            attrs: {
              'src': row.live_pic,
              'style': 'width: 64px;height: 64px;'
            }
          })
        }
      }, {
        prop: 'live_url',
        label: '直播地址',
        width: 240,
        render: false
      }, {
        prop: 'update_time',
        label: '更新时间',
        width: 'auto',
        render: false
      }],
      // 列表数据
      dataList: [],
      total: 1,
      form: {
        pageNo: 1,
        pageSize: 20,
        query: {
          role: 1,
          keyword: ''
        }
      }
    }
    private insertData: {} = {}
    created () {
      this.getPage()
    }

    async getPage () {
      let res = await getPage(this.tableList.form)
      this.$set(this.tableList, 'dataList', res.data)
      this.$set(this.tableList, 'total', res.total)
    }
    async insertPage () {
      let res = await insertPage(this.insertData)
      console.log(res)
    }
  }
</script>
<style lang="less">

</style>