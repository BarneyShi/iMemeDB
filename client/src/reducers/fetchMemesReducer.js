import * as actions from "../actions/fetchMemes";

const initialState = {
  memesData: [],
  isLoading: true,
};

const fetchMemesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MEMES:
      return { ...state, isLoading: false, memesData: action.payload };
    default:
      return state;
  }
};
export default fetchMemesReducer;
