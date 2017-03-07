import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getParameterByName } from '../../utilities'
import { loginUser, FBLoginUser } from '../../actions'
import { Button } from 'react-bootstrap'

import validator from 'validator'
import style from './style.css'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }
  }

  componentDidMount = () => {
    if (typeof getParameterByName('id_token') === 'string') {
      let idToken = getParameterByName('id_token')
      let username = getParameterByName('username')
      let id = getParameterByName('id')
      this.props.fbLogin({
        idToken,
        username,
        id
      })
    }
  }

  handleEmail = (e) => {
    let value = e.target.value.trim()
    this.setState({ email: value })
    if (!validator.isEmail(value)) {
      this.setState({ emailError: `${value} is not a valid email` })
    } else if (value === '') {
      this.setState({ emailError: `Email is required` })
    } else {
      this.setState({ emailError: '' })
    }
  }

  handlePassword = (e) => {
    let value = e.target.value.trim()
    this.setState({ password: value })
    if (value.length < 4 && value.length > 60) {
      this.setState({ passwordError: `Your password must contain between 4 and 60 characters` })
    } else {
      this.setState({ passwordError: `` })
    }
  }

  handleLogin = () => {
    const creds = { email: this.state.email, password: this.state.password }
    this.props.handleLogin(creds)
  }

  render () {
    const { errorMessage } = this.props
    const { emailError, passwordError } = this.state

    return (
      <div className={style.auth}>
        <form>
          <h1 className={style.heading}>Log in</h1>
          <label className={style.group}>
            <span>Email</span>
            <input type='text' className={style.input} onChange={this.handleEmail} />
            {emailError &&
              <p className={style.error}>{emailError}</p>
            }
          </label>
          <label className={style.group}>
            <span>Password</span>
            <input type='password' className={style.input} onBlur={this.handlePassword} />
            {passwordError &&
              <p className={style.error}>{passwordError}</p>
            }
          </label>
          <Button block bsStyle='primary' bsSize='large' onClick={this.handleLogin}>Log In</Button>
          {errorMessage &&
            <p className={style.error}>{errorMessage}</p>
          }
        </form>
        <div className={style.link}>
          <a href='/auth/facebook'>Log in via Facebook</a>
          <div><Link to={`/dashboard`}>Dashboard</Link></div>
          <p>
            Do not have an account? <Link to={`/signup`}>Sign up now.</Link>
          </p>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleFBLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (creds) => {
    dispatch(loginUser(creds))
  },
  handleFBLogin: (token, username) => {
    dispatch(FBLoginUser(token, username))
  }
})

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
