import Vue from 'vue'
import Vuex from 'vuex'
import App from './modules/app'
import TagView from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    App,
    TagView
  },
  getters
})

export default store
