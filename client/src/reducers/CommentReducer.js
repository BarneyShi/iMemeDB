import * as actions from "../actions/comment";

const initialState = {
  posted: false,
  failure: false,
  error_msg: "",
};

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUCCESS_COMMENT:
      return {posted: true, failure: false, error_msg:'123' };
    case actions.FALIURE_COMMENT_LOGIN_NEED:
      return { ...state, failure: true,posted:false,error_msg:'Please sign in to comment' };
    default:
      return state;
  }
};
export default CommentReducer;
