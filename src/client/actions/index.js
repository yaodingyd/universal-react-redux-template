import { browserHistory } from 'react-router'
import { localStorage } from '../utilities'
import 'whatwg-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
export const FB_LOGIN_REQUEST = 'FB_LOGIN_REQUEST'
export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS'

const LOGIN_URL = '/auth/login'
const SIGNUP_URL = '/auth/signup'

function authUser (creds, url) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestLogin(creds))
    return fetch(url, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
              if (!response.ok) {
                dispatch(loginError(user.message))
                return Promise.reject(user)
              } else {
                localStorage.setItem('token', user.token)
                localStorage.setItem('name', user.username)
                localStorage.setItem('id', user.id)
                dispatch(receiveLogin(user))
                browserHistory.push(`/dashboard`)
              }
            }).catch(err => console.log('Error: ', err))
  }
}

const requestLogin = (creds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
})

const receiveLogin = (userData) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  userData
})

const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const loginUser = (creds) => {
  return authUser(creds, LOGIN_URL)
}

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
})

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
})

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  localStorage.removeItem('id')
  dispatch(receiveLogout())
  browserHistory.push(`/`)
}

export const signupUser = (creds) => {
  return authUser(creds, SIGNUP_URL)
}

const requestFBLogin = () => ({
  type: FB_LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds: ''
})

const receiveFBLogin = (user) => ({
  type: FB_LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
  username: user.username,
  userId: user.id
})

export const FBLoginUser = (user) => {
  return dispatch => {
    dispatch(requestFBLogin())
    localStorage.setItem('id_token', user.id_token)
    localStorage.setItem('username', user.username)
    localStorage.setItem('userId', user.id)
    dispatch(receiveFBLogin(user))
    browserHistory.push(`/browse`)
  }
}

export const reloginUser = (token) => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`
    }
  }

  return dispatch => {
    return fetch('/auth/relogin', config)
      .then(response => {
        if (!response.ok) {
          localStorage.clear()
        } else {
          const user = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('name'),
            id: localStorage.getItem('id')
          }
          dispatch(receiveLogin(user))
          browserHistory.push(`/dashboard`)
        }
      }).catch(err => console.log('Error: ', err))
  }
}
