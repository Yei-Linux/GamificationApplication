const {createMacro} = require('babel-plugin-macros')

module.exports = createMacro(taggedTranslationsMacro)

function taggedTranslationsMacro({references, state, babel}) {
  return {
    keepImports: true,
  }
}