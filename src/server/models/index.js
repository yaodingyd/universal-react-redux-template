const mongoose = require('mongoose')

function dbConnect (url) {
  mongoose.connect(url)

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`)
    process.exit(1)
  })

  require('./user')
}

module.exports = dbConnect
