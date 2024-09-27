#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

NPM_SCRIPT="build"

if ! [ "$1" = "" ]; then
  NPM_SCRIPT="$1"
fi

npx nodemon \
  --watch "$ATLASPACK_SRC_PATH/packages/**/*" \
  --watch "$ATLASPACK_SRC_PATH/crates/**/*" \
  --watch "$SCRIPT_DIR/plugins/**/*" \
  --watch "$SCRIPT_DIR/src/**/*" \
  --watch "$SCRIPT_DIR/build.mjs" \
  --ext "*" \
  --delay "250ms" \
  --signal "SIGTERM" \
  --exec "npm run $NPM_SCRIPT"
