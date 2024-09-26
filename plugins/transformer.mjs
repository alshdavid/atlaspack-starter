import AtlaspackPlugin from '@atlaspack/plugin/src/PluginAPI.js'
const { Transformer } = /** @type {import('@atlaspack/plugin/src/PluginAPI')} */ (AtlaspackPlugin)

export default new Transformer({
  transform({ asset }) {
    console.log(asset)
    return [ asset ]
  }
})
