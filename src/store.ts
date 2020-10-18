import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import base from '@/store/base.ts'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    base
  },
  plugins: [
    createPersistedState({
      key: 'hl-admin-master',
      paths: ['base']
    })
  ]
})