import { POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_GET_ALL_SUCCESS, POST_SET_CURRENT } from '../actions'
import { localStorage } from '../utilities'

const posts = (state = {
  posts: [],
  post: null
}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return Object.assign({}, state, action.post)
    case POST_GET_ALL_SUCCESS:
      return Object.assign({}, state, {
        posts: action.posts
      })
    case POST_SET_CURRENT:
      return Object.assign({}, state, {
        post: action.post
      })
    default:
      return state
  }
}

export default posts
