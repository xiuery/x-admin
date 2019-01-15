import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// global component
import './global'

// internationalization
import i18n from './lang'

// debug
console.log(store.getters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
