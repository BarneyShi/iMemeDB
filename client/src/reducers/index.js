import {combineReducers} from 'redux'

import fetchMemesReducer from './fetchMemesReducer'
import postMemeReducer from './postMemeReducer'
import upvoteReducer from './upvoteReducer'

const rootReducer = combineReducers({
    memes: fetchMemesReducer,
    postmeme: postMemeReducer,
    upvotememe: upvoteReducer
})

export default rootReducer;