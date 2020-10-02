import React, { Component } from "react";

import SearchBar from "./Components/searchBar";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="heading ">EDU CORE 3 MINI PROJECT</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
