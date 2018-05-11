const router = require('express').Router()
const Post = require('../models/post')

router.get('*', (req, res, next) => {
  console.log(req)
  next()
})

router.post('/create', (req, res) => {
  const post = new Post(req.body)
  post.save(err => {
    if (err) res.sendStatus(500)
    else   res.sendStatus(200)
  })
})

router.get('/all', (req, res) => {
  Post.find({}, (err, posts) => {
    res.json(posts)
  })
})


module.exports = router
