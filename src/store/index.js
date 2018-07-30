import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from '../reducers'

const storeWithMiddleware = applyMiddleware(reduxPromise)(createStore)

export default storeWithMiddleware(reducers)