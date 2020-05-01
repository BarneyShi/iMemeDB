import * as actions from "../actions/upvote";

const initialState = {
  isUpvoted: false,
  upVotes: 0
};

const upvoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPVOTE:
      return { ...state, isUpvoted: true, upVotes:action.payload };
    default:
      return state;
  }
};
export default upvoteReducer;