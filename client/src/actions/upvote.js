import axios from "axios";
import { Cookies } from "react-cookie";
export const UPVOTE = "UPVOTE";

export const upvote_meme = (vote) => ({
  type: UPVOTE,
  payload: vote,
});

export const upvoteMeme = (e) => (dispatch) => {
  const id = e.target.getAttribute("data-id");
  const cookie = new Cookies();
  const token = cookie.get("token");
  //BUG FIXED: Must specify NULL for post data
  axios
    .post(`/memes/${id}/upvote`,null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => dispatch(upvote_meme(parseInt(res))));
};
