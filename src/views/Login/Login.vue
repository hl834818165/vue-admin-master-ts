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
  import { State, Action } from 'vuex-class'
  import unit from '../../unit/unit'
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
    @State private base!: { nowRouter: {}, clickRouter: String }
    @Action private ACT_ALLLIMIT!: ( value: Array<any> ) => void
    @Action private ACT_NOWLIMIT!: ( value: Array<any> ) => void
    @Action private ACT_XTOKEN!: ( value: String ) => void
    @Action private ACT_FIRSTPATH!: ( value: String ) => void
    
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
    mounted () {
      console.log( this.base )
    }

    submit () {
      // 拿到第一个路由
      let firstPath
      unit.addRouter( nowLimit )
      this.ACT_ALLLIMIT( allLimit )
      this.ACT_NOWLIMIT( nowLimit )
      this.ACT_XTOKEN( '123' )
      if ( nowLimit[0].children.length ) {
        firstPath = nowLimit[0].children[0].link
      } else {
        firstPath = nowLimit[0].link
      }
      // this.$router.push({
      //   path: '/Index/Index'
      // })
      this.ACT_FIRSTPATH(firstPath)
      this.$router.push({
        path: firstPath
      })
    }
  }
</script>