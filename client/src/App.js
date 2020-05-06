import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import MemeCards from "./components/MemeCards";
import PostMeme from "./components/PostMeme";
import Profile from './components/Profile';
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <p>iMemeDB</p>
          <div style={{ position: "absolute", bottom: "1vh", right:"3vw" }}>
            <Link to="/postmeme">
              <button className="btn btn-success" id='addButton' >Add meme</button>
            </Link>
            <Profile/>

          </div>
        </div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="card-deck">
              <Switch>
                <Route path='/login' component={LoginForm}></Route>
                <Route exact path="/" component={MemeCards}></Route>
                <Route path="/postmeme" component={PostMeme}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
