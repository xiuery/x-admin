<template>
  <div class="logo">
    <li>
      <icon-x icon-class="setting"/>
      <span>xiuery</span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .logo {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: rgb(191, 203, 217);
    background-color: rgb(67, 82, 100);
    li {
      width: 100%;
      font-size: 14px;
      padding: 0 20px;
      cursor: pointer;
      overflow: hidden;
      display: inline-block;
      svg {
        width: 24px;
        font-size: 18px;
        margin-right: 5px;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
</style>
