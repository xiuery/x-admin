# x-admin-refactor

### node.js upgrade
```
npm install -g n        # 安装node版本工具
n stable                # 稳定版
n version               # 指定版本号
```

### npm
```
npm -v                  # 显示版本，检查npm 是否正确安装
npm install express     # 安装express模块  
npm install -g express  # 全局安装express模块  
npm list                # 列出已安装模块 
npm cache clean -f      # 清除缓存 
npm show express        # 显示模块详情  
npm update              # 升级当前目录下的项目的所有模块  
npm update express      # 升级当前目录下的项目的指定模块  
npm update -g express   # 升级全局安装的express模块  
npm uninstall express   # 删除指定的模块
```

### vue
```
npm install -g @vue/cli         # 安装vue cli工具
npm install -g @vue/cli-init    # 安装vue cli工具
vue init webpack project        # 初始化vue项目
vue ui                          # 启动vue ui
```

### Project setup
```
npm install         # 安装项目依赖
npm run serve       # Compiles and hot-reloads for development
npm run build       # Compiles and minifies for production
npm run test        # Run your tests
npm run lint        # Lints and fixes files
npm run test:e2e    # Run your end-to-end tests
npm run test:unit   # Run your unit tests
```

### Project integration
```
vue ^2.5.21
router ^3.0.1
vuex ^3.0.1
element-ui ^2.4.11
vue-i18n ^8.7.0
```

### Global svg-icon
```
# 安装依赖
npm install svg-sprite-loader --save-dev

# vue.config.js
chainWebpack: config => {
    // 重点:删除默认配置中处理svg
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
}

# components
src/components/SvgIcon/index.vue

# global
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('icon-x', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../icons', false, /\.svg$/)
requireAll(req)
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
