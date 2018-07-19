import { combineReducers } from 'redux'
import musicReducer from './music_reducer'

export default combineReducers({
  music: musicReducer
})