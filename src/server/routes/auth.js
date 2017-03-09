const router = require('express').Router()
const passport = require('passport')
const SECRET = require('../config').SECRET
const jwt = require('express-jwt')

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

router.get('/facebook', passport.authenticate('facebook-login', { scope: ['email'] }))

router.get('/facebook/callback', (req, res) => {
  passport.authenticate('facebook-login', { session: false }, (err, user, info) => {
    if (err) {
      res.redirect('/login')
    } else if (!user) {
      res.status(400).json(info)
    } else {
      res.redirect(`/login?id_token=${user.token}&username=${user.name}&id=${user.id}`)
    }
  })(req, res)
})

router.post('/relogin', jwt({ 'secret': SECRET }), (req, res) => {
  res.sendStatus(200)
})

module.exports = router
