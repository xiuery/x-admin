<template>
  <el-container class="app-wrapper">
    <el-aside style="width: 180px;">
      <sidebar class="sidebar-container"/>
    </el-aside>

    <el-container>
      <el-header class="header-container">
        <nav-bar/>
        <tags-view/>
      </el-header>

      <el-main>
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

export default {
  name: 'Layout',
  components: { Sidebar, NavBar, TagsView, AppMain }
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
      height: 85px !important;
      width: 100%;
      padding: 0 0;
    }
  }
</style>
