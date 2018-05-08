import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const loggerMiddleware = createLogger()

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
