#!/bin/bash

while true; do
    read -p "Use Local Atlaspack? [Y/n] " use_atlaspack_local
    if 
      [ "$use_atlaspack_local" = "y" ] || 
      [ "$use_atlaspack_local" = "Y" ] || 
      [ "$use_atlaspack_local" = "yes" ]
    then
      use_atlaspack_local="true"
      break
    fi

    if 
      [ "$use_atlaspack_local" = "n" ] || 
      [ "$use_atlaspack_local" = "N" ] ||
      [ "$use_atlaspack_local" = "no" ]
    then
      use_atlaspack_local="false"
      break
    fi
done

if [ "$use_atlaspack_local" = "false" ]; then
  echo "selecting 'package.latest.json'"
  rm -rf package.json
  rm -rf package.local.json
  mv package.latest.json package.json
  exit 0
fi

atlaspack_src_path="$ATLASPACK_SRC_PATH"

if [ "$atlaspack_src_path" = "" ]; then
  read -p "Enter Atlaspack Source Path [default: '\$HOME/Development/atlaspack-bundler/atlaspack'] " atlaspack_src_path
fi

if [ "$atlaspack_src_path" = "" ]; then
  atlaspack_src_path="$HOME/Development/atlaspack-bundler/atlaspack"
fi

echo "Atlaspack Source Path: $atlaspack_src_path"
echo "selecting 'package.local.json'"
rm -rf package.json
rm -rf package.latest.json
rm -rf postinstall.bash
rm -rf .git
mv package.local.json package.json
sed -i 's@${ATLASPACK_SRC_PATH}@'"$atlaspack_src_path"'@g' package.json

git init
git add .
git commit -m "Initial commit"

npm install
