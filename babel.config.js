const presets = [
  [
    '@babel/preset-env',
    /**
     * if we need esm build then modules is set as false, so it preserves ES modules
     */
    { modules: process.env.BABEL_ENV === 'esm' ? false : 'auto' },
  ],
  '@babel/preset-typescript',
];

/**
 * this plugin is used because ES modules does not support importing from directories
 * eg. import isClient from "./utils/ssr/isClient"; // will not work and throw error
 *     import isClient from "./utils/ssr/isClient/index.js"; // this works
 */
const plugins = [['babel-plugin-add-import-extension', { extension: 'js' }]];

module.exports = { presets, plugins };
