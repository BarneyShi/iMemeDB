import axios from 'axios'
export const UPVOTE = 'UPVOTE';

export const upvote_meme = vote => ({
    type: UPVOTE,
    payload: vote
})

export const upvoteMeme = e => dispatch => {
    const id = e.target.getAttribute('data-id');
    axios.post(`http://localhost:3000/memes/${id}/upvote`).then(res=>dispatch(upvote_meme(parseInt(res))))
}