import { FB_LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from '../actions'
import { localStorage } from '../utilities'

const auth = (state = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token'),
  name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
  id: localStorage.getItem('id') ? localStorage.getItem('id') : '',
  errorMessage: ''
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      })
    case FB_LOGIN_SUCCESS:
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        name: action.user.name,
        id: action.user.id
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
        isAuthenticated: false,
        name: '',
        id: '',
        email: ''
      })
    default:
      return state
  }
}

export default auth
