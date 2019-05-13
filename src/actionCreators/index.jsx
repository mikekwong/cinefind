import { FETCH_MOVIES } from '../actionTypes'
import axios from 'axios'

const fetchMovies = () => async dispatch => {
  try {
    const res = await axios()
  } catch (error) {
    console.error(error)
  }
}

export { fetchMovies }
