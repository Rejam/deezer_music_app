import axios from 'axios'

const url = 'https://cors-anywhere.herokuapp.com/api.deezer.com'
const api = axios.create({ baseURL: url })

export default {
  getTracks: q => 
  api.get(`/search?q=track:"${q}"`),
  getChart: () =>
  api.get(`/editorial/0/charts`)
}