module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@vue/app'
  ]

  return {
    presets,
    "env": {
      "test": {
        "presets": [["env", { "targets": { "node": "current" } }]]
      }
    }
  }
}
