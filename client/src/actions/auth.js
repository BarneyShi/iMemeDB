import axios from "axios";
export const LOGGEDIN = "LOGGEDIN";
export const NOTLOGGEDIN = "NOTLOGGEDIN";

const logged = (arg) => ({
  type: LOGGEDIN,
  payload: arg,
});
const notlogged = () => ({
  type: NOTLOGGEDIN,
});

export const checkAuth = () => (dispatch) => {
  axios
    .get("http://localhost:3000/user/checkauth", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExQGdtYWlsLmNvbSIsImlhdCI6MTU4ODc2MjI0NSwiZXhwIjoxNTg4NzYzMTQ1fQ.LZtJd19JZIS7cvVHKvdn0gSPruCQikoKQ0j6ImHSgOg",
      },
    })
    .then(result => {
        // if(err) console.log(err)
        console.log('Logged in')
      if (result.status === 200) dispatch(logged(result));
    })
    .catch((err) => {
        if(err) console.log('Error ' + err.response.status );
      dispatch(notlogged);
    });
};
