import { SEARCH_MUSIC } from './types' 
import deezerAPI from '../api'

const search = query => ({
  type: SEARCH_MUSIC,
  payload: deezerAPI(query)
})

export { search }