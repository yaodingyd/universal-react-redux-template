const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  tags: [String]
})

module.exports = mongoose.model('Post', PostSchema)
