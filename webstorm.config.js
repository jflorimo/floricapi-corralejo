module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },

  transpileDependencies: [
    '@coreui/utils'
  ],

  devServer: {
    host: '127.0.0.1',
    port: 8085,
    public: 'localhost:8085',
    clientLogLevel: 'error',
  },

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
