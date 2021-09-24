module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  pages: {
    design: 'src/page-design/index.js',
    share: 'src/page-share/index.js',
    index: 'src/main.js'
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://zhuanshi.nxm.wanheweb.com/',
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
        // pathRewrite: { "^/dev-api": "" }
      }
    }
  }
}
