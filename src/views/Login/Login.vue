<template lang="pug">
  div#Login
    div.login-box
      h3.login-title 后台管理系统
      el-form(
        :model="loginModel"
        :rules="loginRules"
      )
        el-form-item(
          label=""
        )
          el-input(
            v-model="loginModel.username"
            placeholder="输入账号"
          )
        el-form-item(
          label=""
        )
          el-input(
            v-model="loginModel.password"
            placeholder="输入密码"
          )
        el-form-item()
          el-button(
            type="primary"
            class="login-submit"
            @click="submit"
          ) 登录

</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Action } from 'vuex-class'
  import { allLimit, nowLimit } from '../../unit/limit'

  const validatorUser = ( rule: any, value: String, callback: any ) => {
    if ( value === '' ) {
      callback( new Error( '请输入账号' ) )
    } else {
      callback()
    }
  }
  const validatorPass = ( rule: any, value: String, callback: any ) => {
    if ( value === '' ) {
      callback( new Error( '请输入密码' ) )
    } else {
      callback()
    }
  }
  @Component({
    name: 'Login'
  })
  export default class Login extends Vue {
    @Action private ACT_ALLLIMIT!: ( value: Array<any> ) => void
    @Action private ACT_NOWLIMIT!: ( value: Array<any> ) => void
    @Action private ACT_XTOKEN!: ( value: String ) => void
    
    private loginModel: { username: String, password: String } = {
      username: '',
      password: ''
    }
    private loginRules: { username: Array<any>, password: Array<any> } = {
      username: [
        { validator: validatorUser, trigger: 'blur' }
      ],
      password: [
        { validator: validatorPass, trigger: 'blur' }
      ]
    }

    submit () {
      this.ACT_ALLLIMIT( allLimit )
      this.ACT_NOWLIMIT( nowLimit )
      this.ACT_XTOKEN( '123' )
      this.$router.push({
        path: '/Home/Home'
      })
    }
  }
</script>

<style scoped>

</style>