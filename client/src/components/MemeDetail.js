import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMemes } from "../actions/fetchMemes";
import { post_comment } from "../actions/comment";
import { checkAuth } from "../actions/auth";
import { delete_comment } from "../actions/deleteComment";

const onClick = (e) => {
  if (e.target.firstElementChild) {
    e.target.firstElementChild.style.display = "initial";
    e.target.firstElementChild.focus();
  }
};
//SMART TRICKS - USE ONBLUR TO CLOSE MODALS
const onBlur = () => {
  let length = document.getElementsByClassName("comment_delete_modal").length;
  for (let i = 0; i < length; i++) {
    document.getElementsByClassName("comment_delete_modal")[i].style.display =
      "none";
  }
};

const MemeDetail = ({
  memesData,
  fetchMemes,
  username,
  match,
  postComment,
  posted,
  failure,
  error_msg,
  deleteComment,
  comment_deleted,
}) => {
  useEffect(() => {
    fetchMemes();
  }, [memesData, fetchMemes]);

  //HOOK to Display ERROR
  useEffect(() => {
    if (failure) {
      document.getElementById("comment_error").innerText = error_msg;
    }
    if (username != null && failure)
      document.getElementById("comment_error").innerText = "";

    if (posted) window.location.reload();
  }, [failure, posted, username]);

  const submitComment = () => {
    const comment = document.getElementById("comment_text").value;
    postComment(comment, match.params.id);
  };

  //DELETE COMMENT
  const clickToDelteComment = e => {
    const comment_id = e.target.getAttribute('data-commentid');
    const meme_id = e.target.getAttribute('data-memeid');
    deleteComment(meme_id,comment_id);
  }

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
                    <textarea
                      id="comment_text"
                      onChange={() => {
                        document.getElementById(
                          "comment_button"
                        ).style.display = "initial";
                      }}
                      placeholder="..Comment"
                    ></textarea>{" "}
                    <p
                      id="comment_error"
                      style={{ color: "red", fontStyle: "italic" }}
                    ></p>
                    <input
                      type="button"
                      value="Submit"
                      id="comment_button"
                      onClick={submitComment}
                    />
                    {meme.comments.map((comment, index) => {
                      return (
                        <p key={index}>
                          <span id="commenters">{comment.commenter}</span>{" "}
                          <br /> {/* Delete comment */}
                          {/* Conditional render DELETE BUTTON */}
                          {comment.commenter === username ? <Fragment>
                            <span onClick={onClick} style={{ float: "right" }}>
                            &#215;
                            <span
                              tabIndex="0"
                              onBlur={onBlur}
                              className="comment_delete_modal"
                              data-commentid={comment._id}
                              data-memeid = {meme._id}
                              onClick={clickToDelteComment}
                            >
                              Delete
                            </span>
                          </span>
                          </Fragment>: null}
                        
                          <span style={{ fontSize: "0.75rem" }}>
                            &#x1F550; { comment.date.slice(0, 10)}
                          </span>
                          <br />
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

      {/* Comment Delete Confirmation */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  memesData: state.memes.memesData,
  isLoading: state.memes.isLoading,
  username: state.auth.username,
  posted: state.comment.posted,
  failure: state.comment.failure,
  error_msg: state.comment.error_msg,
  comment_deleted: state.comment_deletion.comment_deleted,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemes: () => dispatch(fetchMemes()),
  checkAuth: (e) => dispatch(checkAuth(e)),
  postComment: (comment, id) => dispatch(post_comment(comment, id)),
  deleteComment: (meme_id, comment_id) =>
    dispatch(delete_comment(meme_id, comment_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MemeDetail);
