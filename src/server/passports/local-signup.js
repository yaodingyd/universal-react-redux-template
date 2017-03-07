const Strategy = require('passport-local').Strategy
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = require('../config').SECRET

const signup = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: 'user' + Date.now().toString().substring(4)
  }

  const newUser = new User(userData)

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return done(err)
    if (user) return done(null, false, { message: 'This email is already registered.' })

    newUser.save((err, savedUser) => {
      if (err) return done(err)
      const payload = {
        sub: newUser._id
      }
      const token = jwt.sign(payload, SECRET)
      const data = {
        username: userData.email,
        id: savedUser._doc._id,
        token: token
      }
      return done(null, data)
    })
  })
})

module.exports = signup
