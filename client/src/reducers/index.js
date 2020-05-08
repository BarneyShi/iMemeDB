import {combineReducers} from 'redux'

import fetchMemesReducer from './fetchMemesReducer'
import postMemeReducer from './postMemeReducer'
import upvoteReducer from './upvoteReducer'
import downvoteReducer from './downvoteReducer'
import authReducer from './authReducer'
import RegisterReducer from './RegisterReducer'
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
    memes: fetchMemesReducer,
    postmeme: postMemeReducer,
    upvotememe: upvoteReducer,
    downvotememe: downvoteReducer,
    auth: authReducer,
    register: RegisterReducer,
    login: LoginReducer
})

export default rootReducer;