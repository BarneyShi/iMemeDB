import axios from 'axios'
import { Cookies } from "react-cookie";

export const COMMENT_DELETE = 'COMMENT_DELETE'
export const COMMENT_DELETE_ERROR = 'COMMENT_DELETE_ERROR'

export const delete_comment_type = {
    type: COMMENT_DELETE
}
export const not_delete_comment_type = {
    type: COMMENT_DELETE_ERROR
}

export const delete_comment = (meme_id,comment_id) => dispacth => {
  const cookie = new Cookies();
  const token = cookie.get("token");

    axios.delete(`http://localhost:3000/memes/${meme_id}/comments/${comment_id}`, {
        headers: {
            Authorization: "Bearer " + token,
        }
    })
    .then(res => dispacth(delete_comment_type))
    .catch(err => {
        if(err)
        dispacth(not_delete_comment_type)
    })
}