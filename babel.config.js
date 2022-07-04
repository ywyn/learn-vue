module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
        useBuiltIns: 'entry',
        corejs: {
          version: '3',
          proposals: true,
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
