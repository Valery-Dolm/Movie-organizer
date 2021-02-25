import React, { Component } from "react";
import store from "../redux/store";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    searchLine: "",
    movies: []
  };
  searchLineChangeHandler = (event) => {
    this.setState({ searchLine: event.target.value });
  };
  searchBoxSubmitHandler = (event) => {
    event.preventDefault();
    store.dispatch({
      type: "FIND_MOVIE_BY_NAME",
      payload: {
        title: this.state.searchLine,
      },
    });
  };

  
 
  render() {
    const { searchLine } = this.state;
    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={(event) => this.searchBoxSubmitHandler(event)}
        >
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
