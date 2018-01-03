module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')(),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
}
