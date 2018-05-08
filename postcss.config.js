module.exports = {
  plugins: [
    require('postcss-import')(),
    require('precss')(),
    require('autoprefixer')(),
    // require('postcss-reporter')({
    //   clearReportedMessages: true
    // })
  ]
}
