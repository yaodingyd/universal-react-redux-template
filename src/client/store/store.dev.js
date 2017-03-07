import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
