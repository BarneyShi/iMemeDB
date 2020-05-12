import React, { Fragment, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { fetchMemes } from "../actions/fetchMemes";
import { upvoteMeme } from "../actions/upvote";
import { downvoteMeme } from "../actions/downvote";
import { connect } from "react-redux";
import { Cookies } from "react-cookie";
import { checkAuth } from "../actions/auth";

const MemeCards = ({
  dispatch,
  checkAuth,
  memesData,
  isLoading,
  fetchMemes,
  upvoteMeme,
  downvoteMeme,
  username,
}) => {
  //HERE!! MUst include memesData so that fetchMemes is called everytime DB updated!!
  useEffect(() => {
    fetchMemes();
  }, [memesData, fetchMemes]);

  //Use Cookies
  let cookie = new Cookies();
  useEffect(() => checkAuth(cookie.get("token")), [cookie.get("token")]);

  //Use History
  const history = useHistory();

  //Click Upvote/Downvote Emoji
  const upvote = (e) => {
    if(username === null) {
      history.push('/login')
    }
    upvoteMeme(e);
  };
  const downvote = (e) => {
    downvoteMeme(e);
  };


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
                    {/* UPVOTE ICON */}
                    {meme.upvoted_users.includes(username) ? (
                      <Fragment>
                        <span
                          id="upvote_icon"
                          data-id={meme._id}
                          onClick={upvote}
                          role="img"
                          aria-label="upvote"
                          style={{
                            textShadow: "0 0 0 #d39e00",
                            color: "transparent",
                          }}
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          👍
                        </span>{" "}
                        <span>{meme.upvotes} </span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <span
                          id="upvote_icon"
                          data-id={meme._id}
                          onClick={upvote}
                          role="img"
                          aria-label="upvote"
                        >
                          👍
                        </span>{" "}
                        <span>{meme.upvotes} </span>
                      </Fragment>
                    )}
                    {/* DOWN_VOTE ICON */}
                    {meme.downvoted_users.includes(username) ? (
                      <Fragment>
                        <span
                          id="downvote_icon"
                          data-id={meme._id}
                          role="img"
                          onClick={downvote}
                          aria-label="downvote"
                          style={{
                            textShadow: "0 0 0 #d39e00",
                            color: "transparent",
                          }}
                        >
                          👎
                        </span>
                        <span>{meme.downvotes} </span>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <span
                          id="downvote_icon"
                          data-id={meme._id}
                          onClick={downvote}
                          role="img"
                          aria-label="downvote"
                        >
                          👎
                        </span>
                        <span>{meme.downvotes} </span>
                      </Fragment>
                    )}
                     <button className='btn btn-info' onClick={()=>{
                       history.push(`memes/${meme._id}`)
                     }}>Info</button>
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
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMemes: () => dispatch(fetchMemes()),
  upvoteMeme: (e) => dispatch(upvoteMeme(e)),
  downvoteMeme: (e) => dispatch(downvoteMeme(e)),
  checkAuth: (e) => dispatch(checkAuth(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemeCards);
