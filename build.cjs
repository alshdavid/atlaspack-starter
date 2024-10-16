console.clear()
require('@atlaspack/babel-register/index.js')
const path = require("node:path")

const { Atlaspack } = require('@atlaspack/core/src/index.js')
const { NodeFS } = require('@atlaspack/fs/src/index.js')
const { NodePackageManager } = require('@atlaspack/package-manager/src/index.js')

const V3 = process.argv.includes('atlaspackV3=true')

void async function main() {
    const atlaspack = new Atlaspack({
    inputFS: new NodeFS(),
    // @ts-expect-error
    nodeWorkers: 1,
    workers: 1,
    // packageManager: new NodePackageManager(new NodeFS(), __dirname),
    shouldDisableCache: true,
    config: path.join(__dirname, '.parcelrc'),
    entries: [path.join(__dirname, 'src', 'index.js')],
    targets: {
        default: {
        distDir: path.join(__dirname, "dist")
        }
    },
    featureFlags: {
        atlaspackV3: V3
    }
    })

    const result = await atlaspack.run()

    console.log(result)
}()