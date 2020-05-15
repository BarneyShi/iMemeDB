import axios from "axios";
import { Cookies } from "react-cookie";

export const MEME_DELETED = "MEME_DELETED";
export const MEME_NOT_DELETED = "MEME_NOT_DELETED";

export const deleted_type = {
  type: MEME_DELETED,
};
export const not_delete_type = {
  type: MEME_NOT_DELETED,
};

export const deleteMeme = (meme_id) => (dispatch) => {
  const cookie = new Cookies();
  const token = cookie.get("token");
  axios
    .delete(`http://localhost:3000/memes/${meme_id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => dispatch(deleted_type))
    .catch((err) => {
      if (err) dispatch(not_delete_type);
    });
};
