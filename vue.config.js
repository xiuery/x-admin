// vue.config.js
// https://cli.vuejs.org/zh/config/
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  /**
   * publicPath：部署时URL中的path
   *  default：'/'
   *  可以被设置为空字符串 ('') 或是相对路径 ('./')
   *  这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
   */
  publicPath: '/',
  /**
   * outputDir：build生成构建文件目录
   *  default：'dist'
   *  目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
   */
  outputDir: 'dist',
  /**
   * assetsDir：放置生成的静态资源(js、css、img、fonts)的(相对于outputDir的)目录
   *  default：''
   */
  assetsDir: '',
  /**
   * indexPath：指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
   *  default：'index.html'
   */
  indexPath: 'index.html',
  /**
   * filenameHashing：生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
   *  default：true
   */
  filenameHashing: true,
  /**
   * pages：在multi-page模式下构建应用。每个“page”应该有一个对应的JavaScript入口文件
   *  default： undefind
   */
  // pages: {
  //     index: { //除了entry之外都是可选的
  //         // page的入口
  //         entry: 'src/index/main.js',
  //         // 模板来源
  //         template: 'public/index.html',
  //         // 在 dist/index.html的输出
  //         filename: 'index.html',
  //         // 当使用 title 选项时，
  //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //         title: 'Index Page',
  //         // 在这个页面中包含的块，默认情况下会包含
  //         // 提取出来的通用 chunk 和 vendor chunk
  //         chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  //     // 当使用只有入口的字符串格式时，
  //     // 模板会被推导为 `public/subpage.html`
  //     // 并且如果找不到的话，就回退到 `public/index.html`。
  //     // 输出文件名会被推导为 `subpage.html`。
  //     subpage: 'src/subpage/main.js'
  // }
  /**
   * lintOnSave：是否在开发环境下通过eslint-loader在每次保存时lint代码
   *  default：true; 可选error,直接输出编译错误
   *  生产构建时禁用：lintOnSave: process.env.NODE_ENV !== 'production'
   */
  lintOnSave: true,
  /**
   * runtimeCompiler：是否使用包含运行时编译器的Vue构建版本
   *  default：false
   */
  runtimeCompiler: false,
  /**
   * transpileDependencies：过Babel显式转译一个依赖，可以在这个选项中列出来
   *  default：[]
   */
  transpileDependencies: [],
  /**
   * productionSourceMap：不需要生产环境的source map，可以将其设置为false以加速生产环境构建
   *  default：true
   */
  productionSourceMap: true,
  /**
   * crossorigin：设置生成的HTML中<link rel="stylesheet">和<script>标签的crossorigin属性
   *  default：undefined
   */
  // crossorigin: {}
  /**
   * integrity：在生成的HTML中的<link rel="stylesheet">和<script>标签上启用Subresource Integrity(SRI)
   *  default：false
   *  如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
   */
  integrity: false,
  /**
   * configureWebpack：https://cli.vuejs.org/guide/webpack.html
   *  default：Object | Function
   */
  // configureWebpack: {}
  /**
   * chainWebpack：
   *  default：Function
   */
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
  /**
   * css：
   *  modules：false
   *    默认情况下，只有*.module.[ext]结尾的文件才会被视作CSS Modules模块
   *    设置为true后你就可以去掉文件名中的.module并将所有的*.(css|scss|sass|less|styl(us)?)文件视为CSS Modules模块
   *  extract：生产环境下是true，开发环境下是false
   *    是否将组件中的 CSS 提取至一个独立的 CSS 文件中
   *  sourceMap：false
   *    是否为CSS开启source map。设置为true之后可能会影响构建的性能
   *  loaderOptions： {}
   *    向 CSS 相关的 loader 传递选项
   */
  // css: {
  //    modules: false,
  //    extract: false,
  //    sourceMap: false,
  //    loaderOptions: {
  //        css: {},        // 这里的选项会传递给 css-loader
  //        postcss: {},    // 这里的选项会传递给 postcss-loader
  //        sass-loader: {},
  //    less-loader: {},
  //    stylus-loader: {}
  //    }
  // }
  /**
   * devServer：
   *  所有webpack-dev-server的选项都支持
   *  有些值像host、port和https可能会被命令行参数覆写
   *  proxy：string | Object
   */
  // devServer: {
  //     // proxy: 'http://localhost:4000'
  //     proxy: {
  //         '/api': {
  //             target: '<url>',
  //             ws: true,
  //             changeOrigin: true
  //         },
  //         '/foo': {
  //             target: '<other_url>'
  //         }
  //     }
  // }
  /**
   * parallel：是否为Babel或TypeScript使用thread-loader。该选项在系统的CPU有多于一个内核时自动启用，仅作用于生产构建
   *  default：require('os').cpus().length > 1
   */
  // parallel: true
  /**
   * pwa：向PWA插件传递选项
   *  default：object
   */
  // pwa: {}
  /**
   * pluginOptions：
   *  default：Object
   */
  // pluginOptions: {}
}
