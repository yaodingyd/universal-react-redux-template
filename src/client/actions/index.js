import browserHistory from '../history'
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

export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_GET_ALL_REQUEST = 'POST_GET_ALL_REQUEST'
export const POST_GET_ALL_SUCCESS = 'POST_GET_ALL_SUCCESS'
export const POST_SET_CURRENT = 'POST_SET_CURRENT'

export const FB_LOGIN_REQUEST = 'FB_LOGIN_REQUEST'
export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS'

const LOGIN_REQUEST_URI = '/auth/login'
const SIGNUP_REQUEST_URI = '/auth/signup'
const MAIN_URL = '/main'
const PROFILE_URL = '/profile'
const POST_URL = '/post'

const loginRequest = (creds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
})

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  user
})

const loginFailure = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

function authUser (creds, url) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(loginRequest(creds))
    return window.fetch(url, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
              if (!response.ok) {
                dispatch(loginFailure(user.message))
                return Promise.reject(user)
              } else {
                localStorage.setItem('token', user.token)
                localStorage.setItem('name', user.name)
                localStorage.setItem('email', user.email)
                localStorage.setItem('id', user.id)
                dispatch(loginSuccess(user))
                browserHistory.push(MAIN_URL)
              }
            }).catch(err => console.log('Error: ', err))
  }
}

export const loginUser = (creds) => {
  return authUser(creds, LOGIN_REQUEST_URI)
}

export const signupUser = (creds) => {
  return authUser(creds, SIGNUP_REQUEST_URI)
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
    return window.fetch('/auth/relogin', config)
      .then(response => {
        if (!response.ok) {
          localStorage.clear()
        } else {
          const user = {
            token: localStorage.getItem('token'),
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            id: localStorage.getItem('id')
          }
          dispatch(loginSuccess(user))
          browserHistory.push(MAIN_URL)
        }
      }).catch(err => console.log('Error: ', err))
  }
}

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
})

export const logoutUser = () => (dispatch) => {
  dispatch(logoutRequest())
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  localStorage.removeItem('id')
  dispatch(logoutSuccess())
  browserHistory.push(`/`)
}

// const requestFBLogin = () => ({
//   type: FB_LOGIN_REQUEST,
//   isFetching: true,
//   isAuthenticated: false,
//   creds: ''
// })

// const receiveFBLogin = (user) => ({
//   type: FB_LOGIN_SUCCESS,
//   isFetching: false,
//   isAuthenticated: true,
//   id_token: user.id_token,
//   username: user.username,
//   userId: user.id
// })

// export const FBLoginUser = (user) => {
//   return dispatch => {
//     dispatch(requestFBLogin())
//     localStorage.setItem('id_token', user.id_token)
//     localStorage.setItem('username', user.username)
//     localStorage.setItem('userId', user.id)
//     dispatch(receiveFBLogin(user))
//     browserHistory.push(`/browse`)
//   }
// }

const postCreateRequest = post => ({
  type: POST_CREATE_REQUEST,
  post
})

const postCreateSuccess = () => ({
  type: POST_CREATE_SUCCESS,
})

const postGetAllRequest = () => ({
  type: POST_GET_ALL_REQUEST,
})

const postGetAllSuccess = posts => ({
  type: POST_GET_ALL_SUCCESS,
  posts
})

export const postSetCurrent = post => ({
  type: POST_SET_CURRENT,
  post
})

export const postCreate = post => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post)
  }

  return dispatch => {
    dispatch(postCreateRequest(post))
    return window.fetch('/post/create', config)
      .then(response => {
        if (!response.ok) {
          // TODO: failure
        } else {          
          dispatch(postCreateSuccess())
        }
      }).catch(err => console.log('Error: ', err))
  }
}

export const postGetAll = () => {
  let config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    dispatch(postGetAllRequest())
    return window.fetch('/post/all', config)
      .then(response => 
      response.json().then(posts => {
        dispatch(postGetAllSuccess(posts))
      }))
  }
}
