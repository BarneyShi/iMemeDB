import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import MemeCards from "./components/MemeCards";
import PostMeme from "./components/PostMeme";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MemeDetail from "./components/MemeDetail";

class App extends Component {
  //Close modal
  exitButton = () => {
    document.getElementById("contact-form").style.display = "none";
  };
  hiddenForm = () => {
    document.getElementById("contact-form").style.display = "none";
    window.location.reload();
  };
  render() {
    return (
      <div>
        <div className="jumbotron">
          <a href="/">
            <img alt="LOGO" src="logo.png" />
          </a>
          <div style={{ position: "absolute", bottom: "1vh", right: "3vw" }}>
            <Link to="/postmeme">
              <button className="btn btn-success" id="addButton">
                Add meme
              </button>
            </Link>
            <Profile />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/register" component={RegisterForm}></Route>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/postmeme" component={PostMeme}></Route>
              <Route exact path='/meme/:id'component={MemeDetail}></Route>
            </Switch>
          </div>
          <div className="row" style={{ display: "inherit" }}>
            <div className="card-deck">
              <Switch>
                <Route exact path="/" component={MemeCards}></Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* Custome modal */}
        <div id="contact-form" style={{ display: "none" }}>
          <form id="form-body">
            <h2>Contact Form</h2>
            <div onClick={this.exitButton} id="exit-button">
              &times;
            </div>
            <br />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
