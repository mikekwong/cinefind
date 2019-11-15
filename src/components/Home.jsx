import React, { Component } from "react";
import theMovieDB, { API_KEY } from "./../api/theMovieDB";
import SearchBar from "./main/SearchBar";
import MovieList from "./main/MovieList";

export default class Home extends Component {
  state = {
    movies: [],
    info: "",
    error: null,
    isLoading: true,
    sortBy: "title",
  };

  onSearchSubmit = async term => {
    try {
      const { data } = await theMovieDB.get(
        `/search/movie?api_key=${API_KEY}&query=${term}`
      );
      this.setState({
        info: "Search Results",
        movies: data.results,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  };

  onRadioChange = e => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  render() {
    const { movies, info, isLoading, sortBy } = this.state;
    return (
      // Pass down sortBy state to search bar and movie list so they both have access to it
      // SearchBar will make changes based on radio selection
      // MovieList will read from state to pass into Util sort function
      <div className="container">
        <SearchBar
          onSubmit={this.onSearchSubmit}
          onRadioChange={this.onRadioChange}
          sortBy={sortBy}
        />
        <br />
        <MovieList info={info} movies={movies} sortBy={sortBy} />
        {/* {!isLoading ? (
          <MovieList info={info} movies={movies} sortBy={sortBy} />
        ) : (
          <p>...Loading</p>
        )} */}
      </div>
    );
  }
}
