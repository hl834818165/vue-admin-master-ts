import { Commit } from 'vuex'
export default {
  state: {
    allLimit: [],
    nowLimit: [],
    xToken: ''
  },
  mutations: {
    MUT_ALLLIMIT ( state: { allLimit: Array<any> }, value: Array<any> ) {
      state.allLimit = value
    },
    MUT_NOWLIMIT ( state: { nowLimit: Array<any> }, value: Array<any> ) {
      state.nowLimit = value
    },
    MUT_XTOKEN ( state: { xToken: String }, value: String ) {
      state.xToken = value
    }
  },
  actions: {
    ACT_ALLLIMIT ( context: { commit: Commit }, value: Array<any> ) {
      context.commit( 'MUT_ALLLIMIT', value )
    },
    ACT_NOWLIMIT ( context: { commit: Commit }, value: Array<any> ) {
      context.commit( 'MUT_NOWLIMIT', value )
    },
    ACT_XTOKEN ( context: { commit: Commit }, value: String ) {
      context.commit( 'MUT_XTOKEN', value )
    }
  }
}