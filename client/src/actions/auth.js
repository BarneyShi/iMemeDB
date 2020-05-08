import axios from "axios";
export const LOGGEDIN = "LOGGEDIN";
export const NOTLOGGEDIN = "NOTLOGGEDIN";

export const logged = (arg) => ({
  type: LOGGEDIN,
  payload: arg,
});
export const notlogged = () => ({
  type: NOTLOGGEDIN,
});

export const checkAuth = (token) => (dispatch) => {
  axios
    .get("http://localhost:3000/user/checkauth", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((result) => {
      // console.log(result.data.Data);
      if (result.status === 200) {
        dispatch(logged(result.data.Data.username));
      }
    })
    .catch((err) => {
      if (err) console.log("Auth Error " + err.response.status);
      dispatch(notlogged);
    });
};
