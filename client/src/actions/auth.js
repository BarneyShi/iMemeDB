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
        Authorization:
          "Bearer "+ token,
      },
    })
    .then(result => {
        // if(err) console.log(err)
        console.log(result.data.Data)
      if (result.status === 200) {dispatch(logged(result.data.Data));}
    })
    .catch((err) => {
        if(err) console.log('Error ' + err.response.status );
      dispatch(notlogged);
    });
};
