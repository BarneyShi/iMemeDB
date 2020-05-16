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
         <Profile />
        <div className="jumbotron">

          <a href="/">
            <img alt="LOGO" src="logo.png" />
          </a>
        </div>
        <div style={{ display:"flex", flexDirection:"row-reverse"}}>
            <Link to="/postmeme">
              <button className="btn btn-success" id="addButton">
                + Add meme
              </button>
            </Link>
          </div>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/register" component={RegisterForm}></Route>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/postmeme" component={PostMeme}></Route>
              <Route exact path="/memes/:id" component={MemeDetail}></Route>
            </Switch>
          </div>
          <div className="row" style={{ display: "inherit" }}>
            <div className="card-deck">
              <Switch>
                <Route exact path="https://barneyshi.github.io/iMemeDB/" component={MemeCards}></Route>
              </Switch>
            </div>
          </div>
        </div>

        <div style={{borderTop:"1px solid #0000001a", textAlign:"center"}}>
        &copy;	2020 Copyright - Barney Shi
        </div>
      </div>
    );
  }
}

export default App;
