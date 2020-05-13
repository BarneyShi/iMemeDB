import axios from "axios";
import { Cookies } from "react-cookie";
export const SUCCESS_COMMENT = "SUCCESS_COMMENT";
export const FALIURE_COMMENT_LOGIN_NEED = "FALIURE_COMMENT_LOGIN_NEED";

export const comment_success = () => ({
  type: SUCCESS_COMMENT,
});

export const comment_failure = (error) => ({
  type: FALIURE_COMMENT_LOGIN_NEED,
  payload: error,
});

export const post_comment = (comment, id) => (dispatch) => {
  const cookie = new Cookies();
  const token = cookie.get("token");
  axios
    .post(
      `http://localhost:3000/memes/${id}/comments`,
      { comment: comment },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => dispatch(comment_success()))
    .catch((err) => dispatch(comment_failure(err.message)));
};
