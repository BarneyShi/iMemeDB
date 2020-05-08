import * as actions from "../actions/auth";

const initialState = {
  isLogged_Main: false,
  username: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:
      return { isLogged_Main: true, username: action.payload };
    case actions.NOTLOGGEDIN:
        return {isLogged_Main: false, user: null}
    default:
      return state;
  }
};

export default authReducer;
