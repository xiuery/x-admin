import Vue from 'vue'
import Router from 'vue-router'

// layout
import Layout from '@/views/Layout'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
 **/

export const constantRouter = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home'),
    hidden: true
  },
  {
    // 特殊路由
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/Redirect')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard'),
        meta: { title: 'dashboard', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '',
        name: 'guide',
        component: () => import('@/views/Guide'),
        meta: { title: 'guide', icon: 'el-icon-view' }
      }
    ]
  }
]

export const asyncRouter = []

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouter
})
