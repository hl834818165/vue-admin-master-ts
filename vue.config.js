const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  // 选项...
  publicPath: './',
  productionSourceMap: false, // 关闭sourceMap
  configureWebpack: {   // Webpack配置             
    devtool     : 'none',     // webpack内关闭sourceMap                   
    optimization: {   // 优化配置                           
      splitChunks: {
        chunks     : 'all',
        cacheGroups: {
        // 拆分Vue
          vue: {
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            name: 'chunk-vue'  
          },
        // 拆分Element
          element: {
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            name: 'chunk-element'
          }
        }
      }
    }
  }
   
//   chainWebpack: config => {
//     // 解决ie11兼容ES6
//     config.entry('main').add('babel-polyfill')
//     // 开启图片压缩
//     config.module.rule('images')
//     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
//     .use('image-webpack-loader')
//     .loader('image-webpack-loader')
//     .options({ bypassOnDebug: true })
//     // 开启js、css压缩
//     if (process.env.NODE_ENV === 'production') {
//       config.plugin('compressionPlugin')
//       .use(new CompressionPlugin({
//         test:/\.ts$|\.html$|\.less$/, // 匹配文件名
//         threshold: 10240, // 对超过10k的数据压缩
//         deleteOriginalAssets: false // 不删除源文件
//       }))
//     }
//   }
}