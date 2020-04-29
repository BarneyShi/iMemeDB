import React, { Fragment, useEffect} from "react";
import {fetchMemes} from '../actions/fetchMemes'
import {connect} from 'react-redux'

const MemeCards = ({ dispatch, memesData, isLoading }) => {
  useEffect(()=>{
    dispatch(fetchMemes())
  }, [dispatch])
  return (
    <Fragment>
      {!isLoading
        ? memesData.map((meme, index) => (
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card">
                {" "}
                <img
                  key={index}
                  alt="meme-img"
                  className="card-img-top"
                  src={meme.image}
                />{" "}
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  memesData: state.memes.memesData,
  isLoading: state.memes.isLoading
})

export default connect(mapStateToProps)(MemeCards) ;
