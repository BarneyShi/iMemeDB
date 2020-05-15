import * as actions from "../actions/deleteComment";

const initialState = {
  comment_deleted: false,
};

const DeleteCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COMMENT_DELETE:
      return { comment_deleted: true };
    case actions.COMMENT_DELETE_ERROR:
      return { comment_deleted: false };
    default:
      return state;
  }
};

export default DeleteCommentReducer;
