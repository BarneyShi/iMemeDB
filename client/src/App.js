import React, { Component } from "react";
import "./App.css";
import Meme from "./components/Meme";

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <p>iMemeDB</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <Meme />
              <Meme />
              <Meme />
              <Meme />
              <Meme />
              <Meme />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
