import axios from 'axios'

export const API_KEY = '86789a80250f8204092a76f2db89d695'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
