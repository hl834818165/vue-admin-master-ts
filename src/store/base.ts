import { Commit } from 'vuex'
import { vuexState } from '../types/dataTypes'
export default {
  state: {
    allLimit: [],   // 总路由表
    nowLimit: [],   // 当前路由表
    listLimit: [],  // 点击路由的树形
    nowRouter: {},  // 当前点击的路由集合
    firstPath: '',   // 当前路由表第一个路由
    clickRouter: '',// 当前点击的路由
    xToken: ''      // 用户token
  },
  mutations: {
    MUT_STATE_INT (state: vuexState) {
      state.allLimit = []
      state.nowLimit = []
      state.listLimit = []
      state.nowRouter = {}
      state.firstPath = ''
      state.clickRouter = ''
      state.xToken = ''
    },
    MUT_ALLLIMIT ( state: { allLimit: Array<any> }, value: Array<any> ) {
      state.allLimit = value
    },
    MUT_NOWLIMIT ( state: { nowLimit: Array<any> }, value: Array<any> ) {
      state.nowLimit = value
    },
    MUT_LISTLIMIT (state: {listLimit: Array<String>}, value: Array<String>) {
      state.listLimit = value
    },
    MUT_FIRSTPATH ( state: { firstPath: String }, value: String ) {
      state.firstPath = value
    },
    MUT_NOWROUTER ( state: { nowRouter: {} }, value: {} ) {
      state.nowRouter = Object.assign({}, state.nowRouter, value)
    },
    MUT_CLICKROUTER ( state: { clickRouter: String }, value: String ) {
      state.clickRouter = value
    },
    MUT_XTOKEN ( state: { xToken: String }, value: String ) {
      state.xToken = value
    }
  },
  actions: {
    ACT_STATE_INT (context: {commit: Commit}) {
      context.commit('MUT_STATE_INT')
    },
    ACT_ALLLIMIT ( context: { commit: Commit }, value: Array<any> ) {
      context.commit( 'MUT_ALLLIMIT', value )
    },
    ACT_NOWLIMIT ( context: { commit: Commit }, value: Array<any> ) {
      context.commit( 'MUT_NOWLIMIT', value )
    },
    ACT_LISTLIMIT (context: {commit: Commit}, value: Array<String>) {
      context.commit('MUT_LISTLIMIT', value)
    },
    ACT_FIRSTPATH ( context: { commit: Commit }, value: String ) {
      context.commit( 'MUT_FIRSTPATH', value )
    },
    ACT_NOWROUTER ( context: { commit: Commit }, value: {} ) {
      context.commit( 'MUT_NOWROUTER', value )
    },
    ACT_CLICKROUTER ( context: { commit: Commit }, value: String ) {
      context.commit('MUT_CLICKROUTER', value)
    },
    ACT_XTOKEN ( context: { commit: Commit }, value: String ) {
      context.commit( 'MUT_XTOKEN', value )
    }
  }
}