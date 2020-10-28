<template lang="pug">
  el-dialog(
    :title="dialog.title"
    :visible.sync="dialog.show"
  )
    el-form(
      ref="dialogForm"
      :model="dialog.form"
      label-position="right"
      label-width="auto"
      style="width: 100%"
    )
      el-form-item(
        v-if="!isUpdate"
        label="直播分类"
        prop="type_name"
      )
        el-input(
          v-model="dialog.form.type_name"
          placeholder="直播分类"
          clearable
          :readonly="isDetail"
        )
    div(
      slot="footer"
      class="dialog-footer"
    )
      template(
        v-if="isDetail"
      )
        el-button(
          type="primary"
          @click="dialog.show = false"
        ) 关闭
      template(
        v-else-if="isInsert"
      )
        el-button(
          @click="restForm"
        ) 取消
        el-button(
          type="primary"
          @click="submitAdd"
        ) 保存
      template(
        v-else-if="isUpdate"
      )
        el-button(
          @click="restForm"
        ) 取消
        el-button(
          type="primary"
          @click="submitUpdate"
        ) 修改
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { getPage, insertPage } from '../../../api/liveType/index'
@Component({
  name: "live-type-form",
  filters: {
    statusFilter (status: Number|String) {
      switch (status) {
        case 0:
          return 'info';
          break;
        case 1:
          return 'success';
          break;
        case 2:
          return 'warning';
          break;
        default:
          return 'danger';
          break;
      }
    }
  }
})
export default class LiveTypeFrom extends Vue {
  @Prop() dialog!: {
    form: {}
  }
  @Prop() isDetail?: Boolean
  @Prop() isInsert?: Boolean
  @Prop() isUpdate?: Boolean
  mounted () {
    this.getPage()
  }
  getPage (id?: Number) {
    console.log(id)
    if (this.isInsert) {
      console.log('isInsert')
    } else if (this.isDetail) {
      console.log('isDetail')
    } else {
      console.log('isUpdate')
    }
    this.$set(this.dialog, 'show', true)
  }

  async insertPage () {
    let res = await insertPage(this.dialog.form)
    console.log(res)
    this.$message({
      message: '添加成功',
      type: 'success'
    })
    this.restForm()
    this.$emit('change')
  }

  restForm () {
    let _refs: any = this.$refs['dialogForm']
    _refs.resetFields()
    this.$set(this.dialog, 'show', false)
  }
  submitAdd () {
    let _this = this
    let _refs: any = this.$refs['dialogForm']
    _refs.validate((valid: any) => {
      if (valid) {
        _this.insertPage()
      } else {
        return false
      }
    })
  }
  submitUpdate () {
    let _refs: any = this.$refs['dialogForm']
    _refs.validate((valid: any) => {
      if (valid) {
        console.log('通过了')
      } else {
        return false
      }
    })
  }
}
</script>