const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  tags: [String]
})

PostSchema.pre('save', function saveHook(next){
  if (!this.title || !this.author) {
    const error = new Error('not a valid post')
    next(error)
  }

  next()
})

module.exports = mongoose.model('Post', PostSchema)
