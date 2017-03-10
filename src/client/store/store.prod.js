import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(
    thunkMiddleware
  )
)

export default store
