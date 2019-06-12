// import React from 'react'
import MovieCard from './MovieCard'
import Coverflow from 'react-coverflow'
import { thumbnailBaseURL } from '../../api/theMovieDB'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'

import React, { Component } from 'react'

export default class MovieList extends Component {
  constructor () {
    super()
    this.state = {
      movieInfo: []
    }
  }

  showDetail = async id => {
    console.log(id)
    try {
      const { data } = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}`)
      this.setState({ movieInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { movies, info } = this.props

    const movieListing = movies
      .slice(1)
      .sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        }
        return 0
      })
      .map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            movieDetail={() => this.showDetail(movie.id)}
          />
        )
      })

    const {
      title,
      poster_path,
      overview,
      release_date,
      id
    } = this.state.movieInfo

    return (
      <div className='movies-container'>
        <h2 className='text'>{info}</h2>
        <br />
        <div className='movies-carousel'>
          <Coverflow
            width={200}
            height={525}
            displayQuantityOfSide={3}
            enableScroll={false}
            enableHeading={false}
          >
            {movieListing}
          </Coverflow>
        </div>
        <br />
        {title && (
          <div className='movie-detail-info'>
            <p className='text title'>{title}</p>
            <p className='text released'>Released:</p>
            <p className='text date'>{release_date}</p>
            {/* <p className='text description-text'>Description:</p> */}
            <p className='text description-text overview'>{overview}</p>
          </div>
        )}
      </div>
    )
  }
}
