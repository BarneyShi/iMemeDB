import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import MemeCards from "./components/MemeCards";

class App extends Component {
  componentDidMount() {
    axios("http://localhost:3000/memes", {
      method: "GET",
    })
      .then((data) => this.setState({ memesData: data.data }))
      .catch((err) => console.log(err));
  }

  constructor() {
    super();
    this.state = {
      memesData: [],
    };
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <p>iMemeDB</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <p>{JSON.stringify(this.state.memesData)} </p>
              <MemeCards memesData={this.state.memesData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
