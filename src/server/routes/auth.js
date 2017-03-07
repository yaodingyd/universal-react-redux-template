const router = require('express').Router()
const passport = require('passport')

router.post('/signup', (req, res) => {
  passport.authenticate('local-signup', { session: false }, (err, user, info) => {
    if (err) {
      res.status(500).json({
        message: err
      })
    } else if (!user) {
      res.status(400).json(info)
    } else {
      res.json(user)
    }
  })(req, res)
})

router.post('/login', (req, res) => {
  passport.authenticate('local-login', {session: false}, (err, user, info) => {
    if (err) {
      res.status(500).json({
        message: err
      })
    } else if (!user) {
      res.status(400).json(info)
    } else {
      res.json(user)
    }
  })(req, res)
})

module.exports = router
