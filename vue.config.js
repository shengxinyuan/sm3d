module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  pages: {
    design: 'src/design/index.js',
    index: 'src/main.js'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.147.141:8000',
        changeOrigin: true
      }
    }
  }
}