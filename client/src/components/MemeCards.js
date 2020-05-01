import React, { Fragment, useEffect} from "react";
import { fetchMemes } from "../actions/fetchMemes";
import {upvoteMeme} from '../actions/upvote';
import { connect } from "react-redux";

const MemeCards = ({ dispatch, memesData, isLoading, fetchMemes, upvoteMeme }) => {
  //HERE!! MUst include memesData so that fetchMemes is called everytime DB updated!!
  useEffect(() => {
    fetchMemes();
  },[memesData,fetchMemes]);

  //Click Upvote/Downvote Emoji
  const upvote = e => {
    upvoteMeme(e);
  }


  return (
    <Fragment>
      {!isLoading
        ? memesData.map((meme, index) => (
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card">
                <div class="card-header">
                  <h5>{meme.name}</h5>
                </div>
                <img
                  id={meme._id}
                  key={index}
                  alt="meme-img"
                  className="card-img-top"
                  src={meme.image}
                />
                <div className="card-body">
                  {/* <div>
                  <h5> {meme.description}</h5>
                  </div> */}
                  <div>
                  <span data-id={meme._id} onClick={upvote}  role="img" aria-label="upvote">
                    👍
                  </span>{" "}
                  <span>{meme.upvotes} </span>
                  <span data-id={meme._id} role="img" aria-label="downvote">
                    👎
                  </span>
                  <span>{meme.downvotes} </span>
                  </div>

                </div>
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  memesData: state.memes.memesData,
  isLoading: state.memes.isLoading,
  isUpvoted: state.upvotememe.isUpvoted,
  upVotes: state.upvotememe.upVotes
});

const mapDispatchToProps = dispatch => ({
  fetchMemes : () => dispatch(fetchMemes()),
  upvoteMeme: (e) => dispatch(upvoteMeme(e))
})

export default connect(mapStateToProps,mapDispatchToProps)(MemeCards);
