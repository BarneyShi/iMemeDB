import React from "react";
import "../stylesheet/postmeme.css";
import { useHistory } from "react-router-dom";
import { postMeme } from "../actions/postMeme";
import { connect } from "react-redux";

const PostMeme = ({ dispatch, isPosted }) => {
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(postMeme(event));
    history.push("/");
  };

  return (
    <div>
      <h1>POST MEME</h1>
      <form onSubmit={onSubmit}>
        <input className="d-block" placeholder="Name" name="name" />
        <input className="d-block" placeholder="Meme URL" name="image" />
        <textarea
          className="d-block"
          placeholder="Description"
          name="description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default connect(null)(PostMeme);
