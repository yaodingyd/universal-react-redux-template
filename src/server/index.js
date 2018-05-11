const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const dbConnect = require('./models')

const postRouter = require('./routes/post')
const authRouter = require('./routes/auth')
const router = require('./routes/serverRender')

const signup = require('./passports/local-signup')
const login = require('./passports/local-login')

const DB_URL = require('./config').DB_URL

passport.use('local-signup', signup)
passport.use('local-login', login)

dbConnect(DB_URL)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

app.use(router)
app.use('/auth', authRouter)
app.use('/post', postRouter)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
