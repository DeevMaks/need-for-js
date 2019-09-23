module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano'),
    require('postcss-url')({ url: 'rebase' }),
  ]
}
