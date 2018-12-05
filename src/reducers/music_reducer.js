import { SEARCH_MUSIC } from '../actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case SEARCH_MUSIC:
      return action.payload

    default:
      return state
  }
}