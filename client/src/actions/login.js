import axios from "axios";
import { Cookies } from "react-cookie";
export const LOGGEDIN = "LOGGEDIN";
export const NOT_LOGGEDIN = "NOT_LOGGEDIN";

const loggin_type = (arg) => ({
  type: LOGGEDIN,
  payload: arg,
});
const not_logged = (arg) => ({
  type: NOT_LOGGEDIN,
  payload: arg,
});

export const log_in = () => (dispatch) => {
  axios
    .post("/user/login", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then((res) => {
      let cookie = new Cookies();
      cookie.set("token", res.data.token, { path: "/" });
      dispatch(loggin_type(res.data.username));
    //   return new Promise((reslove, reject)=>{
    //     let cookie = new Cookies();
    //     cookie.set("token", res.data.token, { path: "/" });
    //     dispatch(loggin_type(res.data.username));
    //     reslove(true)
    //   })
    })
    .catch((err) => {
      if (err) {
        dispatch(not_logged());
      }
    });
};
