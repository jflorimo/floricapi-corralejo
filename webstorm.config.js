const path = require('path');
//https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000578284--alias-in-vue-cli-3-projects
module.exports = {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
};
