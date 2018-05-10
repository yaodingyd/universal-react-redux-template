import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signupUser } from '../../actions'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import Header from '@/components/header'

import './style.css'

class Auth extends Component {
  constructor () {
    super()
    this.state = {
      valid: false,
      errorMessage: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordMatch: '',
      passwordMatchError: ''
    }
  }

  handleEmail = (e) => {
    let value = e.target.value.trim()
    if (!value) {
      this.setState({ emailError: `Email is required` })
    } else if (!isEmail(value)) {
      this.setState({ emailError: `${value} is not a valid email` })
    } else {
      this.setState({ 
        emailError: null,
        email: value 
      })
    }
  }

  handlePassword = (e) => {
    let value = e.target.value.trim()
    if (value.length < 4 && value.length > 60) {
      this.setState({ passwordError: `Your password must contain between 4 and 60 characters` })
    } else {
      this.setState({ 
        passwordError: null,
        password: value 
      })
    }
  }

  handlePasswordMatch = (e) => {
    let value = e.target.value.trim()
    if (this.state.password !== value) {
      this.setState({ passwordMatchError: `Your passwords do not match` })
    } else {
      this.setState({ 
        passwordMatchError: null,
        passwordMatch: value
      })
    }
  }

  handleSignup = () => {
    const { emailError,  passwordError, passwordMathError, email, password } = this.state
    if (emailError || passwordError || passwordError) {
      this.setState({
        errorMessage: 'Please make sure all fields are valid'
      })
    } else if (!email || !password){
      this.setState({
        errorMessage: 'You must fill up both email and password'
      })
    } else {
      this.setState({
        errorMessage: ''
      })
      const creds = { email: this.state.email, password: this.state.password }
      this.props.handleSignup(creds)
    }
  }

  render () {
    const { emailError, passwordError, passwordMatchError, errorMessage } = this.state
    const { location } = this.props
    const signup =  location.pathname === '/signup'

    return (
      <div styleName="container">
        <Header />
        <section styleName="auth">
          <form>
            <h1 styleName="heading" className="title is-2">{ signup ? 'Sign Up' : 'Log In'}</h1>
            <label styleName="group" className="control">
              <span>Email</span>
              <input type='text' styleName="input" className="input is-info" onChange={this.handleEmail} />
              {emailError &&
                <p styleName="error">{emailError}</p>
              }
            </label>
            <label styleName="group">
              <span>Password</span>
              <input type="password" styleName="input" className="input is-success" onBlur={this.handlePassword} />
              {passwordError &&
                <p styleName="error">{passwordError}</p>
              }
            </label>
            {signup && 
            <label styleName="group">
              <span>Confirm Password</span>
              <input type="password" styleName="input"  className="input is-warning" onBlur={this.handlePasswordMatch} />
              {passwordMatchError &&
                <p styleName="error">{passwordMatchError}</p>
              }
            </label>
            }
            <label styleName="group">
              <button type="button" className="button is-middle is-primary is-fullwidth" onClick={this.handleSignup}>{ signup ? 'Sign Up' : 'Log In'}</button>
              {errorMessage &&
                <p styleName="error">{errorMessage}</p>
              }
            </label>
          </form>

          {signup ?
          <div styleName="link">
              <Link to={`/login`} className="button is-middle is-link  is-fullwidth is-rounded">Already have an account? Log in.</Link>
          </div>
          :
          <div styleName="link">
            <a href='/auth/facebook' className="button is-middle is-success is-fullwidth is-rounded">Log in via Facebook</a>
            <Link to={`/signup`} className="button is-middle is-link  is-fullwidth is-rounded"  styleName="link">Do not have an account? Sign up now.</Link>
          </div>
          }
        </section>
      </div>
    )
  }
}

Auth.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  handleSignup: (creds) => {
    dispatch(signupUser(creds))
  }
})

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
