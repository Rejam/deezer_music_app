import { REQUEST_MUSIC, RECEIVE_MUSIC, FAVE_TOGGLE } from '../actions'

const initialState = {
  faves: [],
  music: [],
  loading: false,
}
export default (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_MUSIC: {
      return { ...state, loading: true }
    }
    case RECEIVE_MUSIC:
      console.log(action.music[0])
      return { ...state, music: action.music, loading: false}

    case FAVE_TOGGLE: {
      const { faves } = state
      const { track } = action

      const updatedFaves = faves.includes(track)
      ? faves.filter((f) => track.id !== f.id )
      : [...faves, track]

      return { ...state, faves: updatedFaves }
    }

    default:
      return state
  }
}