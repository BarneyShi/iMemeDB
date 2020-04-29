import axios from "axios";
export const POST_MEME = "POST_MEME";
export const newMeme = () => ({
  type: POST_MEME,
});

export const postMeme = (e) => (dispatch) => {
  const form_data = new FormData(e.target);
  axios
    .post("http://localhost:3000/memes", form_data)
    .then(() => dispatch(newMeme));
};
