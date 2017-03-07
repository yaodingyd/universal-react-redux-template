const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')
const dbConnect = require('./models')
const authRouter = require('./routes/auth')
const signup = require('./passports/local-signup')
const login = require('./passports/local-login')

const DB_URL = require('./config').DB_URL

passport.use('local-signup', signup)
passport.use('local-login', login)

dbConnect(DB_URL)

const app = express()
app.use(express.static(path.join('./', 'www')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(passport.initialize())

app.use('/auth', authRouter)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
