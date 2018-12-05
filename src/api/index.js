import axios from 'axios'

const rootUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com"

export default {
  getTracks: q => 
  axios.get(`${ rootUrl }/search?q=track:"${q}"`),
  getChart: () =>
  axios.get(`${ rootUrl }/editorial/0/charts`)
}