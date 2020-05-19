import axios from 'axios'
import { Cookies } from "react-cookie";

export const DOWNVOTE = 'DOWNVOTE'


export const downvote_meme = downvote => ({
    type: DOWNVOTE,
    payload: downvote
})

export const downvoteMeme = e => dispatch => {
    const id = e.target.getAttribute('data-id');
    const cookie = new Cookies();
    const token = cookie.get("token");
    axios.post(`/memes/${id}/downvote`,null,{
        headers: {
            Authorization: "Bearer " + token,
          },
    }).then(res=>dispatch(downvote_meme(parseInt(res))))
}