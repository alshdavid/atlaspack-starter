require('@atlaspack/babel-register/index.js')
const { Transformer } = require('@atlaspack/plugin/src/PluginAPI.js')

module.exports = new Transformer({
  transform({ asset }) {
    return [ asset ]
  }
})
