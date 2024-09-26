cargo watch \
  -w packages \
  -w crates \
  -w /Volumes/Storage/Development/alshdavid-templates/atlaspack-starter/build.mjs \
  -- bash -c "\
    clear;\
    yarn build-native && \
    node /Volumes/Storage/Development/alshdavid-templates/atlaspack-starter/build.mjs \
  "
