import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieCard extends Component {
  render () {
    const { id, title, poster_path, release_date } = this.props.movie

    return (
      <div>
        {/* Render only movies that have images and release date */}
        {poster_path && release_date && (
          <div>
            {/* wrap titles if they are too long */}
            {title.length > 25 ? (
              <div>
                <p className='text title'>
                  {title
                    .split(' ')
                    .slice(0, 4)
                    .join(' ')}
                </p>
                <p className='text title'>
                  {title
                    .split(' ')
                    .slice(4)
                    .join(' ')}
                </p>
              </div>
            ) : (
              <p className='text title'>{title}</p>
            )}
            {/* <p className='text'>{title}</p> */}
            <p className='text released'>Released:</p>
            <p className='text date'>{release_date}</p>
            <Link to={`/movie/${id}`}>
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
