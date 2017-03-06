import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { getParameterByName } from '../../utilities'

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

  /* componentDidMount = () => {
    if (typeof getParameterByName('id_token') === 'string') {
      let id_token = getParameterByName('id_token')
      let username = getParameterByName('username')
      let id = getParameterByName('id')
      this.props.fbLogin({
        id_token,
        username,
        id
      })
    }
  } */

  handleEmail = (e) => {
    let value = e.target.value.trim()
    this.setState({ email: value })
    if (!validator.isEmail(value)) {
      this.setState({ emailError: `${value} is not a valid email` })
    }
  }

  handlePassword = (e) => {
    let value = e.target.value.trim()
    this.setState({ password: value })
    if (value.length >= 4 && value.length <= 60) {
      this.setState({ passwordError: `Your password must contain between 4 and 60 characters` })
    }
  }

  handleLogin = () => {
    // const creds = { email: this.state.email.value, password: this.state.password.value }
    // this.props.onLoginClick(creds)
  }

  render () {
    const { errorMessage } = this.props

    return (
      <div className={style.auth}>
        <form>
          <h1 className={style.heading}>Log in</h1>
          <label className={style.group}>
            <span>Email</span>
            <input type='text' className={style.input} onChange={this.handleEmail} />
            {this.state.email.error &&
              <p className={style.error}>{this.state.email.error}</p>
            }
          </label>
          <label className={style.group}>
            <span>Password</span>
            <input type='password' className={style.password} onBlur={this.handlePassword} />
            {this.state.password.error &&
              <p className={style.error}>{this.state.password.error}</p>
            }
          </label>
          <button type='button' className='btn btn-light' onClick={this.handleLogin}>Log In</button>
          {errorMessage &&
            <p className={style.error}>{errorMessage}</p>
          }
        </form>
        <a href='/auth/facebook'>Log In via Facebook</a>
        <p className='link'>
          Do not have an account? <Link to={`/signup`}>Sign up now.</Link>
        </p>
      </div>
    )
  }
}

/*
Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (creds) => {
    dispatch(loginUser(creds))
  },
  fbLogin: (id_token, username) => {
    dispatch(FBLoginUser(id_token, username))
  }
})

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
*/
export default Login
