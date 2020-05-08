import * as actions from "../actions/register";

const initialState = {
  isRegistered: false,
  user: null,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTERED:
      return { isRegistered: true, user: action.payload };
    case actions.NOT_REGISTER:
      return { isRegistered: false };
    default:
      return state;
  }
};
export default RegisterReducer;
