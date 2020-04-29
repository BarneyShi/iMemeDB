import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import "./App.css";
import MemeCards from "./components/MemeCards";
import PostMeme from './components/PostMeme'

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <p>iMemeDB</p>
          <div className='float-right'>
            <Link to='/postmeme'>Add meme</Link>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <Switch>
                <Route exact path='/' component={MemeCards}></Route>
                <Route path='/postmeme' component={PostMeme}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
