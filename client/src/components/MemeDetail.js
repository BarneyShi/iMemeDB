import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMemes } from "../actions/fetchMemes";
import { checkAuth } from "../actions/auth";

const MemeDetail = ({ memesData, fetchMemes, username, checkAuth, match }) => {
  useEffect(() => {
    fetchMemes();
  }, [memesData, fetchMemes]);
  return (
    <div id="meme_detail">
      {memesData.map((meme, index) => {
        if (meme._id.toString() === match.params.id) {
          return (
            <Fragment key={index}>
              <div className="col-12 col-sm-8 offset-sm-2">
                <div className="card">
                  <div className="card-header">
                    <h4>{meme.name}</h4>
                  </div>
                  <img alt="meme" key={index} src={meme.image} />
                  <div className="card-body">
                    <p style={{ fontStyle: "italic" }}>
                      Description: &nbsp;
                      {meme.description}
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                      Uploader: &nbsp;
                      {meme.author}
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                      Date: &nbsp;
                      {meme.date.slice(0, 10)}{" "}
                    </p>
                  </div>

                  <div className="card-body" id="comment_section">
                    <p> Commnet: </p>  <input value='Add a new comment' type='button'></input>
                    
                    {meme.comments.map((comment, index) => {
                      return (
                        <p key={index}>
                          <span>{comment.commenter}</span> <br />{" "}
                      <span style={{ fontSize: "0.75rem" }}>&#x1F550; {comment.date.slice(0,10)}</span><br/>
                          {comment.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  memesData: state.memes.memesData,
  isLoading: state.memes.isLoading,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemes: () => dispatch(fetchMemes()),
  checkAuth: (e) => dispatch(checkAuth(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MemeDetail);
