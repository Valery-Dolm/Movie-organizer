const initialState = {
  searchResult: "",
  cart: [],
  movies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FIND_MOVIE_BY_NAME": {
      return {
        searchResult: action.payload.title,
        cart: state.cart,
        movies: state.movies,
      };
    }

    case "FIND_MOVIE": {
      console.log("mistake here",state.searchResult)
      return {        
        searchResult: state.searchResult,
        cart: state.cart,
        movies: action.payload.data.Search,
      };
    }
    case "ADD_MOVIE_TO_LIST": {
      return {
        searchResult: state.searchResult,
        cart: [...state.cart, action.payload.movie],
        movies: state.movies,
      };
    }
    case "DELETE_MOVIE_FROM_LIST": {
      debugger;
      const item = state.cart.filter((item, index) => item.imdbID !== action.payload.imdbID)
      return {
        ...state,
        cart: item
      }
    }

    default: {
      return state;
    }
  }
}
export default reducer;
