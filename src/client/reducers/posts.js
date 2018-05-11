import { POST_CREATE_REQUEST, POST_CREATE_SUCCESS } from '../actions'
import { localStorage } from '../utilities'

const posts = (state = {
  posts: [],
  post: null
}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return Object.assign({}, state, action.post) 
    default:
      return state
  }
}

export default posts
