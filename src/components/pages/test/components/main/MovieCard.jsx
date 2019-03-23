import React, { Component } from 'react'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieCard extends Component {
  render () {
    const { title, poster_path, release_date } = this.props.movie

    return (
      <div>
        {/* Render only movies that have images */}
        {poster_path && (
          <div>
            <p className='text'>{title}</p>
            <p className='text'>Released:</p>
            <p className='text'>{release_date}</p>
            <img
              className='movie-card'
              alt={title}
              src={`${thumbnailBaseURL}${poster_path}`}
            />
          </div>
        )}
      </div>
    )
  }
}
