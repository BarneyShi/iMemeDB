import React, { useEffect, Fragment } from "react";
import { log_in } from "../actions/login";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useLocation, Link } from "react-router-dom";

const LoginForm = ({ dispatch, isLoggedin, user, attempt }) => {
  const location = useLocation();

  let history = useHistory();

  //Handle success/fail login
  useEffect(() => {
    if (isLoggedin) {
      history.push("/");
    } else {
      if (attempt) {
        history.push({
          pathname: "/login",
          state: {
            error_login: "Incorrect password/email",
          },
        });
      }
    }
  }, [isLoggedin, attempt]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(log_in());
  };
  return (
    <div id="login_form">
      {/* Notify to login before post */}
      {location.state && location.state.remind_to_login ? (
        <p style={{ color: "red", fontStyle: "italic" }}>
          {location.state.error}
        </p>
      ) : null}

      {/* Wrong credential */}
      {attempt && history.location.state.error_login ? (
        <Fragment>
          <p style={{ color: "red", fontStyle: "italic" }}>
            {history.location.state.error_login}
          </p>{" "}
        </Fragment>
      ) : null}
      <h3 style={{ textAlign: "center" }}>Login</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Passowrd: </label>
        <input id="password" name="password" placeholder="Password" />
        <Link to="/register">
          <p>Don't have an account yet?</p>
        </Link>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoggedin: state.login.isLogged,
  user: state.login.user,
  attempt: state.login.attempt,
});

export default connect(mapStateToProps)(LoginForm);
