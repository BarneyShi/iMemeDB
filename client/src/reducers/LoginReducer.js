import * as actions from "../actions/login";

const initialState = {
  isLogged: false,
  username: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:

      // return { isLogged: true, user: action.payload };
      return { isLogged: true};

    case actions.NOT_LOGGEDIN:
      return {isLogged: false, username: null};
    default:
      return state;
  }
};
export default LoginReducer;
