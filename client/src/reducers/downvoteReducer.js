import * as actions from "../actions/downvote";

const initialState = {
  isDownvoted: false,
  downVotes: 0
};

const downvoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DOWNVOTE:
      return { ...state, isDownvoted: true };
    default:
      return state;
  }
};
export default downvoteReducer;
