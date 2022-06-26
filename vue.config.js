const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // return [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
        args[0].title = '黑马头条'
        return args
      })
  }
})
