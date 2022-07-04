const path = require('path');
module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/styles/variables.scss';`,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://getman.cn/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
};
