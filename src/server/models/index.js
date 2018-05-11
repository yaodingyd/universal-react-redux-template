const mongoose = require('mongoose')
// plug in ES6 promise
mongoose.Promise = global.Promise

function dbConnect (url) {
  mongoose.connect(url)

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`)
    //process.exit(1)
  })

  // require('./user')
}

module.exports = dbConnect
