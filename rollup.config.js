import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

function generateBaseConfig(_pkg) {
  return {
    input: './src/index.ts',
    output: [
      {
        file: _pkg.main,
        format: 'cjs',
      },
      {
        file: _pkg.module,
        format: 'es',
      },
    ],
    external: [...Object.keys(_pkg.dependencies || {})],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      terser(),
    ],
  }
}

export default generateBaseConfig(pkg)
