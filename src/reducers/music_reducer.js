import { REQUEST_MUSIC, RECEIVE_MUSIC } from '../actions'

const initialState = {
  music: [],
  loading: false,
}
export default (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case REQUEST_MUSIC: {
      console.log(state)
      console.log({ ...state, loading: true })
      return { ...state, loading: true }
    }
    case RECEIVE_MUSIC:
      return { music: action.music, loading: false}

    default:
      return state
  }
}