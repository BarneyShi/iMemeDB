import * as actions from "../actions/deleteMeme";

const initialState = {
  meme_deleted: false,
};

const MemeDeletionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MEME_DELETED:
      return { meme_deleted: true };
    case actions.MEME_NOT_DELETED:
      return { meme_deleted: false };
    default:
      return state;
  }
};
export default MemeDeletionReducer
