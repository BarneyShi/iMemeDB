import * as actions from "../actions/auth";

const initialState = {
  isLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:
      return { isLogged: true, user: action.payload };
    case actions.NOTLOGGEDIN:
        return {isLogged: false}
    default:
      return state;
  }
};

export default authReducer;
