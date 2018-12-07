import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore)

export default storeWithMiddleware(reducers)