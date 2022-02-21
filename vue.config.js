const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//연습용, 지워도 됨
//prefetch 삭제 : 기본 라우터 값을 lazy-loaded로 설정하는데, 이를 삭제함
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch'); 
  }
}