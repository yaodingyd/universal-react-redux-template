const router = require('express').Router()
const Post = require('../models/post')

router.post('/create', (req, res) => {
  const post = new Post(req.body)
  post.save()
  res.sendStatus(200)
})


module.exports = router
