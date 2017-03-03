import { browserHistory } from 'react-router'

if (typeof window === "undefined" || window === null) {
  var localStorage = {
    getItem: () => {},
    setItem: () => {}
  };
  var history = {}
} else {
  var localStorage = window.localStorage;
}

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
export const FB_LOGIN_FAILUER = 'FB_LOGIN_FAILURE'

const LOGIN_URL = '/login'
const SIGNUP_URL = '/signup'


const requestLogin = (creds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
})

const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
  username: user.username,
  userId: user.id
})

const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const loginUser = (creds) => {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestLogin(creds))
    return fetch(LOGIN_URL, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          localStorage.setItem('id_token', user.id_token)
          localStorage.setItem('username', user.username)
          localStorage.setItem('userId', user.id)
          dispatch(receiveLogin(user))
          browserHistory.push(`/browse`)
        }
      }).catch(err => console.log("Error: ", err))
  }
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
  localStorage.removeItem('id_token')
  dispatch(receiveLogout())
  location.href = '/'
}

const requestSignup = (creds) => ({
  type: SIGNUP_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
})

const receiveSignup = (user) => ({
  type: SIGNUP_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
  username: user.username,
  userId: user.id
})

const signupError = (message) => ({
  type: SIGNUP_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const signupUser = (creds) => {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestSignup(creds))
    return fetch(SIGNUP_URL, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(signupError(user.message))
          return Promise.reject(user)
        } else {
          localStorage.setItem('id_token', user.id_token)
          localStorage.setItem('username', user.username)
          localStorage.setItem('userId', user.id)
          dispatch(receiveSignup(user))
          browserHistory.push(`/browse`)
        }
      }).catch(err => console.log("Error: ", err))
  }
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

const FBloginError = (message) => ({
  type: FB_LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
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



