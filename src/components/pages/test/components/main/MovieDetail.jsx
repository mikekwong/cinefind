import React, { Component } from 'react'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieDetail extends Component {
  constructor () {
    super()
    this.state = {
      movieInfo: []
    }
  }
  async componentDidMount () {
    const { id } = this.props.match.params
    try {
      const { data } = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}`)
      this.setState({ movieInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const {
      original_title,
      poster_path,
      overview,
      release_date
    } = this.state.movieInfo
    console.log(this.state.movieInfo)
    // const { movie } = this.props.location.state
    // console.log(movie)
    console.log(this.state.movieInfo)

    return (
      <div className='movie-detail-info'>
        <p className='text'>{original_title}</p>
        <p className='text'>Released: </p>
        <p className='text'>{release_date}</p>

        <img
          className='movie-detail-card'
          alt={original_title}
          src={`${thumbnailBaseURL}${poster_path}`}
        />
        <p className='text'>Description:</p>
        <p className='text'>{overview}</p>
      </div>
    )
  }
}
