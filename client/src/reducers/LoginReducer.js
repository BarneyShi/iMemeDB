import * as actions from "../actions/login";
import {Cookies} from 'react-cookie';

const initialState = {
  isLogged: false,
  user: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:
        let cookie = new Cookies()
        cookie.set('token', action.payload, {path: "/"});
      return { isLogged: true, user: action.payload };
    case actions.NOT_LOGGEDIN:
      return {isLogged: false, user: null};
    default:
      return state;
  }
};
export default LoginReducer;
