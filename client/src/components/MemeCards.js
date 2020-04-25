import React, { Component, Fragment } from "react";
import axios from "axios";

class MemeCards extends Component {
  constructor() {
    super();
    this.state = {
      memesData: {},
      isLoaded: false,
    };
  }
  componentDidMount() {
    axios("http://localhost:3000/memes", {
      method: "GET",
    }).then((data) => this.setState({ memesData: data.data, isLoaded: true }));
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoaded
          ? this.state.memesData.map((meme, index) => (
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  {" "}
                  <img
                    key={index}
                    alt="meme-img"
                    className="card-img-top"
                    src={meme.image}
                  />{" "}
                </div>
              </div>
            ))
          : null}
      </Fragment>
    );
  }
}

export default MemeCards;
