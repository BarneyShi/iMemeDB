import React, { useEffect, Fragment } from "react";
import "../stylesheet/postmeme.css";
import { useHistory, Redirect } from "react-router-dom";
import { postMeme } from "../actions/postMeme";
import { connect } from "react-redux";
import { checkAuth } from "../actions/auth";
import { Cookies } from "react-cookie";


const PostMeme = ({ postMeme, isPosted, isLogged, username, checkAuth }) => {
  //Check if logged
  let cookie = new Cookies();
  useEffect(() => checkAuth(cookie.get("token")), [cookie, checkAuth]);
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(postMeme(event));
    postMeme(event);
    history.push("/");
  };

  return (
    <div id='post_meme_form'>
      {!isLogged ? (
        <Fragment>
          <Redirect
            to={{
              pathname: "/login",
              state: { error: "Please sign in before posting memes", remind_to_login: true },
            }}
          />
        </Fragment>
      ) : (
        <Fragment>
      <h3>POST MEME</h3>
          <form  onSubmit={onSubmit}>
            <input className="d-block" placeholder="Name" name="name" />
            <input className="d-block" placeholder="Meme URL" name="image" />
            <textarea
              className="d-block"
              placeholder="Description"
              name="description"
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged_Main,
  username: state.auth.username,
});

const mapDispatchtoProps = (dispatch) => ({
  postMeme: (e) => dispatch(postMeme(e)),
  checkAuth: (e) => dispatch(checkAuth(e)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(PostMeme);
