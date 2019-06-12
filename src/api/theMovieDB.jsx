import axios from 'axios'

export const API_KEY = '86789a80250f8204092a76f2db89d695'

// export const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w185'
// export const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w342'
// export const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w500'
export const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w780'
// export const thumbnailBaseURL = 'https://image.tmdb.org/t/p/original'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
