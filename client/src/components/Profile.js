import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
// import {checkAuth} from '../actions/auth'
import { checkAuth, notlogged } from "../actions/auth";
import { connect } from "react-redux";
import { Cookies } from "react-cookie";

const Profile = ({ dispatch, isLogged, username }) => {
  let cookie = new Cookies();
  useEffect(() => dispatch(checkAuth(cookie.get("token"))), [dispatch, cookie]);
  //Click to sign out
  const onClick = () => {
    cookie.remove("token", { path: "/" });
    dispatch(notlogged);
    window.location.reload();
  };
  //
  return (
    <div id="user_buttons">
      {!isLogged ? (
        <Fragment>
          <Link to="/register">
            <button className="btn btn-danger">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
                    <button className="btn btn-warning" onClick={onClick}>
            Logout
          </button>
          <span>Hello, {username}</span>

        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged_Main,
  username: state.auth.username,
});

export default connect(mapStateToProps)(Profile);
