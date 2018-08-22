module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' }
    }
  }
}
