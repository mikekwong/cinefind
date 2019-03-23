import React, { Component } from 'react'

export default class MovieCard extends Component {
  render () {
    const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w342'
    const { title, overview, poster_path, release_date } = this.props.movie

    return (
      <div>
        <p className='text'>Title: {title}</p>
        <p className='text'>Released: {release_date}</p>
        {/* <p>{overview}</p> */}
        {/* Render only movies that have images */}
        {poster_path && (
          <img
            className='movie-card'
            alt={title}
            src={`${thumbnailBaseURL}${poster_path}`}
          />
        )}
      </div>
    )
  }
}
