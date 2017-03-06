module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')(),
    require('stylelint')(),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
}
