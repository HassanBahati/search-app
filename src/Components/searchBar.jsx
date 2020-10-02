import React, { Component } from "react";

import "../App.css";

class SearchBar extends Component {
  state = { result: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.result);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search here. . . ."
              value={this.state.result}
              onChange={(e) => this.setState({ result: e.target.value })}
            />

            <h2 className="searchResults">
              <span className="input">Search Results : </span>
              {this.state.result}{" "}
            </h2>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
