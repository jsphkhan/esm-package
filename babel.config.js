const presets = [
    [
      '@babel/preset-env',
      /** 
       * if we need esm build then modules is set as false, so it preserves ES modules
      */
      { modules: process.env.BABEL_ENV === "esm" ? false : "auto" },
    ],
    '@babel/preset-typescript',
  ]

module.exports = { presets }