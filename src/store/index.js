import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from '../reducers'

const logger = () => next => action => {
  console.log("logged:", action)
  next(action)
}

const storeWithMiddleware = applyMiddleware(logger, reduxPromise)(createStore)

export default storeWithMiddleware(reducers)