import React, { Component } from "react";
import "./App.css";
import MemeCards from "./components/MemeCards";

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
              <MemeCards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
