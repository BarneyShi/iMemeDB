import axios from 'axios'
import {Cookies} from 'react-cookie';
import { notlogged } from './auth'
export const LOGGEDIN = 'LOGGEDIN'
export const NOT_LOGGEDIN = 'NOT_LOGGEDIN'

const loggin_type = (arg) => ({
    type: LOGGEDIN,
    payload: arg
})
const not_logged = (arg) => ({
    type: NOT_LOGGEDIN,
    payload: arg
})

export const log_in = () => dispatch => {
    axios.post('http://localhost:3000/user/login',{
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    .then(res => {
        let cookie = new Cookies()
        cookie.set('token', res.data.token, {path: '/'});
        dispatch(loggin_type(res.data.username))
    })
    .catch(err => {
        if(err) dispatch(not_logged())
    })
}
 
