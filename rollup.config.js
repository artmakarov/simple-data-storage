import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import { version, author, name, license } from './package.json';

const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} ${author.name}\n` +
  ` * Released under the ${license} License.\n` +
  ' */';

const defaultOutputOptions = {
  banner,
  format: 'umd',
  name: 'SData',
};

const moduleFileName = defaultOutputOptions.name.toLowerCase();

const config = {
  input: 'src/index.js',
  output: [
    {
      ...defaultOutputOptions,
      file: `dist/${moduleFileName}.js`,
    },
    {
      ...defaultOutputOptions,
      file: `dist/${moduleFileName}.min.js`,
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [
    eslint(),
    babel(),
  ],
};

export default config;
