import React, { Component } from 'react'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieDetail extends Component {
  constructor() {
    super()
    this.state = {
      movieInfo: [],
    }
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    console.log('id', id)
    try {
      const { data } = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}`)
      this.setState({ movieInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { title, poster_path, overview, release_date } = this.state.movieInfo

    return (
      <div className="movie-detail-info">
        <p className="text title">{title}</p>
        <p className="text released">Released:</p>
        <p className="text date">{release_date}</p>
        <img
          className="movie-detail-card"
          alt={title}
          src={`${thumbnailBaseURL}${poster_path}`}
        />
        <p className="text description-text">Description:</p>
        <p className="text description-text overview">{overview}</p>
      </div>
    )
  }
}
