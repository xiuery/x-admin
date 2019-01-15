import Vue from 'vue'
import Vuex from 'vuex'
import App from './modules/app'
import xRouters from './modules/xRouters'
import tagsView from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    App,
    xRouters,
    tagsView
  },
  getters
})

export default store
