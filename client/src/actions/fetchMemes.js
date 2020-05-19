import axios from 'axios'
export const GET_MEMES = 'GET_MEMES';

//This is action creator
export const getMemes = memes => ({
    type: GET_MEMES,
    payload: memes
})


export const fetchMemes = () => dispatch => {
    axios.get('/memes').then(response => dispatch(getMemes(response.data)))
}