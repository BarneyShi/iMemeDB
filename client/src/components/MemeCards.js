import React, { Component } from "react";

class MemeCards extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     img: "",
  //     uploder: "",
  //   };
  // }

  // mapMeme = () => {
  // }

  render() {
    return (
      <div className="col-md-4 col-sm-6 col-12">
        <div className="card">

          <img
            className=""
            alt="card-img"
            src="https://i.kym-cdn.com/photos/images/original/000/138/246/tumblr_lltzgnHi5F1qzib3wo1_400.jpg"
          />
        </div>
      </div>
    );
  }
}

export default MemeCards;
