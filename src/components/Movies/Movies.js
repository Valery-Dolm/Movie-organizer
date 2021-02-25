import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import store from "../redux/store";

class Movies extends Component {
  state = {
    movies: [],
  };

  addToCart = (movie) => {
    const state = store.getState();
    const isMovie = state.cart.find((item) => {
      return item.imdbID === movie.imdbID;
    })
    isMovie || store.dispatch({
      type: "ADD_MOVIE_TO_LIST",
      payload: {
        movie: movie,
      },
    });
  }
 
  componentDidMount(){
    store.subscribe(() => {
      const state = store.getState();
      fetch(`https://www.omdbapi.com/?s=${state.searchResult}&apikey=ba83740a`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search})
      })   
    });
  }
  render() {
    return (
      <ul className="movies">
        {this.state.movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} addToCart={() => this.addToCart(movie)}/>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
