<template>
  <el-container :class="layout" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <el-aside class="sidebar-main">
      <sidebar class="sidebar-container"/>
    </el-aside>

    <el-container>
      <el-header class="header-container">
        <nav-bar/>
        <tags-view/>
      </el-header>

      <el-main class="app-main">
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import AppMain from './AppMain'
import TagsView from './TagsView'
import ResizeMixin from './Mixin/resizeMixin'

export default {
  name: 'Layout',
  components: { Sidebar, NavBar, TagsView, AppMain },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.App.sidebar
    },
    device () {
      return this.$store.state.App.device
    },
    layout () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
    .header-container{
      height: 84px !important;
      width: 100%;
      padding: 0 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .app-main {
    background-color: #f0f2f5;
  }
</style>
