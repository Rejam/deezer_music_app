import deezerAPI from '../api'

export const REQUEST_MUSIC = 'REQUEST_MUSIC'
const requestMusic = ({
  type: REQUEST_MUSIC
})

export const RECEIVE_MUSIC = 'RECEIVE_MUSIC'
const receiveMusic = (music) => ({
  type: RECEIVE_MUSIC,
  music
})

export const getMusic = query => async dispatch => {
  dispatch(requestMusic)

  const music = query
    ? (await deezerAPI.getTracks(query)).data.data
    : (await deezerAPI.getChart()).data.tracks.data
  dispatch(receiveMusic(music))
}
