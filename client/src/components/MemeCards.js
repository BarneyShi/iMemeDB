import React, { Fragment, useEffect} from "react";
import { fetchMemes } from "../actions/fetchMemes";
import {upvoteMeme} from '../actions/upvote';
import {downvoteMeme} from '../actions/downvote'
import { connect } from "react-redux";

const MemeCards = ({ dispatch, memesData, isLoading, fetchMemes, upvoteMeme, downvoteMeme }) => {
  //HERE!! MUst include memesData so that fetchMemes is called everytime DB updated!!
  useEffect(() => {
    fetchMemes();
  },[memesData,fetchMemes]);

  //Click Upvote/Downvote Emoji
  const upvote = e => {
    upvoteMeme(e);
  }
  const downvote = e => {
    downvoteMeme(e);
  }


  return (
    <Fragment>
      {!isLoading
        ? memesData.map((meme, index) => (
            <div className="col-md-4 col-sm-6 col-12" key={index}>
              <div className="card">
                <div className="card-header">
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
                  <span data-id={meme._id} onClick={downvote} role="img" aria-label="downvote">
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
});

const mapDispatchToProps = dispatch => ({
  fetchMemes : () => dispatch(fetchMemes()),
  upvoteMeme: (e) => dispatch(upvoteMeme(e)),
  downvoteMeme: e => dispatch(downvoteMeme(e))
})

export default connect(mapStateToProps,mapDispatchToProps)(MemeCards);
