import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    esbuild: {
      minify: true,
    },
    inlineDependencies: true,
  },
  hooks: {
    'rollup:options': (_, options) => {
      options.plugins = [
        options.plugins,
      ]
    },
  },
})
