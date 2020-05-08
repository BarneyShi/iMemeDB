import * as actions from "../actions/postMeme";

const initialState = {
  isPosted: false
};

const postMemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_MEME:
      return { ...state, isPosted: true};
    default:
      return state;
  }
};
export default postMemeReducer;
