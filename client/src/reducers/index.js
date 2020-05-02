import {combineReducers} from 'redux'

import fetchMemesReducer from './fetchMemesReducer'
import postMemeReducer from './postMemeReducer'
import upvoteReducer from './upvoteReducer'
import downvoteReducer from './downvoteReducer'

const rootReducer = combineReducers({
    memes: fetchMemesReducer,
    postmeme: postMemeReducer,
    upvotememe: upvoteReducer,
    downvotememe: downvoteReducer
})

export default rootReducer;