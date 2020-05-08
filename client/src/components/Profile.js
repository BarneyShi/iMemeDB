import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
// import {checkAuth} from '../actions/auth'
import { checkAuth, notlogged } from "../actions/auth";
import { connect } from "react-redux";
import { Cookies } from "react-cookie";

const Profile = ({ dispatch, isLogged, user }) => {
  let cookie = new Cookies();
  useEffect(() => dispatch(checkAuth(cookie.get("token"))));
  console.log(cookie.get("token"))
  //Click to sign out
  const onClick = () => {
    cookie.remove("token");
    dispatch(notlogged);
    window.location.reload();
  };
  return (
    <div>
      {!isLogged ? (
        <Fragment>
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-danger">Register</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <span>Hello, {user.username}</span>
          <button className="btn btn-warning" onClick={onClick}>
            Logout
          </button>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged_Main,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
