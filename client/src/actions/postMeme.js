import axios from "axios";
import { Cookies } from "react-cookie";
export const POST_MEME = "POST_MEME";
export const newMeme = () => ({
  type: POST_MEME,
});

export const postMeme = (e) => (dispatch) => {
  const form_data = new FormData(e.target);
  const cookie = new Cookies();
  const token = cookie.get("token");
  axios
    .post("/memes", form_data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(() => dispatch(newMeme));
};
