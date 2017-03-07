import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../actions'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

import validator from 'validator'
import style from '../login/style.css'

class Signup extends Component {
  constructor () {
    super()
    this.state = {
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

  handlePasswordMatch = (e) => {
    let value = e.target.value.trim()
    this.setState({ passwordMatch: value })
    if (this.state.password !== value) {
      this.setState({ passwordMatchError: `Your passwords do not match` })
    } else {
      this.setState({ passwordMatchError: `` })
    }
  }

  handleSignup = () => {
    const creds = { email: this.state.email, password: this.state.password }
    this.props.handleSignup(creds)
  }

  render () {
    const { errorMessage } = this.props
    const { emailError, passwordError, passwordMatchError } = this.state

    return (
      <div className={style.auth}>
        <form>
          <h1 className={style.heading}>Sign Up</h1>
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
          <label className={style.group}>
            <span>Confirm Password</span>
            <input type='password' className={style.input} onBlur={this.handlePasswordMatch} />
            {passwordMatchError &&
              <p className={style.error}>{passwordMatchError}</p>
            }
          </label>
          <Button block bsStyle='primary' bsSize='large' onClick={this.handleSignup}>Sign Up</Button>
          {errorMessage &&
            <p className={style.error}>{errorMessage}</p>
          }
        </form>
        <div className={style.link}>
          <p>
            Already have an account? <Link to={`/login`}>Log in now.</Link>
          </p>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
