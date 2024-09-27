# Atlaspack Dev Kit

This project aims to assist in the local development of Atlaspack by providing a real world build target that can be customized to suit.

It features:

- A starter web application
- Basic "noop" Plugins
  - Transformer
  - Resolver
- A `.parcelrc` file
- CLI build scripts
- Programmatic build script
- Automatic linking to local source files
  - Includes flow transformation

## Setup

The repo includes a postinstall script that sets everything up.

The postinstall script will:

- Initialize a new git repo
- Automatically link Atlaspack sources
  - Uses the environment variable `ATLASPACK_SRC_PATH`
  - OR defaults to `$HOME/Development/atlassian-labs/atlaspack`

```bash
npm install
```

### Atlaspack setup

```bash
cd $ATLASPACK_SRC_PATH
yarn build-native
yarn build-ts # Optional, adds types to build script
```

## Usage

```bash
# Build using the CLI
npm run build
npm run build:v3

# Build using the build script
npm run build-script
npm run build-script:v3
```

### Watch Script

If you'd like to rebuild the project when Atlaspack sources change you can use the watch scripts

```bash
# Build using the CLI
npm run watch
npm run watch:v3

# Build using the build script
npm run watch-script
npm run watch-script:v3
```

## TypeScript Types in Build Script

Atlaspack is written in Flow so we cannot use TypeScript in the build script and don't have access to TypeScript types.

We can access the TypeScript types by building them in the Atlaspack repo

```bash
cd $ATLASPACK_SRC_PATH
yarn build-ts
```

