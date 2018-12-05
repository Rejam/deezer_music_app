import { SEARCH_MUSIC } from './types' 
import deezerAPI from '../api'

export const getTracks = async query => {
  const payload = await deezerAPI.getTracks(query)
  return ({
    type: SEARCH_MUSIC,
    payload: payload.data.data
  })
}

export const getChart = async () => {
  const payload = await deezerAPI.getChart()
  return ({
    type: SEARCH_MUSIC,
    payload: payload.data.tracks.data
  })
}
