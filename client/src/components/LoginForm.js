import React from "react";
import { log_in } from "../actions/login";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

//Remind users to log in before posting
const useAuthError = () => {
  const location = useLocation();
  if (location.state)
    return (
      <p style={{ color: "red", fontStyle: "italic" }}>
        {location.state.error}
      </p>
    );
};

const LoginForm = ({ dispatch, isLoggedin, user }) => {
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(log_in());
    history.push("/");
    // if (!isLoggedin) {
    //   history.push("/login",{error: 'Incorrect email/password'});
    // }
    // if (isLoggedin) {
    //   history.push("/");
    // }
  };
  return (
    <div id="login_form">
      {useAuthError()}
      <h3 style={{ textAlign: "center" }}>Login</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Passowrd: </label>
        <input id="password" name="password" placeholder="Password" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoggedin: state.login.isLogged,
  user: state.login.user,
});

export default connect(mapStateToProps)(LoginForm);
