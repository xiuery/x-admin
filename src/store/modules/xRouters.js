import { asyncRouter, constantRouter } from '@/router'

function filterAsyncRouter (routes) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = filterAsyncRouter(tmp.children)
    }
    res.push(tmp)
  })

  return res
}

const xRouters = {
  state: {
    defaultRouters: constantRouter,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.defaultRouters = constantRouter.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        let accessedRouters
        accessedRouters = filterAsyncRouter(asyncRouter)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default xRouters
