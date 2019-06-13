// import React from 'react'
import React, { Component } from 'react'
import MovieCard from './MovieCard'
import Coverflow from 'react-coverflow'
import theMovieDB, { API_KEY } from '../../api/theMovieDB'
import { thumbnailBaseURL } from '../../api/theMovieDB'

export default class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      movieInfo: [],
    }
  }

  showDetail = async id => {
    try {
      const { data } = await theMovieDB.get(`/movie/${id}?api_key=${API_KEY}`)
      this.setState({ movieInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { movies, info } = this.props

    const movieListing = movies
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

    const { title, overview, release_date } = this.state.movieInfo

    return (
      <div className="movies-container">
        <h1 className="text">{info}</h1>
        <br />
        <div className="movies-carousel">
          <Coverflow
            // width={960}
            // height={480}
            displayQuantityOfSide={2}
            enableScroll={false}
            enableHeading={false}
            media={{
              '@media (min-width: 320px)': {
                width: '400px',
                height: '200px',
              },
              '@media (min-width: 480px)': {
                width: '500px',
                height: '300px',
              },
              '@media (min-width: 768px)': {
                width: '800px',
                height: '400px',
              },
              '@media (min-width: 900px)': {
                width: '1000px',
                height: '500px',
              },
              '@media (min-width: 1200px)': {
                width: '1300px',
                height: '600px',
              },
              '@media (min-width: 1400px)': {
                width: '1500px',
                height: '700px',
              },
            }}
          >
            {movieListing}
          </Coverflow>
        </div>
        <br />
        {title && (
          <div className="movie-detail-info">
            <p className="text title">{title}</p>
            <p className="text released">Released:</p>
            <p className="text date">{release_date}</p>
            {/* <p className='text description-text'>Description:</p> */}
            <p className="text description-text overview">{overview}</p>
          </div>
        )}
      </div>
    )
  }
}
