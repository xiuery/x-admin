const getters = {
  sidebar: state => state.App.sidebar,
  language: state => state.App.language,
  size: state => state.App.size,
  device: state => state.App.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  defaultRouters: state => state.xRouters.defaultRouters,
  addRouters: state => state.xRouters.addRouters
}
export default getters
