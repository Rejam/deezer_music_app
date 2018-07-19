import axios from 'axios'

const rootUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search"

export default q => 
  axios.get(`${ rootUrl }?q=track:"${q}"`)