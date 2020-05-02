import axios from 'axios'
export const DOWNVOTE = 'DOWNVOTE'

export const downvote_meme = downvote => ({
    type: DOWNVOTE,
    payload: downvote
})

export const downvoteMeme = e => dispatch => {
    const id = e.target.getAttribute('data-id');
    axios.post(`http://localhost:3000/memes/${id}/downvote`).then(res=>dispatch(downvote_meme(parseInt(res))))
}