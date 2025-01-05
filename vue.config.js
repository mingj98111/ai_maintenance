module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ai_maintenance/' // 使用你的 GitHub 仓库名
    : '/'
};
