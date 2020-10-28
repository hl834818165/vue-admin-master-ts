<template lang="pug">
  div(
    id="table-page"
  )
    div(
      class="operate-item"
    )
      el-input(
        class="search-item"
        type="text"
        size="mini"
        v-model="tableList.form.query.keyword"
      )
      el-button(
        type="primary"
        size="mini"
        @click="getPage"
      ) 搜索
      el-button(
        type="success"
        size="mini"
        @click="insertDialog"
      ) 添加
    hl-table(
      :tableList="tableList"
    )
    live-type-form(
      ref="insertPage"
      :dialog="dialog"
      :isInsert="true"
      @change="getPage"
    )
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import hlTable from '@/components/hl-table/hl-table.vue'
  import { getPage } from '../../api/liveType/index'
  import LiveTypeForm from './components/LiveTypeFrom.vue'
  @Component({
    name: 'Live',
    components: {
      hlTable,
      LiveTypeForm
    }
  })
  export default class Live extends Vue {
    private tableList: {
      expandList: Array<any>,
      dataList: Array<any>,
      total: Number,
      loading: Boolean,
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
        prop: 'type_name',
        label: '分类名称',
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
      loading: true,
      form: {
        pageNo: 1,
        pageSize: 20,
        query: {
          role: 1,
          keyword: ''
        }
      }
    }
    
    private dialog: {
      form: {
        type_name: String
      }
    } = {
      form: {
        type_name: ''
      }
    }

    created () {
      this.getPage()
    }

    async getPage () {
      this.$set(this.tableList, 'loading', true)
      let res = await getPage(this.tableList.form)
      this.$set(this.tableList, 'dataList', res.data)
      this.$set(this.tableList, 'total', res.total)
      this.$set(this.tableList, 'loading', false)
    }

    insertDialog () {
      let _isInsert: any = this.$refs['insertPage']
      _isInsert.getPage()
    }
  }
</script>