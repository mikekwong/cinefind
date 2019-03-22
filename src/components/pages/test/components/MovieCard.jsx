import React, { Component } from 'react'

export default class MovieCard extends Component {
  render () {
    const thumbnailBaseURL = 'https://image.tmdb.org/t/p/w185'
    const { title, overview, poster_path, release_date } = this.props.movie

    return (
      <div>
        <p>Title: {title}</p>
        <p>Released: {release_date}</p>
        {/* <p>{overview}</p> */}
        <img alt={title} src={`${thumbnailBaseURL}${poster_path}`} />
      </div>
    )
  }
}
