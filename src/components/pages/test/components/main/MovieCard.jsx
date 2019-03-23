import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieCard extends Component {
  render () {
    const { id, title, poster_path, release_date } = this.props.movie

    return (
      <div>
        {/* Render only movies that have images */}
        {poster_path && (
          <div>
            <p className='text'>{title}</p>
            <p className='text'>Released:</p>
            <p className='text'>{release_date}</p>
            <Link to={`/${id}`}>
              <img
                className='movie-card'
                alt={title}
                src={`${thumbnailBaseURL}${poster_path}`}
              />
            </Link>
          </div>
        )}
      </div>
    )
  }
}
