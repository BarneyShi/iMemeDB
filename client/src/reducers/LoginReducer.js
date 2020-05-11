import * as actions from "../actions/login";

const initialState = {
  isLogged: false,
  username: [],
  attempt: false
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:
      return { isLogged: true};
    case actions.NOT_LOGGEDIN:
      return {isLogged: false, username: null,attempt: true};
    default:
      return state;
  }
};
export default LoginReducer;
