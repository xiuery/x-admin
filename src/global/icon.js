// 全局icon组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('icon-x', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../icons', false, /\.svg$/)
requireAll(req)
