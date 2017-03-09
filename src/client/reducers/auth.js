import { FB_LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from '../actions'
import { localStorage } from '../utilities'

const auth = (state = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token'),
  username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
  userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case FB_LOGIN_SUCCESS:
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        username: action.username,
        userId: action.userId
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

export default auth
