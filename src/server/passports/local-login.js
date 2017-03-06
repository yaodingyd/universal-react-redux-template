const Strategy = require('passport-local').Strategy
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = require('../config').SECRET

const login = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  }

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return done(err)
    if (!user) return done(null, false, { message: 'This email is not registered.' })

    user.comparePassword(userData.password, (err, isMatch) => {
      if (err) return done(err)
      if (!isMatch) return done(null, false, { message: 'incorrect password' })
      const payload = {
        sub: user._id
      }
      const token = jwt.sign(payload, SECRET)
      const data = {
        username: userData.email,
        id: user._id,
        token: token
      }
      return done(null, data)
    })
  })
})

export default login

