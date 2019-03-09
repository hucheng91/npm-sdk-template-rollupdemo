import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  external: [], // 这里配置 直接引入不打包，like vue,react  设置 external: ['vue','react']
  input: 'src/index.js',
  output: [
    {
      format: 'esm',
      file: 'lib/index.esm.js',
    },
    {
      format: 'umd',
      name: 'pullLoadMore',
      file: 'lib/index.umd.js',
    },
    {
      format: 'cjs',
      file: 'lib/index.cjs.js',
    }
  ],
  plugins: [resolve(
    {
      jsnext: true,
      main: true,
      browser: false
    }
  ), babel({
    runtimeHelpers: true
  }), common()]
}