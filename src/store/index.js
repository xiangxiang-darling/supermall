import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)
const state={
  
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a:moduleA
  }
})
