import '@atlaspack/babel-register/index.js'
import * as path from "node:path"
import * as url from "node:url"

import AtlaspackCore from '@atlaspack/core/src/index.js'
import AtlaspackFs from '@atlaspack/fs/src/index.js'
import AtlaspackPackageManager from '@atlaspack/package-manager/src/index.js'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const atlaspackV3 = process.argv.includes('atlaspackV3=true')

const { Atlaspack } = /** @type {import('@atlaspack/core/src/index')} */ (AtlaspackCore)
const { NodeFS } = /** @type {import('@atlaspack/fs/src/index')} */ (AtlaspackFs)
// const { NodePackageManager } = /** @type {import('@atlaspack/package-manager/src/index')} */ (AtlaspackPackageManager)

const atlaspack = new Atlaspack({
  inputFS: new NodeFS(),
  nodeWorkers: 1,
  // packageManager: new NodePackageManager(new NodeFS(), __dirname),
  shouldDisableCache: true,
  config: path.join(__dirname, '.parcelrc'),
  entries: [path.join(__dirname, 'src', 'index.ts')],
  targets: {
    default: {
      distDir: path.join(__dirname, "dist")
    }
  },
  featureFlags: {
    atlaspackV3
  }
})

const result = await atlaspack.run()

console.log(result)
