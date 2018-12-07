import axios from 'axios'

export default {
  getTracks: q => 
  axios.get(`/search?q=track:"${q}"`),
  getChart: () =>
  axios.get(`/editorial/0/charts`)
}