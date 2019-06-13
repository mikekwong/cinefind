// import React from 'react'
import React, { Component } from 'react'
import MovieCard from './MovieCard'
import Coverflow from 'react-coverflow'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import sorting from '../utils/sorting'
import MovieSynopsis from './MovieSynopsis'

export default class MovieList extends Component {
  state = {
    movieInfo: []
  }

  showDetail = async id => {
    try {
      const { data } = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}`)
      this.setState({ movieInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { movies, info, sortBy } = this.props
    // Utilize utility function to match state of picked radio for sort type in search form
    const moviesList = sorting(sortBy, movies)
      // Discard any movies that have missing posters and return only those that exist
      .filter(movie => {
        return movie.poster_path
      })
      // map through and generate a component for each movie in array
      .map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            movieDetail={() => this.showDetail(movie.id)}
          />
        )
      })

    const { title, overview, release_date } = this.state.movieInfo

    return (
      <div className='movies-container'>
        <h1 className='text'>{info}</h1>
        <br />
        <div className='movies-carousel'>
          <Coverflow
            displayQuantityOfSide={2}
            enableScroll={false}
            enableHeading={false}
            media={{
              '@media (min-width: 320px)': {
                width: '400px',
                height: '200px'
              },
              '@media (min-width: 480px)': {
                width: '500px',
                height: '300px'
              },
              '@media (min-width: 768px)': {
                width: '800px',
                height: '400px'
              },
              '@media (min-width: 900px)': {
                width: '1000px',
                height: '500px'
              },
              '@media (min-width: 1200px)': {
                width: '1300px',
                height: '600px'
              },
              '@media (min-width: 1400px)': {
                width: '1500px',
                height: '700px'
              }
            }}
          >
            {moviesList}
          </Coverflow>
        </div>
        <br />
        <MovieSynopsis
          title={title}
          releaseDate={release_date}
          overview={overview}
        />
      </div>
    )
  }
}
