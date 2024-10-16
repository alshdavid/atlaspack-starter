require('@atlaspack/babel-register/index.js')
const { Resolver } = require('@atlaspack/plugin/src/PluginAPI.js')

module.exports = new Resolver({
  resolve({ dependency }) {
    return null
  }
})
